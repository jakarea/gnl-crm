
export const Customers = async function getAllCustomer(params) {
    // const response = await fetch(`${process.env.NEXT_BACKEND_URL}/api/customer?page=${page}`, {
    //     cache: 'no-cache'
    // });

    const { page, status } = params || {};

    const queryParams = new URLSearchParams();

    if (page !== undefined) {
        queryParams.append('page', page);
    }

    if (status !== undefined) {
        queryParams.append('status', status);
    }

    const queryString = queryParams.toString();

    const apiUrl = queryString ? `${process.env.NEXT_BACKEND_URL}/api/customer?${queryString}` : `${process.env.NEXT_BACKEND_URL}/api/customer`;

    const response = await fetch(apiUrl, {
        cache: 'no-cache'
    });

    return response.json();
};


// export const CustomersByQuery = async ({status}) => {
//     const response = await fetch(`${process.env.NEXT_BACKEND_URL}/api/customer/status?status=${status}`, {
//         cache: 'no-cache'
//     });

//     return response.json();
// };


export const getCustomer = async function SingleCustomer(customerId) {
    const response = await fetch(process.env.NEXT_BACKEND_URL + '/api/customer/' + customerId,
        {
            cache: 'no-cache'
        }
    );
    return response.json();
}
