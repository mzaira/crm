<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function __construct() {
        $this->middleware('role:administrator');
    }

    public function index() {
        $meta = array('active' => 'dashboard', 'title' => 'Dashboard');
        return view('administrator.pages.dashboard', $meta);
    }

    public function client_page() {
        $meta = array('active' => 'client', 'title' => 'Client');
        return view('administrator.pages.client', $meta);
    }

    public function employee_page() {
        $meta = array('active' => 'employee', 'title' => 'Employee');
        return view('administrator.pages.employee', $meta);
    }

    public function leave_request_page() {
        $meta = array('active' => 'leave_request', 'title' => 'Leave Request');
        return view('administrator.pages.leave_request', $meta);
    }

    public function project_page() {
        $meta = array('active' => 'project', 'title' => 'Project');
        return view('administrator.pages.projects', $meta);
    }

    public function document_page() {
        $meta = array('active' => 'document', 'title' => 'Document');
        return view('administrator.pages.documents', $meta);
    }     

    public function meeting_minutes_page() {
        $meta = array('active' => 'meeting_minutes_pages', 'title' => 'Meeting Minutes');
        return view('administrator.pages.meeting_minutes', $meta);
    }     
    
    public function presentation_page() {
        $meta = array('active' => 'presentations', 'title' => 'Presentations');
        return view('administrator.pages.presentations', $meta);
    }  

}
