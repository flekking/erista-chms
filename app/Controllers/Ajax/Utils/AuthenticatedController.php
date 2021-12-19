<?php

namespace App\Controllers\Ajax\Utils;

use Core\Controller;
use Illuminate\Support\Facades\Auth;

class AuthenticatedController extends Controller
{
    public function index()
    {
        return [
            'authenticated' => Auth::check()
        ];
    }
}
