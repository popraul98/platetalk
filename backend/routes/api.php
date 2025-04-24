<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthenticationController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\CommentController;


Route::middleware([\App\Http\Middleware\PublicApiKeyCheck::class])->group(function () {
    
    Route::apiResource('posts', PostController::class);
    //Route::post('likes', [LikeController::class, 'store']);
    //Route::post('comments', [CommentController::class, 'store']);

    //need user auth
    Route::middleware('auth:api')->group(function () {

        Route::post('/profile/upload-image', [\App\Http\Controllers\UserController::class, 'uploadProfileImage']);
    });

    Route::post('register', [AuthenticationController::class, 'register'])->name('register');
    Route::post('login', [AuthenticationController::class, 'login'])->name('login');

});