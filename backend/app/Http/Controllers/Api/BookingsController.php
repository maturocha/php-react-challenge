<?php

namespace App\Http\Controllers\Api;

use App\Booking;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;

class BookingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) : JsonResponse
    {
        return response()->json($this->paginatedQuery($request));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) : JsonResponse
    {
        try{
            
            $request->validate([

                'fullname' => 'required|string|max:255',
                //'email' => 'unique:bookings,email,NULL,id,activity_id,' . $request->activity_id,
                'quantity' => 'required',
                'price_booking' => 'required',
            ],
            [
                'email.unique' => "Error! El team elegido ya se encuentra inscripto en este Torneo"
            ]);

            $attributes = $request->all();
            $attributes['date_booking'] = date('Y-m-d H:i:s');

            $booking = Booking::create($attributes);

         }
         catch(\Exception $e){
            // do task when error
            return response()->json([
                'status' => 'error',
            'data' => null,
            'message' => 'Ups! Ha ocurrido un error!'
            ]
                , 500);
            
         }

        return response()->json([
            'status' => 'success',
            'data' => $booking,
            'message' => 'Reserva creada con exito!'
        ]
            , 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\bookings  $bookings
     * @return \Illuminate\Http\Response
     */
    public function show(bookings $bookings)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\bookings  $bookings
     * @return \Illuminate\Http\Response
     */
    public function edit(bookings $bookings)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\bookings  $bookings
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, bookings $bookings)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\bookings  $bookings
     * @return \Illuminate\Http\Response
     */
    public function destroy(bookings $bookings)
    {
        //
    }

    protected function paginatedQuery(Request $request) : LengthAwarePaginator
    {
        $bookings = Booking::orderBy(
             'date_booking',
             'ASC'
        )
        ->when($request->has('search'), function ($query) use ($request) {
            $search = $request->input('search');
            return $query->where(function($q) use ($search) {
                $q->where('email', $search);
            });
        });

        return $bookings->paginate(12);
    }
}
