<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Submit;
use App\Models\GetForm;

class SubmitController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $submit = new Submit([
            'name' => $data['name'],
            'price' => $data['price'],
        ]);

        $submit->save();

        return response()->json(['message' => 'Item added successfully'], 201);
    }
}