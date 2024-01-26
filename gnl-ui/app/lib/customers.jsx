export const Customers = async function getAllCustomer() {
    const response = await fetch(process.env.NEXT_BACKEND_URL +'/api/customer', 
        {
            cache: 'no-cache'
        }
    );
    return response.json();
}


export const getCustomer = async function SingleCustomer(customerId) {
    const response = await fetch(process.env.NEXT_BACKEND_URL +'/api/customer/'+ customerId, 
        {
            cache: 'no-cache'
        }
    );
    return response.json();
}
