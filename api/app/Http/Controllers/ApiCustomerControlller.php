<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Services\CustomerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\API\ApiController;
use App\Http\Requests\Customer\CustomerRequest;

class ApiCustomerControlller extends ApiController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index():JsonResponse
    {
        $data['customers'] = Customer::orderByDesc('customer_id')->get();
        $data['totalCustomer'] = Customer::count();


        return $this->jsonResponse(false, $this->success,$data,$this->emptyArray, JsonResponse::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CustomerService $addCustomer, CustomerRequest $request)
    {
        try {

            $customer = $addCustomer->addCustomer($request);
            return $this->jsonResponse(false, 'Customer created successfully', $customer, [], JsonResponse::HTTP_CREATED);

        }catch (\Exception $e) {

            return $this->jsonResponse(true, 'Failed to create customer', $request->all(), [$e->getMessage()], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($customer_id)
    {
       $customer = Customer::findOrFail( $customer_id);
        return $this->jsonResponse(false, $this->success, $customer, $this->emptyArray, JsonResponse::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(CustomerRequest $request, $customer_id)
    // {

    public function update(CustomerRequest $request, $customer_id) {

        $customer = Customer::findOrFail( $customer_id );
        $data = $request->except(['avatar']);

        $customer->update( $data );

        if ($request->hasFile('avatar')) {
            if ($customer->avatar) {
                Storage::disk('public')->delete("customers/{$customer->avatar}");
            }
            $avatar = $request->file('avatar');
            $filename = substr(md5(time()), 0 , 10) .'.' . $avatar->getClientOriginalExtension();
            $avatarPath = $avatar->storeAs('customers', $filename, 'public');
            $customer->update(['avatar' => $avatarPath]);
        }

        $customerInfo = $customer;
        return $this->jsonResponse(false, $this->success, $customerInfo, $this->emptyArray, JsonResponse::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($customer_id)
    {
        $customerInfo = Customer::findOrFail( $customer_id);
        if( $customerInfo->delete() ){
            return $this->jsonResponse(false, $this->success, $customerInfo, $this->emptyArray, JsonResponse::HTTP_OK);
        }

    }
}
