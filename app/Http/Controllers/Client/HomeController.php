<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Auth;

use App\Models\MeetingMinutes;
use App\Models\Presentations;
use App\Models\Documents;
use App\Models\User;

class HomeController extends Controller
{

    public function __construct() {
        $this->middleware('role:client');
    }
    //
    public function index() {
        $meta = [
                'active' => 'dashboard', 
                'title' => 'My Dashboard',
                'total_presentation' => Presentations::count(),
                'total_minutes' => MeetingMinutes::count(),
                'total_documents' => Documents::count()
            ];
        return view('clients.pages.index', $meta);
    }

    public function presentations() {
        $meta = [
                'active' => 'presentations', 
                'title' => 'My Presentation',
                'files' => Presentations::where('client_id', Auth::User()->id)->get(),
                 ];
        return view('clients.pages.presentations', $meta);
    }

    public function meeting_minutes() {
        $meta = [
                 'active' => 'meeting_minutes', 
                 'title' => 'My Meeting Minutes',
                 'files' => MeetingMinutes::where('client_id', Auth::User()->id)->get(),
                ];
        return view('clients.pages.meeting_minutes', $meta);
    }

    public function documents() {
        $meta = [
            'active' => 'documents', 
            'title' => 'My Documents',
            'files' => Documents::where('client_id', Auth::User()->id)->get(),
        ];
        return view('clients.pages.documents', $meta);
    }

}
