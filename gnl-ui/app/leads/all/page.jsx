import React from "react";
import Link from "next/link";
import Image from "next/image";

import "@/public/assets/css/style.css";
import "@/public/assets/css/project.css";
import "@/public/assets/css/leads.css";
import "@/public/assets/css/responsive.css";


import avatar from "@/public/uploads/users/avatar-10.png";
import camera from "@/public/assets/images/icons/camera.svg";
import anchor from "@/public/assets/images/icons/anchor.svg";
import dotsHorizontal from "@/public/assets/images/icons/dots-horizontal.svg";

function LeadsView() {
    return (
        <section className="main-page-wrapper">
            <div className="page-title">
                <h1>Hosting Leads</h1>

                <div className="page-filter d-flex">
                    <div className="dropdown">
                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All Leads<i className="fas fa-angle-down"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">All Leads<i className="fas fa-check"></i></Link></li>
                            <li><Link className="dropdown-item" href="#">New Leads</Link></li>
                            <li><Link className="dropdown-item" href="#">In Progress</Link></li>
                            <li><Link className="dropdown-item" href="#">No Answer Yet</Link></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-category">
                        <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropFour">
                            <i className="fa-solid fa-plus"></i>Add Leads
                        </button>
                    </div>
                </div>
            </div>
            <div className="all-customer-box payment-from-copany-user">
                <div className="user-payment-table">
                    <table>
                        <tbody>
                            <tr>
                                <th width="3%">No</th>
                                <th className="d-flex justify-content-between">
                                    <span>Name</span>
                                </th>
                                <th>Phone</th>
                                <th>Company</th>
                                <th>Website</th>
                                <th>Code</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid" />
                                        <div className="media-body">
                                            <h5>Lela Mraz</h5>
                                            <span>zlincoln@unpixel.com</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>575-491-3111</p>
                                </td>
                                <td>
                                    <p>Farrell LLC</p>
                                </td>
                                <td>
                                    <p>www.breanna.net</p>
                                </td>
                                <td>
                                    <p>99824254</p>
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <Link href="#" className="btn-view">New</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="lead-dots">
                                                <Image src={dotsHorizontal} alt="a" className="img-fluid" />

                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className="pagination-section">
                    <nav className="mt-4" aria-label="...">
                        <ul className="pagination">
                            <li className="page-item">
                                <Link href="#" className="page-link page-link-left"><i className="fa-solid fa-angle-left"></i></Link>
                            </li>
                            <li className="page-item" aria-current="page"><Link className="page-link" href="#">1</Link></li>
                            <li className="page-item">
                                <Link className="page-link" href="#">2</Link>
                            </li>
                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">...</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">10</Link></li>
                            <li className="page-item">
                                <Link className="page-link page-link-right ms-0" href="#"><i className="fa-solid fa-angle-right"></i></Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="pagination-text">
                        <p>Showing 1 to 8 of 80 entries</p>
                    </div>
                </div>

            </div>

            {/* Lead start modal  */}
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
                                <form action="" className="common-form">
                                    <div className="add-customer-form">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="">Profile Image</label>
                                                    <input type="file" name="avatar" id="avatar" className="d-none"/>

                                                        <div className="d-flex">
                                                            <label htmlFor="avatar" className="avatar">
                                                                <Image src={avatar} alt="avatar" className="img-fluid" />
                                                                    <span className="avatar-ol">
                                                                    <Image src={camera} alt="camera" className="img-fluid" />
                                                                    </span>
                                                            </label>
                                                            <p><Image src={anchor} alt="anchor" className="img-fluid" /> Upload</p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="form-group form-error">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" placeholder="Enter Name" id="name" name="name" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group form-error">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input type="text" placeholder="Enter Phone number" id="phone" name="phone" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group form-error">
                                                    <label htmlFor="email">E-mail</label>
                                                    <input type="email" placeholder="Enter email address" id="email" name="email" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group form-error">
                                                    <label htmlFor="instagram">Instagram</label>
                                                    <input type="text" placeholder="Enter Instagram" id="instagram" name="instagram" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group form-error">
                                                    <label htmlFor="linkedin">Linkedin</label>
                                                    <input type="text" placeholder="Enter location" id="linkedin" name="linkedin" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group form-error">
                                                    <label htmlFor="company">Company</label>
                                                    <input type="text" placeholder="Enter company name" id="company" name="company" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group form-error">
                                                    <label htmlFor="website">Website</label>
                                                    <input type="text" placeholder="Enter website" id="website" name="website" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group form-error">
                                                    <label htmlFor="kvk">KVK</label>
                                                    <input type="text" placeholder="Enter kvk number" id="kvk" name="kvk" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group form-error">
                                                    <label htmlFor="lead_type">Type of Lead</label>
                                                    <div className="common-dropdown common-dropdown-two">
                                                        <div className="dropdown dropdown-two dropdown-three">
                                                            <button className="btn w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Type of Lead<i className="fas fa-angle-down"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-two w-100">
                                                                <li><Link className="dropdown-item dropdown-item-two" href="#">Hosting Lead<i className="fas fa-check"></i></Link></li>
                                                                <li><Link className="dropdown-item dropdown-item-two" href="#">Marketing Lead</Link></li>
                                                                <li><Link className="dropdown-item dropdown-item-two" href="#">Project Lead</Link></li>
                                                                <li><Link className="dropdown-item dropdown-item-two" href="#">Website Lead</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group form-error">
                                                    <label htmlFor="details">Notes</label>
                                                    <textarea name="details" id="details" rows="7" className="form-control" placeholder="Enter details"></textarea>
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
        </section>
    )
}

export default LeadsView