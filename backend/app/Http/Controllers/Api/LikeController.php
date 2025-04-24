<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    // Constrângerea pentru a permite doar utilizatorilor autentificați
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function store(Request $request)
    {
        $request->validate([
            'post_id' => 'required|exists:posts,id'
        ]);

        // Verifică dacă utilizatorul deja a dat like
        $like = Like::where('user_id', Auth::id())
            ->where('post_id', $request->post_id)
            ->first();

        if ($like) {
            $like->delete();  // Dacă da like deja, îl șterge
            return response()->json(['liked' => false]);
        } else {
            Like::create([
                'user_id' => Auth::id(),
                'post_id' => $request->post_id
            ]);
            return response()->json(['liked' => true]);
        }
    }
}
