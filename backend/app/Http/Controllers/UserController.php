<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function uploadProfileImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = auth()->user();

        // Șterge imaginea veche dacă există
        if ($user->profile_image && Storage::disk('public')->exists($user->profile_image)) {
            Storage::disk('public')->delete($user->profile_image);
        }

        // Salvează noua imagine
        $path = $request->file('image')->store('profile_images', 'public');

        // Actualizează user-ul
        $user->profile_image = $path;
        $user->save();

        return response()->json([
            'message' => 'Imagine salvată cu succes!',
            'image_url' => asset('storage/' . $path),
        ]);
    }
}
