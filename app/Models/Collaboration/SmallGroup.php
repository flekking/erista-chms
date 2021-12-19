<?php

namespace App\Models\Collaboration;

use Jenssegers\Mongodb\Eloquent\{
    Model,
    SoftDeletes,
};
use App\Models\Concerns\Foreign\Collaboration\BelongsToMembers;

class SmallGroup extends Model
{
    use SoftDeletes;
    use BelongsToMembers;
}
