<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckDatabaseConnectionController extends Controller
{
    public function checkConnection()
    {
        try {
            $results = DB::table('submits')->select('*')->get();
            return 'Successfully connected to submits';
        } catch (\Illuminate\Database\QueryException $ex) {
            return 'Unable to connect to submits: ' . $ex->getMessage();
        }
    }
}