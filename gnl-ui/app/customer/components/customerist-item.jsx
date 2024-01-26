"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import UserAvatar from "@/public/uploads/users/avatar-1.png";
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';

import toast from 'react-hot-toast';

import axios from '@/app/lib/axios';
import CustomerDetails from './customer-details-modal';
import { Customers } from "@/app/lib/customers";
import EditCustomer from "@/app/components/customers/edit-customer";
import DeleteConfirmPopUp from "@/app/components/delete";

function CustomerItem() {

    const [customer, setCustomer] = useState(null);
    const [openDeletePopup, setDeletePopUp] = useState(false);
    const [editCustomer, setEditCustomer] = useState(null);
    const [deleteCustomer, setDeleteCustomer] = useState(null);
    const [customers, setCustomers] = useState([]);

    const handleCustomer = (customer) => {
        setCustomer(customer);
    };

    const closeModal = () => {
        setDeletePopUp(false)
    }

    const handleEditCustomer = (e, customer) => {
        e.preventDefault();
        setEditCustomer(customer);
        console.log(customer)
    };


    const handleDeleteConfirmation = (e, customer) => {
        e.preventDefault();
        setDeletePopUp(true);
        setDeleteCustomer(customer);
    }
    


    const handleDeleteCustomer = async (customer) => {
        const formData = new FormData();

        formData.append('_method', 'delete');

        await toast.promise(
            axios.post(`api/customer/${customer.customer_id}/delete`, formData), {
                loading: 'Saving...',
                success: () => {
                    setDeletePopUp(false);
                    reloadForDeleteCustomer();
                    return 'Customer deleted successfully!';
                },
                error: (error) => {
                    if (error.response && error.response.data.errors) {
                        setCustomer({
                            ...customerInput,
                            error_list: error.response.data.errors,
                        });
                    }

                    return 'Failed to delete customer. Please try again.';
                },

            }
        );
    };



    const fetchData = async () => {
        const { data: { customers } } = await Customers();
        setCustomers(customers);
    };


    const customerListReload = async () => {
        await fetchData();
    };


    const reloadForDeleteCustomer = async () => {
        await fetchData();
    };




    useEffect(() => {
        fetchData();
    }, []);


    return (
            <div className="row">
                {customers.map((customer, index) => (
                    <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
                        <div className="customer-person-box-wrap">
                            <div className="avatar">
                                <Image
                                    // src={customer.avatar ? process.env.NEXT_BACKEND_URL+"/"+customer.avatar: UserAvatar}
                                    src={UserAvatar}
                                    alt={customer.name}
                                    className="img-fluid"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="text">
                                <span className="new">New Customer</span>
                                <h4><a
                                    href="#"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"
                                    className="details"
                                    onClick={() => handleCustomer(customer)}
                                >{customer.name}</a></h4>
                                <h6>{customer.designation}</h6>
                                <hr />
                                <p>
                                    <i className="fa-regular fa-envelope"></i> {customer.email}
                                </p>
                            </div>
                            <div className="actions">
                                <Link
                                    href={`/customer/${customer.customer_id}`}
                                    className="details"
                                >
                                    View Details
                                </Link>
                                <div className="btn-group dropstart">
                                    <a
                                        href="#"
                                        type="button"
                                        className="ellipse dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-start">
                                        <li>
                                            <Link data-bs-toggle="modal"
                                                data-bs-target="#customerEdit" onClick={(e) => handleEditCustomer(e, customer)} className="dropdown-item" href="#">
                                                Edit Customer
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="#" onClick={(e) => handleDeleteConfirmation(e, customer)}>
                                                Delete Customer
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}

                {/* Bootstrap delte confirmation */}
                <div className="custom-modal">
                    <div className={`modal fade ${openDeletePopup ? 'show d-block' : ''}`} id="delteConfirm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropFourLabel" aria-hidden={!openDeletePopup}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content modal-content-leads">
                                <div className="modal-header modal-header-leads">
                                    <h5 className="modal-title fs-5" id="staticBackdropFourLabel">Delete Customer</h5>
                                    <button type="button" className="btn" data-bs-dismiss="modal">
                                        <i className="fas fa-close"></i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete?</p>
                                </div>
                                <div class="modal-footer">
                                    <button onClick={() => closeModal()} data-bs-dismiss="modal" type="button" class="btn btn-secondary" id="close-modal">No</button>
                                    <button onClick={() => handleDeleteCustomer(deleteCustomer)} type="button" class="btn btn-danger">Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CustomerDetails detailsCustomer={customer} />
                <EditCustomer customer={editCustomer} customerListReload={customerListReload} />
            </div>
    )
}

export default CustomerItem;