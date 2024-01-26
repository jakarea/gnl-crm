"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";

import "@/public/assets/css/customer.css";


import callIcon from "@/public/assets/images/icons/call.svg";
import editOneIcon from "@/public/assets/images/icons/edit-1.svg";
import envelopeIcon from "@/public/assets/images/icons/envelope.svg";
import locationIcon from "@/public/assets/images/icons/location.svg";

import trashOneIcon from "@/public/assets/images/icons/trash-1.svg";

import UserAvatar from "@/public/uploads/users/avatar-1.png";
import Link from 'next/link';
import EditCustomer from '@/app/components/customers/edit-customer';
import toast from 'react-hot-toast';
import axios from '@/app/lib/axios';

function CustomerDetails({ detailsCustomer }) {

    const [openDeletePopup, setDeletePopUp] = useState(false);
	const [deleteCustomer, setDeleteCustomer] = useState(null);
	const [showEditModal, setShowEditModal] = useState(false);


	const closeModal = () => {
        setDeletePopUp(false)
    }

	const handleDeleteConfirmation = (e, customer) => {
        e.preventDefault();
        setDeletePopUp(true);
        setDeleteCustomer(customer);
    }

	const handleEditCustomer = (e, customer) => {
        e.preventDefault();
        setShowEditModal(true)
    };

    const handleDeleteCustomer = async (customer) => {
        const formData = new FormData();

        formData.append('_method', 'delete');

        await toast.promise(
            axios.post(`api/customer/${customer.customer_id}/delete`, formData), {
            loading: 'Saving...',
            success: () => {
                setDeletePopUp(false);
                // reloadForDeleteCustomer();
                return 'Customer deleted successfully!';
            },
            error: (error) => {

                return 'Failed to delete customer. Please try again.';
            },

        }
        );
    };

	useEffect(() => {
		return () => {
			console.log('CustomerDetails unmounted');
		};
	}, [detailsCustomer]);
	return (
		<>
			<div className="add-company-modal-from">
				<div
					className="offcanvas offcanvas-end"
					tabIndex="-1"
					id="offcanvasRight"
					aria-labelledby="offcanvasRightLabel"
				>
					<div className="offcanvas-body offcanvas-body-details">
						<div className="payment-from-copany-user payment-from-offcanvas">
							<div className="customer-details-title">
								<h3>Customer Detail</h3>
								<button
									type="button"
									className="btn"
									data-bs-toggle="offcanvas"
									data-bs-target="#offcanvasRight"
								>
									<i className="fas fa-close"></i>
								</button>
							</div>
							<div className="profile-header profile-header-address">
								<Image src={UserAvatar} alt="a" />
								<div className="profile-box profile-box-address">
									<div className="profile-text profile-text-address">
										<div className="profile-text-box">
											<h3>{detailsCustomer?.name}</h3>
											<p>{detailsCustomer?.designation}</p>
										</div>
										<span href="#" className="active inactive">
											{detailsCustomer?.status ? 'Active' : 'Deactive'}
										</span>
									</div>
									<div className="profile-edit-box profile-edit-details-box">

										<Link data-bs-toggle="modal"
											data-bs-target="#customerEdit" className="dropdown-item" href="#">
											<Image
												className="img-fluid pen-tools"
												src={editOneIcon}
												alt="pen-images"
											/>
										</Link>


										<Image onClick={(e) => handleDeleteConfirmation(e, detailsCustomer)}
											className="img-fluid trash-tools"
											src={trashOneIcon}
											alt="trash-images"
										/>
									</div>
								</div>
							</div>

							<div className="address-info">

								{detailsCustomer?.email && (
									<div className="adress-info-text">
										<p>Email</p>
										<Link href={`mailto:${detailsCustomer.email}`}> <Image src={envelopeIcon} alt="call icon" />{detailsCustomer.email}</Link>
									</div>
								)}

								{detailsCustomer?.phone && (
									<div className="adress-info-text">
										<p>Phone</p>
										<Link href={`tel:${detailsCustomer.phone}`}> <Image src={callIcon} alt="call icon" />{detailsCustomer.phone}</Link>
									</div>
								)}

								{detailsCustomer?.location && (
									<div className="adress-info-text">
										<p>Location</p>
										<Link href={detailsCustomer.location}><Image src={locationIcon} alt="call icon" />{detailsCustomer.location}</Link>
									</div>
								)}


							</div>

							<div className="service-profile service-profile-details">
								{detailsCustomer?.service && (
									<div className="service-text service-text-details">
										<p className='m-0'>Service:</p>
										<span>{detailsCustomer.service}</span>
									</div>
								)}

								{detailsCustomer?.company && (
									<div className="service-text service-text-details">
										<p className='m-0'>Company:</p>
										<span>{detailsCustomer.company}</span>
									</div>
								)}
							</div>
							<div className="service-profile service-profile-details">
								{detailsCustomer?.website && (
									<div className="service-text service-text-details">
										<p className='m-0'>Website:</p>
										<span>{detailsCustomer.website}</span>
									</div>
								)}


								{detailsCustomer?.kvk && (
									<div className="service-text service-text-details">
										<p className='mb-0'>KVK:</p>
										<span> {detailsCustomer.kvk} </span>
									</div>
								)}

							</div>

							{detailsCustomer?.details && (
								<div className="details details-two">
									<h3>Details</h3>
									<p>
										{detailsCustomer?.details}
									</p>
								</div>
							)}

							<div className="header header-details">
								<h3>Customer History</h3>
							</div>
							{/* <CustomerTable /> */}
						</div>
					</div>
				</div>

			</div>


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
                                <div className="modal-footer">
                                    <button onClick={() => closeModal()} data-bs-dismiss="modal" type="button" className="btn btn-secondary" id="close-modal">No</button>
                                    <button onClick={() => handleDeleteCustomer(deleteCustomer)} type="button" className="btn btn-danger">Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

			<EditCustomer customer={detailsCustomer} />
		</>
	)
}

export default CustomerDetails;