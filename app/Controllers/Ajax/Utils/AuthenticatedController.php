<?php

namespace App\Controllers\Ajax\Utils;

use Core\Controller;
use Illuminate\Http\Request;
use Core\Auth\Container;

class AuthenticatedController extends Controller
{
    public function index(Request $request)
    {
        return [
            'authenticated' => Container::check(),
        ];
    }
}
