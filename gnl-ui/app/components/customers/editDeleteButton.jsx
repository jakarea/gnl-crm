"use client";

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from '@/app/lib/axios';
import Link from 'next/link';

import editIcon from "@/public/assets/images/icons/edit-2.svg";
import trashIcon from "@/public/assets/images/icons/trash.svg";
import Image from 'next/image';
import EditCustomer from './edit-customer';
import "@/public/assets/css/customer.css";
import { useRouter } from "next/navigation";


function CustomerEditDeleteButton({ customer }) {


    const router = useRouter();
    const [openDeletePopup, setDeletePopUp] = useState(false);

    const closeModal = () => {
        setDeletePopUp(false)
    }

    const handleDeleteConfirmation = (e, customer) => {
        e.preventDefault();
        setDeletePopUp(true);
    }

    const handleDeleteCustomer = async (customer) => {
        const formData = new FormData();

        formData.append('_method', 'delete');

        await toast.promise(
            axios.delete(`api/customer/${customer.customer_id}/delete`, formData), {
            loading: 'Saving...',
            success: () => {
                setDeletePopUp(false);
                // reloadForDeleteCustomer();
                router.push("/customer")
                return 'Customer deleted successfully!';
            },
            error: (error) => {

                return 'Failed to delete customer. Please try again.';
            },
        }
        );
    };


    return (
        <>
            <Link data-bs-toggle="modal"
                data-bs-target="#customerEdit" className="dropdown-item" href="#">
                <Image src={editIcon} alt="a" className="img-fluid pen-tools" />
            </Link>

            <Link href="" data-bs-toggle="modal"
                data-bs-target="#delteConfirm" onClick={(e) => handleDeleteConfirmation(e, customer)}>
                <Image src={trashIcon} alt="a" className="img-fluid trash-tools" />
            </Link>

            <div className="custom-modal">
                <div className={`modal fade ${openDeletePopup ? 'show d-block' : 'd-none'}`} id="delteConfirm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropFourLabel" aria-hidden={!openDeletePopup}>
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
                            <div className="modal-footer">
                                <button onClick={() => closeModal()} data-bs-dismiss="modal" type="button" className="btn btn-secondary" id="close-modal">No</button>
                                <button onClick={() => handleDeleteCustomer(customer)} type="button" className="btn btn-danger">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default CustomerEditDeleteButton