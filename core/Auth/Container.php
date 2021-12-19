<?php

namespace Core\Auth;

use App\Models\Auth\Church;
use Illuminate\Support\Facades\Auth;

class Container
{
    protected static $church;

    protected static $id;

    public static function set(Church $church)
    {
        self::$church = $church;
        self::$id = $church->_id;
    }

    public static function setBySubdomain(string $churchSubdomain)
    {
        self::set(Church::where('subdomain', $churchSubdomain)->first());
    }

    public static function get() : Church
    {
        return self::$church;
    }

    public static function userExists($id) : bool
    {
        return in_array($id, self::get()->users()->pluck('_id')->toArray());
    }

    public static function check() : bool
    {
        return Auth::check() && self::userExists(Auth::id());
    }
}
