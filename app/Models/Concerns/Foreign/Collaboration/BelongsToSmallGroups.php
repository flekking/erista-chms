<?php

namespace App\Models\Concerns\Foreign\Collaboration;

use App\Models\Collaboration\SmallGroup;

trait BelongsToSmallGroups
{
    public function smallGroups()
    {
        return $this->belongsToMany(SmallGroup::class);
    }
}
