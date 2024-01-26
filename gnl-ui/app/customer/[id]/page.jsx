import Link from 'next/link'

import "@/public/assets/css/style.css";
import "@/public/assets/css/customer.css";


import avatar from "@/public/uploads/users/avatar-2.png";

import callIcon from "@/public/assets/images/icons/call.svg";
import emailIcon from "@/public/assets/images/icons/envelope.svg";

import location from "@/public/assets/images/icons/location.svg";
import Image from 'next/image';
import { getCustomer } from '@/app/lib/customers';
import CustomerEditDeleteButton from '@/app/components/customers/editDeleteButton';
import EditCustomer from '@/app/components/customers/edit-customer';


async function CustomerDetails({ params }) {

    const { id: customerId } = params;

    // const [openDeletePopup, setDeletePopUp] = useState(false);

    const { data: customer } = await getCustomer(customerId);

    return (

        <section className="main-page-wrapper">
            <h2>Customer Detail</h2>

            <div className="payment-from-copany-user">

                <div className="profile-header">
                    <div className="profile-box">
                        <Image src={avatar} alt="a" className="img-fluid pen-tools" />
                        <div className="profile-text">
                            <h3>{customer.name}</h3>
                            <p>{customer.designation}</p>
                        </div>
                        <Link href="#" className="active">{customer.status ? 'Active' : "Deactive"}</Link>
                    </div>
                    <div className="profile-edit-box">
                        <CustomerEditDeleteButton customer={customer} />
                    </div>
                </div>


                <div className="address-info">
                    {customer.phone && (
                        <div className="adress-info-text">
                            <p>Phone</p>
                            <Link href={`tel:${customer.phone}`}> <Image src={callIcon} alt="call icon" />{customer.phone}</Link>
                        </div>
                    )}

                    {customer.email && (
                        <div className="adress-info-text">
                            <p>Email</p>
                            <Link href={`mailto:${customer.email}`}><Image src={emailIcon} alt="call icon" />{customer.email}</Link>
                        </div>
                    )}


                    {customer.website && (
                        <div className="address-info-text">
                            <p>Website</p>
                            <Link href={customer.website}>
                                <Image src={callIcon} alt="call icon" />
                                {customer.website}
                            </Link>
                        </div>
                    )}


                    {customer.location && (
                        <div className="adress-info-text">
                            <p>Location</p>
                            <Link href={customer.location}><Image src={location} alt="call icon" />{customer.location}</Link>
                        </div>
                    )}
                </div>


                <div className="service-profile">
                    <div className="service-text">
                        <p className="ps-0 mb-0">Service:</p>

                        {customer.service && (
                            <Link href="#"> {customer.service}</Link>
                        )}

                    </div>
                    {customer.company && (
                        <div className="service-text border-line">
                            <p className='mb-0'>Company:</p>
                            <Link href="#">{customer.company}</Link>
                        </div>
                    )}

                    {customer.kvk && (
                        <div className="service-text border-line">
                            <p className='mb-0'>KVK:</p>
                            <Link href="#"> {customer.kvk} </Link>
                        </div>
                    )}
                </div>

                <div className="details">
                    <h3>Details</h3>
                    <p>
                        {customer.details}
                    </p>
                </div>

                <div className="header">
                    <h3>Customer History</h3>
                    <span className="paid">Total Paid= $1,956</span>
                </div>
                <div className="user-payment-table">
                    <table>
                        <tbody>
                            <tr>
                                <th width="3%">No</th>
                                <th className="d-flex justify-content-between">
                                    <span>Service</span>
                                    <div className="filter-sort-box">
                                        <div className="dropdown">
                                            <button className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownBttn"></button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item filterItem" href="#" data-value="asc">In order A-Z</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item filterItem" href="#" data-value="desc">In order Z-A</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </th>
                                <th>Payment Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>


                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="media">
                                        <div className="media-body">
                                            <h5>Dashboard Design</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>09 Oct, 2023</p>
                                </td>
                                <td>
                                    <p>$1,290</p>
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <span className="btn-pending">Pending</span>
                                        </li>
                                    </ul>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <EditCustomer customer={customer} />
        </section>

    )
}

export default CustomerDetails