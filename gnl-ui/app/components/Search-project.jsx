import React from 'react'

import Image from 'next/image';

import search from "@/public/assets/images/icons/search-ic.svg";


function SearchProject() {

    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchCustomerResults, setSearchResults] = useState([]);
    const [selectedCustomers, setSelectedCustomers] = useState([]);
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

    const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);




    return (
        <div className="form-group search-by-name mt-2 grid-100">
            <div className="search-item">
                <Image src={search} alt="A" className="img-fluid" />
                <input type="text" placeholder="Search Project"
                    name="search" className="form-control" />
            </div>
        </div>
    )
}

export default SearchProject