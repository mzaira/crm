<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    } 
   
    public function login() {
        return view('public.pages.login');
    }

    public function submit_login() {
        dd($this->request);
    }
}
