<?php

namespace App\Models\People;

use Jenssegers\Mongodb\Eloquent\{
    Model,
    SoftDeletes,
};
use App\Models\Concerns\Foreign\Auth\BelongsToChurch;
use App\Models\Concerns\Foreign\Collaboration\BelongsToSmallGroups;

class Member extends Model
{
    use SoftDeletes;
    use BelongsToChurch;
    use BelongsToSmallGroups;

    public function memberFamilyRelations()
    {
        return $this->embedsMany(MemberFamilyRelation::class);
    }

    public function memberNotes()
    {
        return $this->embedsMany(MemberNote::class);
    }
}
