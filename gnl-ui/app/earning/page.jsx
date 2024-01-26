import React from "react";
import Link from "next/link";
import Image from "next/image";

import "@/public/assets/css/style.css";
import "@/public/assets/css/earning.css";
import "@/public/assets/css/customer.css";
import "@/public/assets/css/responsive.css";

import avatar from "@/public/uploads/users/avatar-10.png";
import calendar from "@/public/assets/images/icons/calendar-2.svg";
import moneyRecive from "@/public/assets/images/icons/money-recive.svg";
import dotsHorizontal from "@/public/assets/images/icons/dots-horizontal.svg";
import moneyReciveDown from "@/public/assets/images/icons/money-recive-down.svg";
import AddClient from "../components/clients/add-client";

function Earning() {
    return (
        <section className="main-page-wrapper analytics-page-wrapper">

            <div className="page-title page-title-one">
                <h1>Earnings</h1>

                <div className="page-bttn">
                    <div className="dropdown">
                        <Link className="bttn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Image src={calendar} alt='logo' />This Month<i className="fas fa-angle-down"></i>
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" href="profile">
                                    Today
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="profile">
                                    Yesterday
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="profile">
                                    Last 7 days
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " href="profile-edit">
                                    This Month
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " href="#">
                                    This Year
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="row mt-3">

                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">

                            <Image src={moneyRecive} alt='I' className="img-fluid money-recive" />
                            <p>Total Earning</p>
                        </div>
                        <h4>$30,000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyReciveDown} alt='I' className="img-fluid money-recive" />
                            <p>Total Expenses</p>
                        </div>
                        <h4>$10,000</h4>
                        <div className="bottom-text">
                            <h5 className="red">-0.12%</h5>
                            <p>Less than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt='I' className="img-fluid money-recive" />
                            <p>Total VAT</p>
                        </div>
                        <h4>$5000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt='I' className="img-fluid money-recive" />
                            <p>Total Profit</p>
                        </div>
                        <h4>$15,000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt='I' className="img-fluid money-recive" />
                            <p>Total Earning</p>
                        </div>
                        <h4>$12,000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyReciveDown} alt='I' className="img-fluid money-recive" />
                            <p>Earning Today</p>
                        </div>
                        <h4>$6,000</h4>
                        <div className="bottom-text">
                            <h5 className="red">-0.12%</h5>
                            <p>Less than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt='I' className="img-fluid money-recive" />
                            <p>Website Earning</p>
                        </div>
                        <h4>$8,000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt='I' className="img-fluid money-recive" />
                            <p>Project Earning</p>
                        </div>
                        <h4>$4,000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="row mb-15">
                <div className="col-lg-12">
                    <div className="chart-box-wrap">
                        <div className="graph-head mb-15">
                            <div className="total-earning">
                                <h5>Total Earning</h5>
                                <div className="bottom-text">
                                    <h5>+6.10%</h5>
                                    <p>Higher than last month</p>
                                </div>
                            </div>
                            <div className="earning">
                                <Link href="#"><i className="fas fa-circle"></i> Earning</Link>
                                <h5>$10,000.00</h5>
                            </div>
                        </div>
                        <div id="totalEarning"></div>
                    </div>
                </div>
            </div>


            <div className="page-title page-title-two">
                <h1>Clients</h1>
                <div className="page-filter d-flex">
                    <div className="dropdown">
                        <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropAdd"><i className="fa-solid fa-plus"></i>
                            Add Client
                        </button>
                    </div>
                </div>
            </div>
            <div className="payment-from-copany-user">
                <div className="user-payment-table">
                    <table>
                        <tbody>
                            <tr>
                                <th width="3%">No</th>
                                <th className="d-flex justify-content-between">
                                    <span>Name</span>
                                </th>
                                <th>Active Status</th>
                                <th>Payment Date</th>
                                <th>Service</th>
                                <th>Amount</th>
                                <th>Payment Status</th>
                            </tr>

                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    <div className="media">
                                        <Image src={avatar} alt='A' className="img-fluid" />
                                        <div className="media-body">
                                            <h5>Lela Mraz</h5>
                                            <span>zlincoln@unpixel.com</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="active-status">Active</p>
                                </td>
                                <td>
                                    <p>09 Oct, 2023</p>
                                </td>
                                <td>
                                    <p>Dashboard Design</p>
                                </td>
                                <td>
                                    <p>$1,290</p>
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <Link href="#" className="btn-view">Paid</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="lead-dots" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <Image src={dotsHorizontal} alt='A' className="img-fluid" /></Link>
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



            {/* add client modal start */}
            <AddClient/>
        </section>
    )
}

export default Earning