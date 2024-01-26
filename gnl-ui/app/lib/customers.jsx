
export const Customers = async function getAllCustomer(page) {
    const response = await fetch(`${process.env.NEXT_BACKEND_URL}/api/customer?page=${page}`, {
        cache: 'no-cache'
    });

    return response.json();
};


export const CustomersByQuery = async ({status}) => {
    const response = await fetch(`${process.env.NEXT_BACKEND_URL}/api/customer/status?status=${status}`, {
        cache: 'no-cache'
    });

    return response.json();
};


export const getCustomer = async function SingleCustomer(customerId) {
    const response = await fetch(process.env.NEXT_BACKEND_URL + '/api/customer/' + customerId,
        {
            cache: 'no-cache'
        }
    );
    return response.json();
}
