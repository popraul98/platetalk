<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NumberPlate extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'number_plates';

    protected $fillable = [
        'number',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
