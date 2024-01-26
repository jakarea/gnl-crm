import React, { useState, useEffect } from 'react';

import { LeadTypes } from '@/app/lib/leads';

function AllLeadTypes({ leadInput, handleLeadTypeClick }) {
    const [getLeadTypes, setLeadTypes] = useState([]);
    const [selectedLeadType, setSelectedLeadType] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const { data } = await LeadTypes();
            setLeadTypes(data);
        };

        fetchData();
    }, []);


    const handleLeadTypesClick = (leadType) => {
        handleLeadTypeClick(leadType)
        setSelectedLeadType(leadType.name)
    };

    return (
        <div className="form-group form-error">
            <label htmlFor="lead_type">Type of Lead</label>
            <div className="common-dropdown common-dropdown-two">
                <div className="dropdown dropdown-two dropdown-three">
                    <button className="btn w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedLeadType && selectedLeadType.name ? selectedLeadType.name : "Type of Lead"} <i className="fas fa-angle-down"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-two w-100">
                        {getLeadTypes.map((leadType) => (
                            <li key={leadType.id}>
                                <a className="dropdown-item dropdown-item-two" href="#" onClick={() => handleLeadTypesClick(leadType)}>
                                    {leadType.name}
                                    {/* <i className={isSelected ? 'fas fa-check' : ''}></i> */}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {leadInput.error_list?.lead_type_id && (
                        <div className="invalid-feedback d-block">{leadInput.error_list.lead_type_id}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllLeadTypes;
