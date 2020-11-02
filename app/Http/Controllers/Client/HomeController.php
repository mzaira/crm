<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index() {
        return view('clients.pages.index');
    }

    public function presentations() {
        $meta = ['active' => 'presentations', 'title' => 'My Presentation'];
        return view('clients.pages.presentations', $meta);
    }

    public function meeting_minutes() {
        $meta = ['active' => 'meeting_minutes', 'title' => 'My Meeting Minutes'];
        return view('clients.pages.meeting_minutes', $meta);
    }

    public function documents() {
        $meta = ['active' => 'documents', 'title' => 'My Documents'];
        return view('clients.pages.documents', $meta);
    }

}
