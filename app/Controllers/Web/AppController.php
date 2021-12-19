<?php

namespace App\Controllers\Web;

use Core\Controller;
use App\Requests\Web\App\IndexRequest;

class AppController extends Controller
{
    public function index(IndexRequest $request)
    {
        return view('web.app');
    }
}
