"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

import "@/public/assets/css/customer.css";
import anchorIcon from "@/public/assets/images/icons/anchor.svg";
import downAngleIcon from "@/public/assets/images/icons/angle-down.svg";
import cameraIcon from "@/public/assets/images/icons/camera.svg";
import UserAvatar from "@/public/uploads/users/avatar-1.png"
import axios from '@/app/lib/axios';

import toast from 'react-hot-toast';
import Link from 'next/link';

function EditCustomer({ customer, customerListReload }) {


    const initialCustomerState = {
        name: '',
        avatar: null,
        preview: null,
        designation: '',
        email: '',
        phone: '',
        location: '',
        status: '',
        kvk: null,
        service: null,
        company: '',
        website: '',
        details: '',
        error_list: [],
    }

    const [customerInput, setCustomer] = useState(initialCustomerState);

    const handleInput = (e) => {
        setCustomer((prevCustomerInput) => ({
            ...prevCustomerInput,
            [e.target.name]: e.target.value,
            error_list: {
                ...prevCustomerInput.error_list,
                [e.target.name]: undefined,
            },
        }));
    }

    useEffect(() => {
        setCustomer((prevCustomerInput) => ({
            ...prevCustomerInput,
            ...customer,
            error_list: {},
        }));
    }, [customer]);


    const handleFileChange = (e) => {

        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setCustomer({ ...customerInput, avatar: selectedImage, preview: imageUrl });
        } else {
            setCustomer({ ...customerInput, avatar: null, preview: null });
        }

    };

    const handleStatusChange = (selectedStatus) => {
        setCustomer({ ...customerInput, status: selectedStatus });
    };

    const submitCustomer = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('_method', 'put');
        formData.append('name', customerInput.name);
        formData.append('designation', customerInput.designation || '');
        formData.append('email', customerInput.email || '');
        formData.append('phone', customerInput.phone || '');
        formData.append('location', customerInput.location || '');
        formData.append('status', customerInput.status || 'Inactive');
        formData.append('kvk', customerInput.kvk || '');
        formData.append('service', customerInput.service || '');
        formData.append('company', customerInput.company || '');
        formData.append('website', customerInput.website || '');
        formData.append('details', customerInput.details || '');

        if (customerInput.avatar) {
            formData.append('avatar', customerInput.avatar);
        }

        console.log([...formData.entries()]);

        await toast.promise(
            axios.post(`api/customer/${customer.customer_id}/update`, formData), {
            loading: 'Saving...',
            success: () => {
                setCustomer(initialCustomerState);
                customerListReload();

                return 'Customer updated successfully!';
            },
            error: (error) => {
                if (error.response && error.response.data.errors) {
                    setCustomer({
                        ...customerInput,
                        error_list: error.response.data.errors,
                    });
                }

                return 'Failed to add customer. Please try again.';
            },

        }
        );
    };


    return (
        <div className="custom-modal">
            {/* <div
                className={`modal fade ${showEditModal ? 'show' : ''}`}
                id="customerEdit"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden={!showEditModal}
            ></div> */}
            <div
                className="modal fade"
                id="customerEdit"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Edit Customer
                            </h1>
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="fas fa-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form action="" className="common-form needs-validation" onSubmit={submitCustomer} encType="multipart/form-data">
                                <div className="add-customer-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="">Profile Image</label>
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    id="avatar"
                                                    className="d-none"
                                                    onChange={handleFileChange}
                                                    accept="image/*"
                                                />

                                                <div className="d-flex">
                                                    <label htmlFor="avatar" className="avatar profileAvatar">
                                                        <Image
                                                            src={customerInput.preview || UserAvatar}
                                                            alt="avatar"
                                                            className="img-fluid proFileImage"
                                                            height={120}
                                                            width={120}
                                                        />
                                                        <span className="avatar-ol">
                                                            <Image
                                                                src={cameraIcon}
                                                                alt="camera"
                                                                className="img-fluid"
                                                            />
                                                        </span>
                                                    </label>
                                                    <p>
                                                        <Image
                                                            src={anchorIcon}
                                                            alt="anchor"
                                                            className="img-fluid"

                                                        />
                                                        Upload
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.name}
                                                />

                                            </div>
                                            {customerInput.error_list.name && (
                                                <div className="invalid-feedback d-block">{customerInput.error_list.name}</div>
                                            )}
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="designation">Designation</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Designation"
                                                    id="designation"
                                                    name="designation"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.designation}
                                                />
                                            </div>
                                            {customerInput.error_list.designation && (
                                                <div className="invalid-feedback d-block">{customerInput.error_list.designation}</div>
                                            )}
                                        </div>



                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="email">E-mail</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter email address"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.email}
                                                />
                                                {customerInput.error_list.email && (
                                                    <div className="invalid-feedback d-block">{customerInput.error_list.email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="number"
                                                    placeholder="Enter phone number"
                                                    id="phone"
                                                    name="phone"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.phone}
                                                />
                                                {customerInput.error_list.email && (
                                                    <div className="invalid-feedback d-block">{customerInput.error_list.phone}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="location">Location</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter location"
                                                    id="location"
                                                    name="location"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.location}
                                                />
                                                {customerInput.error_list.location && (
                                                    <div className="invalid-feedback d-block">{customerInput.error_list.location}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="website">Active Status</label>
                                                <div className="common-dropdown common-dropdown-two common-dropdown-three">
                                                    <div className="dropdown dropdown-two dropdown-three">
                                                        <button
                                                            className="btn"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            {customerInput.status || 'Inactive'} <Image src={downAngleIcon} alt="a" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-two dropdown-menu-three">
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item dropdown-item-two"
                                                                    href="#"
                                                                    onClick={() => handleStatusChange('Active')}
                                                                >
                                                                    Active {customerInput.status === 'Active' && (
                                                                        <i className="fas fa-check"></i>
                                                                    )}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item dropdown-item-two"
                                                                    href="#"
                                                                    onClick={() => handleStatusChange('Inactive')}
                                                                >
                                                                    Inactive
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="company">KVK</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter kvk number"
                                                    id="kvk"
                                                    name="kvk"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.kvk}
                                                />
                                                {customerInput.error_list.kvk && (
                                                    <div className="invalid-feedback d-block">{customerInput.error_list.kvk}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="service">Service</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter service"
                                                    id="service"
                                                    name="service"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.service}
                                                />
                                                {customerInput.error_list.service && (
                                                    <div className="invalid-feedback d-block">{customerInput.error_list.service}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="company">Company</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter company name"
                                                    id="company"
                                                    name="company"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.company}
                                                />
                                                {customerInput.error_list.company && (
                                                    <div className="invalid-feedback d-block">{customerInput.error_list.company}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="website">Website</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter website"
                                                    id="website"
                                                    name="website"
                                                    className="form-control"
                                                    onChange={handleInput} value={customerInput.website}
                                                />
                                                {customerInput.error_list.website && (
                                                    <div className="invalid-feedback d-block">{customerInput.error_list.website}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group form-error">
                                                <label htmlFor="details">Details</label>
                                                <textarea
                                                    name="details"
                                                    id="details"
                                                    rows="7"
                                                    className="form-control"
                                                    placeholder="Enter details"
                                                    onChange={handleInput} value={customerInput.details}
                                                ></textarea>
                                                {customerInput.error_list.details && (
                                                    <div className="invalid-feedback d-block">{customerInput.error_list.details}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-bttn">
                                                <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-bttn">
                                                <button type="submit" className="btn btn-submit">
                                                    Submit
                                                </button>
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

export default EditCustomer