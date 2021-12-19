<?php

namespace App\Models\Concerns\Foreign\Auth;

use App\Models\Auth\Church;

trait BelongsToChurch
{
    public function church()
    {
        return $this->belongsTo(Church::class);
    }
}
