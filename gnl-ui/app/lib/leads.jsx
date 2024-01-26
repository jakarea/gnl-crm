export const LeadTypes = async function getAllLeadType() {
    const response = await fetch(process.env.NEXT_BACKEND_URL +'/api/lead-type', 
        {
            cache: 'no-cache'
        }
    );
    return response.json();
}
