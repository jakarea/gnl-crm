"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";


import downAngleIcon from "@/public/assets/images/icons/angle-down.svg";
import { Customers } from '@/app/lib/customers';

function CustomerFilter() {

    const customerStatuses = ['All', 'Active', 'Inactive'];

    const [customerData, setCustomerData] = useState([]);
    const [customerStatus, setCustomerStatus] = useState('All');



    const getCustomersByStatus = async (status) => {
        const { data } = await Customers({ status });
        setCustomerData(data);
        setCustomerStatus(status)
    };

    return (
        <div className="row">
            <div className="col-lg-5">
                <div className="customer-filter-title">
                    <h2 className="common-title pb-0">All Customer</h2>
                </div>
            </div>
            <div className="col-lg-7">
                <form action="">
                    <div className="filters-area">
                        <div className="dropdown">
                            <button
                                className="btn"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                All Leads <Image src={downAngleIcon} alt="a" />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item active" href="#">
                                        All Leads <i className="fas fa-check"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Hosting Leads
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Marketing Leads
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Project Leads
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Website Leads
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Lost Leads
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button
                                className="btn"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                All Service <Image src={downAngleIcon} alt="a" />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item active" href="#">
                                        All Service <i className="fas fa-check"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        App Design
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Dashboard Design
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Landing Page Design
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button
                                className="btn"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                All Customer <Image src={downAngleIcon} alt="a" />
                            </button>
                            {customerStatus}
                            <ul className="dropdown-menu">
                                {customerStatuses.map((status) => (
                                    <li key={status}>
                                        <Link
                                            className={`dropdown-item${status === customerStatus ? ' active' : ''}`}
                                            href="#"
                                            onClick={() => getCustomersByStatus(status)}
                                        >
                                            {status === 'All'
                                                ? 'All Customers'
                                                : `${status} Customers`}
                                            {status === customerStatus && <i className="fas fa-check"></i>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerFilter