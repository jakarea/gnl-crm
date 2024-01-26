"use client"

import { useGetCustomersQuery } from "../../features/customers/customerApi";

const CustomerList = () => {

    const { data: customers, isLoading, isError, error } = useGetCustomersQuery();

    // decide render
    let content = null;

    if (isLoading) {
        content = <p>Customer is loading!!...</p>
    }

    if (!isLoading && isError) {
        content = <p>{error}</p>
    }

    if (!isLoading && !isError && customers?.length === 0) {
        content = <p>No Projects Found!</p>
    }

    if (!isLoading && !isError && customers?.length > 0) {
        content = customers.map((project) => {
            // const { id, customer.name } = customer || {};
            // return ();
            // return single customer here
        });
    }

    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
                Single Customer
            </div>
        </>
    )
}

export default CustomerList;