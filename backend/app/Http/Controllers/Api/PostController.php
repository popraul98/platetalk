<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index()
    {
        // Obține postările cu utilizatorul, comentarii și like-uri
        $posts = Post::with(['user', 'comments', 'likes'])->latest()->get();

        return PostResource::collection($posts);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'content' => 'required|string',
            'public' => 'boolean',
            'number_plate_id' => 'required|exists:number_plates,id',
            'image' => 'nullable|image',
        ]);

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('post_images', 'public');
        }

        $data['user_id'] = Auth::id();  // Folosește `Auth::id()` pentru utilizatorul autentificat

        return Post::create($data);
    }

    public function show(Post $post)
    {
        return $post->load(['user', 'comments.user', 'likes']);
    }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        $post->delete();

        return response()->noContent();
    }
}
