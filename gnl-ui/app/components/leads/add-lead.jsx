"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import toast from 'react-hot-toast';

import axios from '@/app/lib/axios';
import "@/public/assets/css/style.css";
import "@/public/assets/css/project.css";
import "@/public/assets/css/leads.css";
import "@/public/assets/css/responsive.css";

import avatar from "@/public/uploads/users/avatar-10.png";
import camera from "@/public/assets/images/icons/camera.svg";
import anchor from "@/public/assets/images/icons/anchor.svg";
import AllLeadTypes from "./all-lead-types";


function AddLead() {

    const initialLeadState = {
        name: '',
        avatar: null,
        preview: null,
        phone: '',
        lead_type_id: '',
        email: '',
        linkedin: '',
        instagram: '',
        socials: '',
        company: '',
        website: '',
        kvk: '',
        note: '',
        lead_type_id: null,
        error_list: [],
    }


    const [leadInput, setLead] = useState(initialLeadState);

    const handleInput = (e) => {
        setLead((prevLeadInput) => ({
            ...prevLeadInput,
            [e.target.name]: e.target.value,
            error_list: {
                ...prevLeadInput.error_list,
                [e.target.name]: undefined,
            },
        }));
    }


    const handleFileChange = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setLead({ ...leadInput, avatar: selectedImage, preview: imageUrl});
        }else {
            setLead({ ...leadInput, avatar: null, preview: null});
        }

    };

    const handleLeadTypeClick = (leadType) => {
        setLead({ ...leadInput, lead_type_id: leadType.lead_type_id });
      };


    const submitLead = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('lead_type_id', leadInput.lead_type_id);
        formData.append('name', leadInput.name);
        formData.append('phone', leadInput.phone);
        formData.append('email', leadInput.email);
        formData.append('linkedin', leadInput.linkedin);
        formData.append('instagram', leadInput.instagram);
        formData.append('socials', leadInput.socials);
        formData.append('company', leadInput.company);
        formData.append('website', leadInput.website);
        formData.append('kvk', leadInput.kvk);
        formData.append('note', leadInput.note);

        if (leadInput.avatar) {
            formData.append('avatar', leadInput.avatar);
        }

        await toast.promise(
            axios.post(`/api/leads/store`, formData), {
                loading: 'Saving...',

                success: () => {
                    setCustomer(initialLeadState);
                    return 'Leadd added successfully!';
                },
                error: (error) => {
                    if (error.response && error.response.data.errors) {
                        
                        setLead({
                            ...leadInput,
                            error_list: error.response.data.errors,
                        });

                    }
                   
                   return 'Failed to add lead. Please try again.';
                },

            }
        );
    };

    return (
        <div className="custom-modal custom-modal-leads">
            <div className="modal fade" id="staticBackdropFour" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropFourLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal-content-leads">
                        <div className="modal-header modal-header-leads">
                            <h1 className="modal-title fs-5" id="staticBackdropFourLabel">Add Leads</h1>
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="fas fa-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="common-form" onSubmit={submitLead} encType="multipart/form-data">
                                <div className="add-customer-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="">Profile Image</label>
                                                <input type="file" name="avatar" id="avatar" className="d-none" onChange={handleFileChange}
                                                    accept="image/*"/>

                                                <div className="d-flex">
                                                    <label htmlFor="avatar" className="avatar">

                                                        <Image
                                                            src={leadInput.preview || avatar}
                                                            alt="avatar"
                                                            className="img-fluid"
                                                            height={120}
                                                            width={120}
                                                        />

                                                        <span className="avatar-ol">
                                                            <Image src={camera} alt="a" className="img-fluid" />
                                                        </span>
                                                    </label>
                                                    <p><Image src={anchor} alt="a" className="img-fluid" /> Upload</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="form-group form-error">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" placeholder="Enter Name" id="name" name="name" className="form-control" onChange={handleInput} value={leadInput.name}/>
                                                {leadInput.error_list.name && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.name}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="phone">Phone</label>
                                                <input type="text" placeholder="Enter Phone number" id="phone" name="phone" className="form-control" onChange={handleInput} value={leadInput.phone}/>
                                                {leadInput.error_list.phone && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.phone}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="email">E-mail</label>
                                                <input type="email" placeholder="Enter email address" id="email" name="email" className="form-control" onChange={handleInput} value={leadInput.email}/>
                                                {leadInput.error_list.email && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="instagram">Instagram</label>
                                                <input type="text" placeholder="Enter Instagram" id="instagram" name="instagram" className="form-control" onChange={handleInput} value={leadInput.instagram}/>
                                                {leadInput.error_list.instagram && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.instagram}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="linkedin">Linkedin</label>
                                                <input type="text" placeholder="Enter location" id="linkedin" name="linkedin" className="form-control" onChange={handleInput} value={leadInput.linkedin}/>
                                                {leadInput.error_list.linkedin && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.linkedin}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="company">Company</label>
                                                <input type="text" placeholder="Enter company name" id="company" name="company" className="form-control" onChange={handleInput} value={leadInput.company}/>
                                                {leadInput.error_list.company && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.company}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="website">Website</label>
                                                <input type="text" placeholder="Enter website" id="website" name="website" className="form-control" onChange={handleInput} value={leadInput.website}/>
                                                {leadInput.error_list.website && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.website}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="kvk">KVK</label>
                                                <input type="text" placeholder="Enter kvk number" id="kvk" name="kvk" className="form-control" onChange={handleInput} value={leadInput.kvk}/>
                                                {leadInput.error_list.kvk && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.kvk}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <AllLeadTypes leadInput={leadInput} handleLeadTypeClick={handleLeadTypeClick}/>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group form-error">
                                                <label htmlFor="details">Notes</label>
                                                <textarea name="details" id="details" rows="7" className="form-control" placeholder="Enter details" onChange={handleInput} value={leadInput.note}></textarea>
                                                {leadInput.error_list.kvk && (
                                                    <div className="invalid-feedback d-block">{leadInput.error_list.note}</div>
                                                )}
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

export default AddLead