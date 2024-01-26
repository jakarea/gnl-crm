"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import toast from 'react-hot-toast';
import axios from '@/app/lib/axios';

import avatar from "@/public/uploads/users/avatar-10.png";
import camera from "@/public/assets/images/icons/camera-2.svg";
import close from "@/public/assets/images/icons/close-2.svg";
import search from "@/public/assets/images/icons/search-ic.svg";
import userAdd from "@/public/assets/images/icons/user-add.svg";
import anchor from "@/public/assets/images/icons/anchor.svg";

import projectImage from "@/public/uploads/projects/project-01.png";

import { SearchCustomers } from '@/app/lib/search-customer';
import { SearchProjects } from '@/app/lib/projects';


function AddTask() {

    const initialTaskState = {
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
        priority: '',
        date: '',
        schedule: '',
        description: '',
        manualyCustomer: false,
        error_list: [],
    }

    const [taskInput, setTask] = useState(initialTaskState);

    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchCustomerResults, setSearchResults] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);


    const [isProjectLoading, setIsProjectLoading] = useState(false);
    const [searchProjectQuery, setSearchProjectQuery] = useState('');
    const [searchProjectResults, setProjectResults] = useState([]);
    const [projectResultsMessage, setProjectResultsMessage] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

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



    useEffect(() => {
        const handleSearch = async () => {
            try {
                setIsProjectLoading(true);
                const { data: projects } = await SearchProjects(searchProjectQuery);
                setProjectResults(projects);
                setProjectResultsMessage(projects.length === 0);
            } finally {
                setTimeout(() => {
                    setIsProjectLoading(false);
                }, 300);
            }
        };

        if (searchProjectQuery) {
            handleSearch();
        } else {
            setProjectResults([]);
            setShowNoResultsMessage(false);
        }

    }, [searchProjectQuery]);


    const handleProjectChange = (e) => {
        setSearchProjectQuery(e.target.value);
    };


    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleHideCustomer = (customerId) => {
        setSelectedCustomer(null);
        setSelectedCustomerId(null);
    };

    const handleHideProject = (projectId) => {
        setSelectedProject(null);
        setSelectedProjectId(null);
    };

    const handleSelectedCustomer = (customerId) => {

        const selectedCustomer = searchCustomerResults.find((customer) => customer.customer_id == customerId);

        setSelectedCustomer(selectedCustomer)
        setSelectedCustomerId(customerId);

        setSearchResults([]);
        setShowNoResultsMessage(false);
    };

    const handleSelectedProject = (projectId) => {
        const selectedProject = searchProjectResults.find((project) => project.project_id == projectId);
        setSelectedProject(selectedProject)

        setSelectedProjectId(projectId);
        setProjectResults([]);
        setProjectResultsMessage(false);
    };



    const handleInput = (e) => {
        setTask((prevTaskInput) => ({
            ...prevTaskInput,
            [e.target.name]: e.target.value,
            error_list: {
                ...prevTaskInput.error_list,
                [e.target.name]: undefined,
            },
        }));
    }

    const handleAvatarChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setTask({ ...taskInput, avatar: selectedImage, avatarPreview: imageUrl });
        } else {
            setTask({ ...taskInput, avatar: null, avatarPreview: null });
        }
    };

    const handlePriorityChange = (selectedPriority) => {
        setTask({ ...taskInput, priority: selectedPriority });
    };


    const addManualyCustomer = () => {
        setTask((prevTaskInput) => ({
            ...prevTaskInput,
            manualyCustomer: !prevTaskInput.manualyCustomer,
        }));
    }

    const submitTask = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('project_id', selectedProjectId);
        formData.append('manualyCustomer', taskInput.manualyCustomer ? 1 : 0);
        formData.append('customer_id', selectedCustomerId);
        formData.append('name', taskInput.name);
        formData.append('designation', taskInput.designation);
        formData.append('email', taskInput.email);
        formData.append('phone', taskInput.phone);
        formData.append('location', taskInput.location);
        formData.append('status', taskInput.status || 'Inactive');
        formData.append('kvk', taskInput.kvk);
        formData.append('service', taskInput.service);
        formData.append('company', taskInput.company);
        formData.append('website', taskInput.website);
        formData.append('details', taskInput.details);

        formData.append('title', taskInput.title);
        formData.append('priority', taskInput.priority);
        formData.append('date', taskInput.date);
        formData.append('schedule', taskInput.schedule);

        formData.append('description', taskInput.description);

        if (taskInput.avatar) {
            formData.append('avatar', taskInput.avatar);
        }

        await toast.promise(
            axios.post(`/api/task/store`, formData), {
            loading: 'Saving...',
            success: (response) => {
                setTask(initialTaskState);
                setSelectedProject(null)
                setSelectedCustomer(null)
                return 'Task create successfully!';
            },

            error: (error) => {
                if (error.response && error.response.data.errors) {
                    setTask({
                        ...taskInput,
                        error_list: error.response.data.errors,
                    });
                }
                return 'Failed to create task. Please try again.';
            },

        }
        );
    };



    return (
        <div className="custom-modal">
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header modal-header-two">
                            <h1 className="modal-title" id="staticBackdropLabel">Add Task</h1>
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="fas fa-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="common-form another-form" onSubmit={submitTask} encType="multipart/form-data">
                                {/* <input type="text" name='customer_id' value={selectedCustomerIds.length === 1 ? selectedCustomerIds[0] : selectedCustomerIds.join(',')} /> */}
                                {/* <input type="text" name='project_id' value="" /> */}
                                <div className="add-customer-form">
                                    <div className="row">

                                        <div className="col-xl-12">
                                            <div className="row">

                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            <div className="form-group mt-0">
                                                                <div className="customer-modal-title">
                                                                    <h3>Task Information</h3>
                                                                </div>
                                                                <hr />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="form-group form-error mt-0">
                                                                <label htmlFor="title">Task Title</label>
                                                                <input type="text" placeholder="Enter title" id="title"
                                                                    name="title" className="form-control" onChange={handleInput} value={taskInput.title} />
                                                            </div>

                                                            {taskInput.error_list.title && (
                                                                <div className="invalid-feedback d-block">{taskInput.error_list.title}</div>
                                                            )}
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="website">Priority</label>
                                                                <div className="common-dropdown common-dropdown-two">
                                                                    <div className="dropdown dropdown-two">
                                                                        <button className="btn" type="button"
                                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                                            {taskInput.priority || 'Select Priority'} <i className="fas fa-angle-down"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-two">
                                                                            <li>
                                                                                <Link
                                                                                    className="text-primary dropdown-item dropdown-item-two"
                                                                                    href="#" onClick={() => handlePriorityChange('Basic')}>Basic<i
                                                                                        className="fas fa-check"></i></Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    className="text-warning dropdown-item dropdown-item-two"
                                                                                    href="#" onClick={() => handlePriorityChange('Important')}>Important</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    className="text-danger dropdown-item dropdown-item-two"
                                                                                    href="#" onClick={() => handlePriorityChange('Priority')}>Priority</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-12">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="date">Date</label>
                                                                <input type="date" placeholder="dd-mm-yyyy" id="date"
                                                                    name="date" className="form-control" onChange={handleInput} value={taskInput.date} />

                                                                {taskInput.error_list.date && (
                                                                    <div className="invalid-feedback d-block">{taskInput.error_list.date}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="schedule">Schedule</label>
                                                                <input type="time" placeholder="dd-mm-yyyy" id="schedule"
                                                                    name="schedule" className="form-control" onChange={handleInput} value={taskInput.schedule} />

                                                                {taskInput.error_list.schedule && (
                                                                    <div className="invalid-feedback d-block">{taskInput.error_list.schedule}</div>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <div className="form-group form-error">
                                                                <label htmlFor="details">Description</label>
                                                                <textarea name="description" id="details" rows="7"
                                                                    className="form-control"
                                                                    placeholder="Enter details" onChange={handleInput} value={taskInput.description}></textarea>
                                                                {taskInput.error_list.description && (
                                                                    <div className="invalid-feedback d-block">{taskInput.error_list.description}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="project-add-scrollbar custom-scroll-bar">
                                                        <div className="customer-modal-title">
                                                            <h3>Project Information</h3>
                                                        </div>
                                                        <hr />
                                                        <div className="col-xl-12">
                                                            <div className="select-title">
                                                                <h3>Select Project</h3>
                                                            </div>

                                                            <div className="form-group search-by-name mt-2 grid-100">
                                                                <div className="search-item">
                                                                    <Image src={search} alt="A" className="img-fluid" />
                                                                    <input type="text" placeholder="Search Project"
                                                                        name="search" className="form-control" value={searchProjectQuery}
                                                                        onChange={handleProjectChange} />

                                                                    {/* {taskInput.error_list.project_id && (
                                                                        <div className="invalid-feedback d-block">{taskInput.error_list.project_id}</div>
                                                                    )} */}
                                                                </div>

                                                                {isProjectLoading && <p>Loading...</p>}
                                                                {!isProjectLoading && projectResultsMessage && (
                                                                    <p className="text-danger mt-3">No projects found</p>
                                                                )}
                                                                {!isProjectLoading && searchProjectResults.length > 0 && (
                                                                    <>
                                                                        {searchProjectResults.map((project, index) => (
                                                                            <div className="col-lg-12" key={index}>
                                                                                <div className="selected-profile-box bg-transporant" onClick={() => handleSelectedProject(project.project_id)}>
                                                                                    <div className="media">
                                                                                        <Image src={project.thumbnail ? process.env.NEXT_BACKEND_URL + "/" + project.thumbnail : projectImage} alt={project.title} className="img-fluid avatar" />
                                                                                        <div className="media-body">
                                                                                            <h3>{project.title}</h3>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        ))}
                                                                    </>
                                                                )}

                                                                {selectedProject && (
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="selected-profile-box">
                                                                                <div className="media">
                                                                                    <Image src={selectedProject.thumbnail ? process.env.NEXT_BACKEND_URL + "/" + selectedProject.thumbnail : projectImage} alt={selectedProject.title} className="img-fluid avatar" />
                                                                                    <div className="media-body">
                                                                                        <h3>{selectedProject.title}</h3>
                                                                                    </div>
                                                                                    <Link href="#" onClick={() => handleHideProject(selectedProject.project_id)}>
                                                                                        <Image src={close} alt="Close" className="img-fluid" />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="customer-modal-title">
                                                                <h3>Customer Information</h3>
                                                            </div>
                                                            <hr />


                                                            <div className="select-title">
                                                                <h3>Select Customer</h3>
                                                            </div>

                                                            <div className="form-group search-by-name mt-2">
                                                                <div className="search-item">
                                                                    <Image src={search} alt="A" className="img-fluid" />
                                                                    <input type="text" placeholder="Search Project"
                                                                        name="search" className="form-control" value={searchQuery}
                                                                        onChange={handleChange} />
                                                                </div>
                                                                <div className="avatar-btn">
                                                                    <Link onClick={() => addManualyCustomer()} data-bs-toggle="collapse" href="#collapseTwo"
                                                                        role="button" aria-expanded={taskInput.manualyCustomer ? true : false}
                                                                        aria-controls="collapseTwo" type="button">
                                                                        <Image src={userAdd} alt="A" className="img-fluid" />

                                                                        Add Manually</Link>
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
                                                                                                    <Image src={taskInput.avatarPreview || avatar} alt="a" className="img-fluid" width={80} height={80} />
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

                                                                                            <input type="text" placeholder="Enter Name" id="name" name="name" className="form-control" onChange={handleInput} value={taskInput.name} />
                                                                                            {taskInput.error_list.name && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.name}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="designation">Designation</label>
                                                                                            <input type="text" placeholder="Enter Designation" id="designation" name="designation" className="form-control" onChange={handleInput} value={taskInput.designation} />
                                                                                            {taskInput.error_list.designation && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.designation}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="email">E-mail</label>
                                                                                            <input type="email" placeholder="Enter email address" id="email" name="email" className="form-control" onChange={handleInput} value={taskInput.email} />
                                                                                            {taskInput.error_list.email && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.email}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="phone">Phone</label>
                                                                                            <input type="number" placeholder="Enter phone number" id="phone" name="phone" className="form-control" onChange={handleInput} value={taskInput.phone} />
                                                                                            {taskInput.error_list.phone && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.phone}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="location">Location</label>
                                                                                            <input type="text" placeholder="Enter location" id="location" name="location" className="form-control" onChange={handleInput} value={taskInput.location} />
                                                                                            {taskInput.error_list.location && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.location}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="website">Active Status</label>
                                                                                            <div className="common-dropdown common-dropdown-two common-dropdown-three">
                                                                                                <div className="dropdown dropdown-two dropdown-three">
                                                                                                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                        {taskInput.status || 'Inactive'} <i className="fas fa-angle-down"></i>
                                                                                                    </button>
                                                                                                    <ul className="dropdown-menu dropdown-menu-two dropdown-menu-three">
                                                                                                        <li><Link className="dropdown-item dropdown-item-two" href="#" onClick={() => handleStatusChange('Active')}>Active
                                                                                                            Active {taskInput.status === 'Active' && (
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
                                                                                            <input type="text" placeholder="Enter kvk number" id="kvk" name="kvk" className="form-control" onChange={handleInput} value={taskInput.kvk} />
                                                                                            {taskInput.error_list.kvk && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.kvk}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="service">Service</label>
                                                                                            <input type="text" placeholder="Enter service" id="service" name="service" className="form-control" onChange={handleInput} value={taskInput.service} />
                                                                                            {taskInput.error_list.service && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.service}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="company">Company</label>
                                                                                            <input type="text" placeholder="Enter company name" id="company" name="company" className="form-control" onChange={handleInput} value={taskInput.company} />
                                                                                            {taskInput.error_list.company && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.company}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="website">Website</label>
                                                                                            <input type="text" placeholder="Enter website" id="website" name="website" className="form-control" onChange={handleInput} value={taskInput.website} />
                                                                                            {taskInput.error_list.website && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.website}</div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12">
                                                                                        <div className="form-group form-error">
                                                                                            <label htmlFor="details">Details</label>
                                                                                            <textarea name="details" id="details" rows="7" className="form-control" placeholder="Enter details" onChange={handleInput} value={taskInput.details}></textarea>
                                                                                            {taskInput.error_list.details && (
                                                                                                <div className="invalid-feedback d-block">{taskInput.error_list.details}</div>
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

export default AddTask