<?php

namespace App\Controllers\Ajax\Utils;

use Core\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedController extends Controller
{
    public function index(Request $request)
    {
        return [
            'authenticated' => Auth::check(),
        ];
    }
}
