<?php

namespace App\Controllers\Web;

use Core\Controller;

class AppController extends Controller
{
    public function index()
    {
        return view('web.app');
    }
}
