"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import toast from 'react-hot-toast';
import axios from '@/app/lib/axios';

import "@/public/assets/css/style.css";
import "@/public/assets/css/earning.css";
import "@/public/assets/css/customer.css";
import "@/public/assets/css/responsive.css";

import avatar from "@/public/uploads/users/avatar-10.png";
import userAdd2 from "@/public/assets/images/icons/user-add-two.svg";
import close from "@/public/assets/images/icons/close-2.svg";
import camera from "@/public/assets/images/icons/camera.svg";
import anchor from "@/public/assets/images/icons/anchor.svg";
import search from "@/public/assets/images/icons/search-ic.svg";
import { SearchCustomers } from '@/app/lib/search-customer';

function AddClient() {

    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchCustomerResults, setSearchResults] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);


    const initialPaymentState = {
        name: '',
        avatar: null,
        avatarPreview: null,
        designation: '',
        email: '',
        phone: '',
        location: '',
        status: '',
        kvk: '',
        service: '',
        company: '',
        website: '',
        details: '',

        amount: '',
        tax: '',
        pay_status: '',
        payment_service: '',
        pay_date: '',
        pay_type: '',

        manualyCustomer: false,
        error_list: [],
    }

    useEffect(() => {
        const handleSearch = async () => {
            try {
                setIsLoading(true);
                const { data: customers } = await SearchCustomers(searchQuery);
                setSearchResults(customers);
                setShowNoResultsMessage(customers.length === 0);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);
            }
        };

        if (searchQuery) {
            handleSearch();
        } else {
            setSearchResults([]);
            setShowNoResultsMessage(false);
        }

    }, [searchQuery]);


    const [paymenttInput, setPayment] = useState(initialPaymentState);

    const handleInput = (e) => {
        setPayment((prevPaymentInput) => ({
            ...prevPaymentInput,
            [e.target.name]: e.target.value,
            error_list: {
                ...prevPaymentInput.error_list,
                [e.target.name]: undefined,
            },
        }));
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleHideCustomer = (customerId) => {
        setSelectedCustomer(null);
        setSelectedCustomerId(null);
    };


    const handleSelectedCustomer = (customerId) => {

        const selectedCustomer = searchCustomerResults.find((customer) => customer.customer_id == customerId);

        setSelectedCustomer(selectedCustomer)
        setSelectedCustomerId(customerId);

        setSearchResults([]);
        setShowNoResultsMessage(false);
    };


    const handleAvatarChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setPayment({ ...paymenttInput, avatar: selectedImage, avatarPreview: imageUrl });
        } else {
            setPayment({ ...paymenttInput, avatar: null, avatarPreview: null });
        }
    };


    const handleStatusChange = (selectedStatus) => {
        setPayment({ ...paymenttInput, status: selectedStatus });
    };

    const handlePaymentTypeChange = (selectedPaymentType) => {
        setPayment({ ...paymenttInput, pay_type: selectedPaymentType });
    };

    const addManualyCustomer = () => {
        setPayment((prevPaymentInput) => ({
            ...prevPaymentInput,
            manualyCustomer: !prevPaymentInput.manualyCustomer,
        }));
    }

    const submitPayment = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('manualyCustomer', paymenttInput.manualyCustomer ? 1 : 0);
        formData.append('customer_id', selectedCustomerId || '');
        formData.append('name', paymenttInput.name);
        formData.append('designation', paymenttInput.designation);
        formData.append('email', paymenttInput.email);
        formData.append('phone', paymenttInput.phone);
        formData.append('location', paymenttInput.location);
        formData.append('status', paymenttInput.status || 'Inactive');
        formData.append('kvk', paymenttInput.kvk);
        formData.append('service', paymenttInput.service);
        formData.append('company', paymenttInput.company);
        formData.append('website', paymenttInput.website);
        formData.append('details', paymenttInput.details);

        formData.append('amount', paymenttInput.amount);
        formData.append('tax', paymenttInput.tax);
        formData.append('pay_status', paymenttInput.pay_status);
        formData.append('payment_service', paymenttInput.payment_service);
        formData.append('pay_date', paymenttInput.pay_date);
        formData.append('pay_type', paymenttInput.pay_type || "1 time payment");

        if (paymenttInput.avatar) {
            formData.append('avatar', paymenttInput.avatar);
        }


        await toast.promise(
            axios.post(`/api/payment/store`, formData), {
            loading: 'Saving...',
            success: (response) => {
                setPayment(initialPaymentState);
                setSelectedCustomer(null);
                return 'Payment create successfully!';
            },

            error: (error) => {
                if (error.response && error.response.data.errors) {
                    setPayment({
                        ...paymenttInput,
                        error_list: error.response.data.errors,
                    });
                }
                return 'Failed to add payment. Please try again.';
            },

        }
        );
    };






    return (
        <div className="custom-modal custom-modal-hosting">
            <div className="modal fade" id="staticBackdropAdd" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropAddLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content modal-content-hosting">
                        <div className="modal-header modal-header-hosting">
                            <h1 className="modal-title" id="staticBackdropAddLabel">Add Client</h1>
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="fas fa-close"></i>
                            </button>
                        </div>
                        <div className="modal-body modal-body-hosting">
                            <form action="" className="common-form" onSubmit={submitPayment} encType="multipart/form-data">
                                <div className="add-customer-form add-customer-form-hosting">
                                    <div className="row">
                                        <div className="col-xl-12 mt-4">
                                            <label htmlFor="name" className="select-client-hosting">Select Customer</label>
                                            <div className="form-group form-group-two form-group-three form-error">
                                                <div className="search-client">
                                                    <Image src={search} alt='' />
                                                    <input type="text" placeholder="Search Customer" id="name" name="search" className="form-control" value={searchQuery}
                                                        onChange={handleChange} />
                                                    {/* {taskInput.error_list.search && (
                                                        <div className="invalid-feedback d-block">{taskInput.error_list.search}</div>
                                                    )} */}
                                                </div>

                                                <Link onClick={() => addManualyCustomer()} data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                                    <Image src={userAdd2} alt="" className="img-fluid avatar" />
                                                    Add Manually
                                                </Link>

                                            </div>

                                            <div className="row">

                                                {isLoading && <p>Loading...</p>}
                                                {!isLoading && showNoResultsMessage && (
                                                    <p className="text-danger mt-3">No customers found</p>
                                                )}
                                                {!isLoading && searchCustomerResults.length > 0 && (
                                                    <>
                                                        {searchCustomerResults.map((customer, index) => (
                                                            <div className="col-lg-12" key={index}>
                                                                <div className="selected-profile-box bg-transporant" onClick={() => handleSelectedCustomer(customer.customer_id)}>
                                                                    <div className="media">
                                                                        <Image src={customer.avatar ? process.env.NEXT_BACKEND_URL + "/" + customer.avatar : avatar} alt={customer.name} className="img-fluid avatar" />
                                                                        <div className="media-body">
                                                                            <h3>{customer.name}</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        ))}
                                                    </>
                                                )}

                                                {selectedCustomer && (
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="selected-profile-box">
                                                                <div className="media">
                                                                    <Image src={selectedCustomer.avatar ? process.env.NEXT_BACKEND_URL + "/" + selectedCustomer.avatar : avatar} alt={selectedCustomer.name} className="img-fluid avatar" />
                                                                    <div className="media-body">
                                                                        <h3>{selectedCustomer.name}</h3>
                                                                        <p>{selectedCustomer.designation}</p>
                                                                    </div>
                                                                    <Link href="#" onClick={() => handleHideCustomer(selectedCustomer.customer_id)}>
                                                                        <Image src={close} alt="Close" className="img-fluid" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                                        <div className="card-body">
                                                            <div className="common-form">
                                                                <div className="add-customer-form border-bottom pb-4">
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className="form-group">
                                                                                <label htmlFor="">Profile Image</label>

                                                                                <input type="file" name="avatar" id="avatar" className="d-none" onChange={handleAvatarChange} />

                                                                                <div className="d-flex">
                                                                                    <label htmlFor="avatar" className="avatar">
                                                                                        <Image src={paymenttInput.avatarPreview || avatar} alt="a" className="img-fluid" width={80} height={80} />
                                                                                        <span className="avatar-ol">
                                                                                            <Image src={camera} className="img-fluid" alt="a" />
                                                                                        </span>
                                                                                    </label>
                                                                                    <p><Image src={anchor} className="img-fluid" alt="a" /> Upload</p>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="name">Name</label>
                                                                                <input type="text" placeholder="Enter Name" id="name" name="name" className="form-control" onChange={handleInput} value={paymenttInput.name} />
                                                                                {paymenttInput.error_list.name && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.name}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="designation">Designation</label>
                                                                                <input type="text" placeholder="Enter Designation" id="designation" name="designation" className="form-control" onChange={handleInput} value={paymenttInput.designation} />
                                                                                {paymenttInput.error_list.designation && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.designation}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="email">E-mail</label>
                                                                                <input type="email" placeholder="Enter email address" id="email" name="email" className="form-control" onChange={handleInput} value={paymenttInput.email} />
                                                                                {paymenttInput.error_list.email && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.email}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="phone">Phone</label>
                                                                                <input type="number" placeholder="Enter phone number" id="phone" name="phone" className="form-control" onChange={handleInput} value={paymenttInput.phone} />
                                                                                {paymenttInput.error_list.phone && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.phone}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="location">Location</label>
                                                                                <input type="text" placeholder="Enter location" id="location" name="location" className="form-control" onChange={handleInput} value={paymenttInput.location} />
                                                                                {paymenttInput.error_list.location && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.location}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error form-group-four">
                                                                                <label htmlFor="website">Active Status</label>
                                                                                <div className="dropdown dropdown-two dropdown-three">
                                                                                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        {paymenttInput.status || 'Inactive'} <i className="fas fa-angle-down"></i>
                                                                                    </button>
                                                                                    <ul className="dropdown-menu dropdown-menu-two dropdown-menu-three">
                                                                                        <li><Link className="dropdown-item dropdown-item-two" href="#" onClick={() => handleStatusChange('Active')}>Active
                                                                                            {paymenttInput.status === 'Active' && (
                                                                                                <i className="fas fa-check"></i>
                                                                                            )}
                                                                                        </Link></li>
                                                                                        <li><Link className="dropdown-item dropdown-item-two" href="#" onClick={() => handleStatusChange('Inactive')}>Inactive</Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="kvk">KVK</label>
                                                                                <input type="text" placeholder="Enter kvk number" id="kvk" name="kvk" className="form-control" onChange={handleInput} value={paymenttInput.kvk} />
                                                                                {paymenttInput.error_list.kvk && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.kvk}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="service">Service</label>
                                                                                <input type="text" placeholder="Enter service" id="service" name="service" className="form-control" onChange={handleInput} value={paymenttInput.service} />
                                                                                {paymenttInput.error_list.service && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.service}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="company">Company</label>
                                                                                <input type="text" placeholder="Enter cpmany name" id="company" name="company" className="form-control" onChange={handleInput} value={paymenttInput.company} />
                                                                                {paymenttInput.error_list.company && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.company}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="website">Website</label>
                                                                                <input type="text" placeholder="Enter website name" id="website" name="website" className="form-control" onChange={handleInput} value={paymenttInput.website} />
                                                                                {paymenttInput.error_list.website && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.website}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-12">
                                                                            <div className="form-group form-error">
                                                                                <label htmlFor="details">Details</label>
                                                                                <input type="text" name="details" id="details" className="form-control" placeholder="Enter details" onChange={handleInput} value={paymenttInput.details} />
                                                                                {paymenttInput.error_list.details && (
                                                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.details}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="amount">Amount</label>
                                                <input type="number" placeholder="$0000" id="amount" name="amount" className="form-control" onChange={handleInput} value={paymenttInput.amount} />
                                                {paymenttInput.error_list.amount && (
                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.amount}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="tax">Tax</label>
                                                <input type="number" placeholder="$0000" id="tax" name="tax" className="form-control" onChange={handleInput} value={paymenttInput.tax} />
                                                {paymenttInput.error_list.tax && (
                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.tax}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="paid">Payment Status</label>
                                                <input type="text" placeholder="Paid" id="paid" name="pay_status" className="form-control" onChange={handleInput} value={paymenttInput.pay_status} />
                                                {paymenttInput.error_list.pay_status && (
                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.pay_status}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="service">Service</label>
                                                <input type="text" placeholder="Service name" id="service" name="payment_service" className="form-control" onChange={handleInput} value={paymenttInput.payment_service} />
                                                {paymenttInput.error_list.payment_service && (
                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.payment_service}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="pay_date">Payment Date</label>
                                                <input type="date" placeholder="DD-MM-YYYY" id="date" name="pay_date" className="form-control" onChange={handleInput} value={paymenttInput.pay_date} />
                                                {paymenttInput.error_list.pay_date && (
                                                    <div className="invalid-feedback d-block">{paymenttInput.error_list.pay_date}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error form-group-four">
                                                <label htmlFor="website">Payment Type</label>
                                                <div className="common-dropdown common-dropdown-two common-dropdown-three">
                                                    <div className="dropdown dropdown-two dropdown-three">
                                                        <button className="btn w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {paymenttInput.pay_type || 'Select Type'}<i className="fas fa-angle-down"></i>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-two dropdown-menu-three w-100">
                                                            <li><Link className="dropdown-item dropdown-item-two dropdown-item-three" href="#" onClick={() => handlePaymentTypeChange('1 time payment')}>1 time payment<i className="fas fa-check"></i></Link></li>
                                                            <li><Link className="dropdown-item dropdown-item-two dropdown-item-three" href="#" onClick={() => handlePaymentTypeChange('Repeated payment')}>Repeated payment</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-bttn">
                                                <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-bttn">
                                                <button type="submit" className="btn btn-submit">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClient