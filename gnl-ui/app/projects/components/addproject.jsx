"use client"
import React, { useEffect, useState } from 'react';

import Link from "next/link";
import Image from "next/image";

import "@/public/assets/css/style.css";
import "@/public/assets/css/project.css";

import project from "@/public/uploads/projects/project-01.png";

import avatar from "@/public/uploads/users/avatar-10.png";
import camera from "@/public/assets/images/icons/camera-2.svg";
import anchor from "@/public/assets/images/icons/anchor.svg";
import search from "@/public/assets/images/icons/search-ic.svg";
import userAdd2 from "@/public/assets/images/icons/user-add-two.svg";
import close from "@/public/assets/images/icons/close-2.svg";

import toast from 'react-hot-toast';
import axios from '@/app/lib/axios';
import { SearchCustomers } from '@/app/lib/search-customer';


function AddNewProject() {


    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchCustomerResults, setSearchResults] = useState([]);
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [selectedCustomers, setSelectedCustomers] = useState([]);
    const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

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

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleHideCustomer = (customerId) => {
        setSelectedCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.customer_id !== customerId));
        setSelectedCustomerIds((prevIds) => prevIds.filter((id) => id !== customerId));
    };


    const handleSelectedCustomer = (customerId) => {

        const selectedCustomer = searchCustomerResults.find((customer) => customer.customer_id == customerId);

        if (selectedCustomer && !selectedCustomers.some((customer) => customer.customer_id === selectedCustomer.customer_id)) {
            setSelectedCustomers((prevCustomers) => [...prevCustomers, selectedCustomer]);
        }

        setSelectedCustomerIds((prevIds) =>
            prevIds.includes(customerId)
                ? prevIds.filter((id) => id !== customerId)
                : [...prevIds, customerId]
        );

        setSearchResults([]);
        setShowNoResultsMessage(false);
    };

    const initialProjectState = {
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
        title: '',
        thumbnail: null,
        preview: null,
        amount: '',
        tax: '',
        start_date: '',
        end_date: '',
        priority: '',
        note: '',
        description: '',
        manualyCustomer : false,
        error_list: [],
    }
    const [projectInput, setProject] = useState(initialProjectState);

    const handleInput = (e) => {
        setProject((prevProjectInput) => ({
            ...prevProjectInput,
            [e.target.name]: e.target.value,
            error_list: {
                ...prevProjectInput.error_list,
                [e.target.name]: undefined,
            },
        }));
    }


    const handleThumbnailChange = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setProject({ ...projectInput, thumbnail: selectedImage, preview: imageUrl });
        } else {
            setProject({ ...projectInput, thumbnail: null, preview: null });
        }
    };

    const handleAvatarChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setProject({ ...projectInput, avatar: selectedImage, avatarPreview: imageUrl });
        } else {
            setProject({ ...projectInput, avatar: null, avatarPreview: null });
        }
    };
    const handleStatusChange = (selectedStatus) => {
        setProject({ ...projectInput, status: selectedStatus });
    };

    const handlePriorityChange = (selectedPriority) => {
        setProject({ ...projectInput, priority: selectedPriority });
    };

    const addManualyCustomer = () =>{
        setProject((prevProjectInput) => ({
            ...prevProjectInput,
            manualyCustomer: !prevProjectInput.manualyCustomer,
        }));
    }

    const submitProject = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('manualyCustomer', projectInput.manualyCustomer ? 1 : 0);
        formData.append('customer_id', selectedCustomerIds);
        formData.append('name', projectInput.name);
        formData.append('designation', projectInput.designation);
        formData.append('email', projectInput.email);
        formData.append('phone', projectInput.phone);
        formData.append('location', projectInput.location);
        formData.append('status', projectInput.status || 'Inactive');
        formData.append('kvk', projectInput.kvk);
        formData.append('service', projectInput.service);
        formData.append('company', projectInput.company);
        formData.append('website', projectInput.website);
        formData.append('details', projectInput.details);

        formData.append('title', projectInput.title);
        formData.append('amount', projectInput.amount);
        formData.append('tax', projectInput.tax);
        formData.append('start_date', projectInput.start_date);
        formData.append('end_date', projectInput.end_date);
        formData.append('priority', projectInput.priority);
        formData.append('description', projectInput.description);

        if (projectInput.avatar) {
            formData.append('avatar', projectInput.avatar);
        }

        if (projectInput.thumbnail) {
            formData.append('thumbnail', projectInput.thumbnail);
        }

        await toast.promise(
            axios.post(`/api/project/store`, formData), {
                loading: 'Saving...',
                success: (response) => {
                    setProject(initialProjectState);
                    return 'Project added successfully!';
                    
                },
                
                error: (error) => {
                    if (error.response && error.response.data.errors) {
                        setProject({
                            ...projectInput,
                            error_list: error.response.data.errors,
                        });
                    }
                    return 'Failed to add project. Please try again.';
                },

            }
        );
    };



    return (
        <div className="custom-modal">
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header modal-header-two">
                            <h1 className="modal-title" id="staticBackdropLabel">Add New Project</h1>
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="fas fa-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="common-form another-form" onSubmit={submitProject} encType="multipart/form-data">

                                <div className="add-customer-form">
                                    <div className="row">

                                        <div className="col-xl-12">
                                            <div className="row">

                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            <div className="form-group mt-0">
                                                                <div className="customer-modal-title">
                                                                    <h3>Project Information</h3>
                                                                </div>
                                                                <hr />
                                                                <input type="file" name="thumbnail" id="thumbnail" className="d-none" onChange={handleThumbnailChange}
                                                                    accept="image/*" />

                                                                <div className="project-thumbnail-upload">
                                                                    <h3>Project Thumbnail</h3>
                                                                    <div className="d-flex">
                                                                        <div className="thumbnail-preview">
                                                                            <Image src={projectInput.preview || project} alt="a" className="img-fluid" width={188} height={119} />
                                                                        </div>
                                                                        <label htmlFor="thumbnail" className="thumbnail-upload-icon">

                                                                            <Image src={anchor} alt="a" className="img-fluid" />
                                                                            <p> Upload </p>
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="title">Project Name</label>
                                                                <input type="text" placeholder="Enter Name" id="title" name="title" className="form-control" onChange={handleInput} value={projectInput.title} />
                                                                {projectInput.error_list.title && (
                                                                    <div className="invalid-feedback d-block">{projectInput.error_list.title}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="email">Amount</label>
                                                                <input type="amount" placeholder="$0000" id="amount" name="amount" className="form-control" onChange={handleInput} value={projectInput.amount} />
                                                            </div>
                                                            {projectInput.error_list.amount && (
                                                                <div className="invalid-feedback d-block">{projectInput.error_list.amount}</div>
                                                            )}
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="phone">Tax</label>
                                                                <input type="tax" placeholder="$0000" id="tax" name="tax" className="form-control" onChange={handleInput} value={projectInput.tax} />
                                                                {projectInput.error_list.tax && (
                                                                    <div className="invalid-feedback d-block">{projectInput.error_list.tax}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="start_date">Start Date</label>
                                                                <input type="date" placeholder="dd-mm-yyyy" id="start_date" name="start_date" className="form-control" onChange={handleInput} value={projectInput.start_date} />
                                                                {projectInput.error_list.start_date && (
                                                                    <div className="invalid-feedback d-block">{projectInput.error_list.start_date}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="end_date">End Date</label>
                                                                <input type="date" placeholder="dd-mm-yyyy" id="end_date" name="end_date" className="form-control" onChange={handleInput} value={projectInput.end_date} />
                                                                {projectInput.error_list.end_date && (
                                                                    <div className="invalid-feedback d-block">{projectInput.error_list.end_date}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="note">Note</label>
                                                                <input type="note" placeholder="Write note" id="note" name="note" className="form-control" onChange={handleInput} value={projectInput.note} />
                                                                {projectInput.error_list.note && (
                                                                    <div className="invalid-feedback d-block">{projectInput.error_list.note}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="website">Priority</label>
                                                                <div className="common-dropdown common-dropdown-two">
                                                                    <div className="dropdown dropdown-two">
                                                                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        {projectInput.priority || 'Select Priority'} <i className="fas fa-angle-down"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-two">
                                                                            <li><Link className="text-primary dropdown-item dropdown-item-two" href="#" onClick={() => handlePriorityChange('Basic')}>Basic<i className="fas fa-check"></i></Link></li>
                                                                            <li><Link className="text-warning dropdown-item dropdown-item-two" href="#" onClick={() => handlePriorityChange('Important')}>Important</Link>
                                                                            </li>
                                                                            <li><Link className="text-danger dropdown-item dropdown-item-two" href="#" onClick={() => handlePriorityChange('Priority')}>Priority</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="details">Description</label>
                                                                <textarea name="description" id="details" rows="7" className="form-control" placeholder="Enter details" onChange={handleInput} value={projectInput.description}></textarea>
                                                                {projectInput.error_list.description && (
                                                                    <div className="invalid-feedback d-block">{projectInput.error_list.description}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="project-add-scrollbar custom-scroll-bar">
                                                        <div className="customer-modal-title">
                                                            <h3>Customer Information</h3>
                                                        </div>
                                                        <hr />
                                                        <div className="col-xl-12">
                                                            <div className="select-title">
                                                                <h3>Select Customer</h3>
                                                            </div>

                                                            <div className="form-group search-by-name">
                                                                <div className="search-item">
                                                                    <Image src={search} alt="a" className="img-fluid" />
                                                                    <input type="text" placeholder="Search by name" name="search" className="form-control"
                                                                        value={searchQuery}
                                                                        onChange={handleChange}

                                                                    />
                                                                </div>
                                                                <div className="avatar-btn">
                                                                    <Link onClick={() => addManualyCustomer()} data-bs-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="{projectInput.manualyCustomer ? 'true' : 'false'}" aria-controls="collapseTwo" type="button">
                                                                        <Image src={userAdd2} alt="a" className="img-fluid" />Add Manually</Link>
                                                                </div>
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

                                                                {selectedCustomers.length > 0 && (
                                                                    <div className="row">
                                                                        {selectedCustomers.map((customer, index) => (
                                                                            <div className="col-lg-6" key={index}>
                                                                                <div className="selected-profile-box">
                                                                                    <div className="media">
                                                                                        <Image src={customer.avatar ? process.env.NEXT_BACKEND_URL + "/" + customer.avatar : avatar} alt={customer.name} className="img-fluid avatar" />
                                                                                        <div className="media-body">
                                                                                            <h3>{customer.name}</h3>
                                                                                            <p>{customer.designation}</p>
                                                                                        </div>
                                                                                        <Link href="#" onClick={() => handleHideCustomer(customer.customer_id)}>
                                                                                            <Image src={close} alt="Close" className="img-fluid" />
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}


                                                            </div>

                                                            <div className="collapse" id="collapseTwo">
                                                                <div className="card-body">
                                                                    <div className="modal-body">
                                                                        <div className="common-form">
                                                                            <div className="add-customer-form">
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <hr />
                                                                                        <div className="form-group">
                                                                                            <label htmlFor="avatar">Profile Image</label>
                                                                                            <input type="file" name="avatar" id="avatar" className="d-none" onChange={handleAvatarChange} />

                                                                                            <div className="d-flex">
                                                                                                <label htmlFor="avatar" className="avatar">
                                                                                                    <Image src={projectInput.avatarPreview || avatar} alt="a" className="img-fluid" width={80} height={80} />
                                                                                                    <span className="avatar-ol">
                                                                                                        <Image src={camera} alt="a" className="img-fluid" />
                                                                                                    </span>
                                                                                                </label>
                                                                                                <label htmlFor="avatar">
                                                                                                    <p><Image src={anchor} alt="a" className="img-fluid" /> Upload</p>
                                                                                                </label>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="name">Name</label>

                                                                                            <input type="text" placeholder="Enter Name" id="name" name="name" className="form-control" onChange={handleInput} value={projectInput.name} />
                                                                                            {projectInput.error_list.name && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.name}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="designation">Designation</label>
                                                                                            <input type="text" placeholder="Enter Designation" id="designation" name="designation" className="form-control" onChange={handleInput} value={projectInput.designation} />
                                                                                            {projectInput.error_list.designation && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.designation}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="email">E-mail</label>
                                                                                            <input type="email" placeholder="Enter email address" id="email" name="email" className="form-control" onChange={handleInput} value={projectInput.email} />
                                                                                            {projectInput.error_list.email && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.email}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="phone">Phone</label>
                                                                                            <input type="number" placeholder="Enter phone number" id="phone" name="phone" className="form-control" onChange={handleInput} value={projectInput.phone} />
                                                                                            {projectInput.error_list.phone && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.phone}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="location">Location</label>
                                                                                            <input type="text" placeholder="Enter location" id="location" name="location" className="form-control" onChange={handleInput} value={projectInput.location} />
                                                                                            {projectInput.error_list.location && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.location}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="website">Active Status</label>
                                                                                            <div className="common-dropdown common-dropdown-two common-dropdown-three">
                                                                                                <div className="dropdown dropdown-two dropdown-three">
                                                                                                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                        {projectInput.status || 'Inactive'} <i className="fas fa-angle-down"></i>
                                                                                                    </button>
                                                                                                    <ul className="dropdown-menu dropdown-menu-two dropdown-menu-three">
                                                                                                        <li><Link className="dropdown-item dropdown-item-two" href="#" onClick={() => handleStatusChange('Active')}>Active
                                                                                                            Active {projectInput.status === 'Active' && (
                                                                                                                <i className="fas fa-check"></i>
                                                                                                            )}
                                                                                                        </Link></li>
                                                                                                        <li><Link className="dropdown-item dropdown-item-two" href="#" onClick={() => handleStatusChange('Inactive')}>Inactive</Link>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="company">KVK</label>
                                                                                            <input type="text" placeholder="Enter kvk number" id="kvk" name="kvk" className="form-control" onChange={handleInput} value={projectInput.kvk} />
                                                                                            {projectInput.error_list.kvk && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.kvk}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="service">Service</label>
                                                                                            <input type="text" placeholder="Enter service" id="service" name="service" className="form-control" onChange={handleInput} value={projectInput.service} />
                                                                                            {projectInput.error_list.service && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.service}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="company">Company</label>
                                                                                            <input type="text" placeholder="Enter company name" id="company" name="company" className="form-control" onChange={handleInput} value={projectInput.company} />
                                                                                            {projectInput.error_list.company && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.company}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="website">Website</label>
                                                                                            <input type="text" placeholder="Enter website" id="website" name="website" className="form-control" onChange={handleInput} value={projectInput.website} />
                                                                                            {projectInput.error_list.website && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.website}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="details">Details</label>
                                                                                            <textarea name="details" id="details" rows="7" className="form-control" placeholder="Enter details" onChange={handleInput} value={projectInput.details}></textarea>
                                                                                            {projectInput.error_list.details && (
                                                                                                <div className="invalid-feedback d-block">{projectInput.error_list.details}</div>
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

export default AddNewProject