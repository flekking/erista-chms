<?php

namespace Core\Auth;

use App\Models\Auth\Church;

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
}
