<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'content' => $this->content,
            'image' => $this->image,
            'created' => Carbon::parse($this->created_at)->format('d.m.Y'),
            'user' => [
                'name' => $this->user->name,
                'profile_image' => $this->user->profile_image,
            ],
            'number_plate' => [
                'number' => $this->numberPlate->number
            ],
            'comments_count' => $this->comments->count(),
            'likes_count' => $this->likes->count()
        ];
    }
}
