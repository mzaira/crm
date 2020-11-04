<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;

use App\Models\User;
use App\Models\Role;

use Illuminate\Support\Facades\Hash;

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

    public function register() {
        return view('public.pages.register');
    }

    public function submit_login() {

        $status = false;
        
        $this->request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::where('email', $this->request->email)->first();

        if(!$user) {

            $response = ['status' => 'false', 'message' => 'User not Found'];
            return Response()->json($response, 404);

        } else {

            $credentials = $this->request->only('email', 'password');

            if (Auth::attempt($credentials)) {

                $url = '';

                if($user->hasRole('admin')) {
                    $url = route('admin.home');
                } 

                if($user->hasRole('client')) {
                    $url = route('client.index');
                } 

                $response = ['status' => 'true', 'redirect_url' => $url];
                return Response()->json($response, 200);
            }

        }

        $response = ['status' => $status];
        return Response()->json($response, 200);

    }

    public function submit_register() {

        $user = New User;
        $user->name = $this->request->fullname;
        $user->email = $this->request->email;
        $user->password = Hash::make($this->request->password);
        $user->role = 3;

        if($user->save()) {
            $user->attachRole('client');
            $status = true;
        }

        $response = array('status' => $status);
        return Response()->json($response);

    }

    public function logout() {
        Auth::logout();
        return redirect(route('home.login'));
    }

}
