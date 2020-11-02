<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;

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

        $status = false;
        
        $this->request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = $this->request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            // return redirect()->intended('dashboard');
            $status = true;
        }

        $response = ['status' => $status];
        return Response()->json($response, 200);

    }
}
