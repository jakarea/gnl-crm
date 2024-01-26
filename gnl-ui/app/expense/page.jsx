import React from 'react'
import Link from 'next/link';
import Image from "next/image";

import "@/public/assets/css/style.css";
import "@/public/assets/css/earning.css";
import "@/public/assets/css/analytics.css";
import "@/public/assets/css/responsive.css";

import graph from "@/public/uploads/graph/grap-03.png";
import calendar from "@/public/assets/images/icons/calendar.svg";
import moneyRecive from "@/public/assets/images/icons/money-recive.svg";
import AddExpense from '../components/expense/add-expense';
import { Toaster } from 'react-hot-toast';

function Expanse() {
    return (
        <section className="main-page-wrapper analytics-page-wrapper">
            <Toaster  position="top-right"/>
            <div className="page-title page-title-one">
                <h1>Expenses</h1>

                <div className="page-bttn d-flex">
                    <div className="dropdown">
                        <a className="bttn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Image src={calendar} alt="calender" />This Month<i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="profile">
                                    Today
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="profile">
                                    Yesterday
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="profile">
                                    Last 7 days
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item " href="profile-edit">
                                    This Month
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item " href="#">
                                    This Year
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="common-bttn ms-3">
                        <Link href="#" type="button" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdropAdd"><i className="fas fa-plus"></i> Add Expenses</Link>
                    </div>
                </div>

            </div>

            <div className="row mt-3">

                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt="I" className="img-fluid money-recive" />
                            <p>Fixed Expenses</p>
                        </div>
                        <h4>$30,000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt="I" className="img-fluid money-recive" />
                            <p>Variable Expenses</p>
                        </div>
                        <h4>$10,000</h4>
                        <div className="bottom-text">
                            <h5 className="red">+0.12%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt="I" className="img-fluid money-recive" />
                            <p>Total Expenses</p>
                        </div>
                        <h4>$5000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt="I" className="img-fluid money-recive" />
                            <p>Marketing Tax</p>
                        </div>
                        <h4>$15,000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt="I" className="img-fluid money-recive" />
                            <p>Project Tax</p>
                        </div>
                        <h4>$12,000</h4>
                        <div className="bottom-text">
                            <h5>+1.48%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                    <div className="analytics-card-box">
                        <div className="top">
                            <Image src={moneyRecive} alt="I" className="img-fluid money-recive" />
                            <p>Total Tax</p>
                        </div>
                        <h4>$6,000</h4>
                        <div className="bottom-text">
                            <h5 className="red">-0.12%</h5>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row mb-15">
                <div className="col-lg-8">
                    <div className="chart-box-wrap">
                        <div className="graph-head mb-15">
                            <div className="total-earning">
                                <h5>Expenses</h5>
                            </div>
                        </div>
                        <div id="totalUser"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="chart-box-wrap">
                        <div className="graph-head">
                            <h5>Expenses Analytics</h5>
                        </div>
                        <div className="product-progress-box">
                            <div className="txt">
                                <h5>12,375</h5>
                                <p>Total Expenses</p>
                            </div>
                            <canvas id="productStatus"></canvas>
                            <div id="legend" className="legend center-legend"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="payment-from-copany-user">
                        <div className="d-flex justify-content-between">
                            <h4 className="common-subtitle">Tax</h4>
                            <ul className="graph-dot">
                                <li><i className="fas fa-circle earning"></i> Current Year</li>
                                <li><i className="fas fa-circle expense"></i> Previous Year</li>
                            </ul>
                        </div>

                        <Image src={graph} alt="I" className="img-fluid d-block w-100" />
                    </div>
                </div>
            </div>


            <div className="row mt-4">
                <div className="col-12">
                    <div className="payment-from-copany-user expense-table">
                        <div className="d-flex mb-15">
                            <h4 className="common-subtitle">Expenses History</h4>
                            <div className="actions">
                                <div className="dropdown">
                                    <Link className="bttn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All History <i className="fas fa-angle-down ms-2"></i>
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

                                <Link href="#" className="bttn" data-bs-toggle="modal" data-bs-target="#staticBackdropAdd"><i className="fas fa-plus me-2"></i> Add Expenses</Link>
                            </div>
                        </div>
                        <div className="user-payment-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Title</th>
                                        <th>Payment Description</th>
                                        <th>Payment Date</th>
                                        <th>Service Type</th>
                                        <th>Expenses Type</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>

                                    <tr>
                                        <td>
                                            <p>Lela Mraz</p>
                                        </td>
                                        <td>
                                            <p>Payment for our Marketing purpose</p>
                                        </td>
                                        <td>
                                            <p>09 Oct, 2023</p>
                                        </td>
                                        <td>
                                            <p>Marketing</p>
                                        </td>
                                        <td>
                                            <p className="fixed">Fixed</p>
                                        </td>
                                        <td>
                                            <p>$1,290</p>
                                        </td>
                                        <td>
                                            <Link className="invoice" href="#">
                                                Invoice
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                        <div className="pagination-section">
                            <nav className="mt-4" aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link className="page-link page-link-left" href="#"><i className="fa-solid fa-angle-left"></i></Link>
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
                </div>
            </div>


            {/* add expence Modal */}
            <AddExpense/>
        </section>
    )
}

export default Expanse