export const SearchCustomers = async function getAllSearchCustomer(query) {
    const response = await fetch(`${process.env.NEXT_BACKEND_URL}/api/project/customer/search?query=${query}`, {
        cache: 'no-cache',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch search results. Status: ${response.status}`);
    }

    return response.json();
}
