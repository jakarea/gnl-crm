"use client";
import React, { useEffect } from 'react'
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



function CustomerDetails({ detailsCustomer }) {

	console.log(detailsCustomer)
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
										<Image
											className="img-fluid pen-tools"
											src={editOneIcon}
											alt="pen-images"
										/>
										<Image
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
										<p>Service:</p>
										<span>{detailsCustomer.service}</span>
									</div>
								)}

								{detailsCustomer?.company && (
									<div className="service-text service-text-details">
										<p>Company:</p>
										<span>{detailsCustomer.company}</span>
									</div>
								)}
							</div>
							<div className="service-profile service-profile-details">
								{detailsCustomer?.website && (
									<div className="service-text service-text-details">
										<p>Website:</p>
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

			{/* <EditCustomer customer={detailsCustomer} customerListReload={customerListReload} /> */}
		</>
	)
}

export default CustomerDetails;