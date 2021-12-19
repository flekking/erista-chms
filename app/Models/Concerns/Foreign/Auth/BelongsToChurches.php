<?php

namespace App\Models\Concerns\Foreign\Auth;

use App\Models\Auth\Church;

trait BelongsToChurches
{
    public function churches()
    {
        return $this->belongsToMany(Church::class);
    }
}
