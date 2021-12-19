<?php

namespace App\Models\Concerns\Foreign\Collaboration;

use App\Models\Collaboration\SmallGroup;

trait BelongsToSmallGroup
{
    public function smallGroups()
    {
        return $this->belongsToMany(SmallGroup::class);
    }
}
