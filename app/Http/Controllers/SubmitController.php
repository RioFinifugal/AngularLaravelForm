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
    public function update(Request $request, $id)
    {
        $submit = Submit::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);
        $submit = Submit::findOrFail($id);
        $submit->update($request->all());


        return response()->json([
            'message' => 'Row updated successfully.',
            'data' => $submit,
        ]);
    }
    public function destroy($id)
    {
            $submit = Submit::findOrFail($id);
            $submit->delete();

            return response()->json([
                'message' => 'Row deleted successfully.',
            ]);
    }
}