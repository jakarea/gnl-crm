
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import calendar from "@/public/assets/images/icons/calendar-2.svg";
import moneyRecive from "@/public/assets/images/icons/money-recive.svg";

import avatar from "@/public/uploads/users/avatar-1.png";
import graph from "@/public/uploads/graph/graph-01.png";
import userAdd from "@/public/assets/images/icons/user-add.svg";
import dotsHorizontal from "@/public/assets/images/icons/dots-horizontal.svg";


import "@/public/assets/css/customer.css";

function Dashboard() {
    return (
        <section className="main-page-wrapper">
            <div className="page-title">
                <h1 className="pb-0">Dashboard</h1>

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

            <div className="row">
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="customer-status-box">
                        <h5>
                            <Image src={moneyRecive} alt='icon' className="img-fluid"/>
                            Total Income
                        </h5>
                        <h3>$29,435.00</h3>
                        <div className="d-flex">
                            <span>+4.3%</span>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="customer-status-box">
                        <h5>
                            <Image src={moneyRecive} alt="icon" className="img-fluid"/>
                            Total Expenses
                        </h5>
                        <h3>$29,435.00</h3>
                        <div className="d-flex">
                            <span className="lower">-0.12%</span>
                            <p>Less than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="customer-status-box">
                        <h5>
                            <Image src={moneyRecive} alt="icon" className="img-fluid"/>
                            Total Profit
                        </h5>
                        <h3>3646</h3>
                        <div className="d-flex">
                            <span>+4.3%</span>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className="customer-status-box">
                        <h5>
                            <Image src={userAdd} alt="icon" className="img-fluid"/>
                        
                            Total Customer
                        </h5>
                        <h3>4,136</h3>
                        <div className="d-flex">
                            <span>+4.3%</span>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className="customer-status-box">
                        <h5>
                            <Image src={userAdd} alt="icon" className="img-fluid"/>
                            New Customer
                        </h5>
                        <h3>490</h3>
                        <div className="d-flex">
                            <span>+4.3%</span>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4 mt-4">
                    <div className="customer-status-box">
                        <h5>
                            <Image src={userAdd} alt="icon" className="img-fluid"/>
                            Repeat Customer
                        </h5>
                        <h3>3,646</h3>
                        <div className="d-flex">
                            <span>+4.3%</span>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mt-4">
                <div className="col-lg-6">
                    <div className="project-ending-box payment-from-copany-user">
                        <h4>Project Ending Soon</h4>
                        <div className="project-overflow custom-scroll-bar">
                            <div className="user-payment-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Client Name </th>
                                            <th>Project Name</th>
                                            <th>Time Remaining</th>
                                            <th>Amount</th>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="media">
                                                        <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Lela Mraz</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className="media">
                                                        <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Mr. Roy Cole</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className="media">
                                                        <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Skiles Cole</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Leah Skiles</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Cecil Sporer</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Mr. Roy Cole</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Skiles Cole</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Leah Skiles</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                        <div className="media-body">
                                                            <h5>Cecil Sporer</h5>
                                                            <span>zlincoln@unpixel.com</span>
                                                        </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Dashboard Design</p>
                                            </td>
                                            <td>
                                                <p className="danger">1 Day Remaining</p>
                                            </td>
                                            <td className="text-center">
                                                <p>$1,290</p>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="project-ending-box payment-from-copany-user">
                        <h4>Upcoming Task</h4>
                        <div className="project-overflow custom-scroll-bar">
                            <div className="user-payment-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Task Title </th>
                                            <th>Task Details</th>
                                            <th>Date/ Day</th>
                                            <th className="text-center">Time</th>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p>Meeting</p>
                                            </td>
                                            <td>
                                                <p>Meeting for our new <br/> project with Elma.</p>
                                            </td>
                                            <td>
                                                <p>Today</p>
                                            </td>
                                            <td className="text-center">
                                                <p className="danger">12:30 PM</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-6">
                    <div className="payment-from-copany-user">
                        <div className="d-flex justify-content-between">
                            <h4 className="common-subtitle">Earning &amp; Expenses</h4>
                            <ul className="graph-dot">
                                <li><i className="fas fa-circle earning"></i> Earning</li>
                                <li><i className="fas fa-circle expense"></i> Expenses</li>
                            </ul>
                        </div>

                        <Image src={graph} alt="A" className="img-fluid d-block w-100"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="payment-from-copany-user">
                        <div className="d-flex justify-content-between">
                            <h4 className="common-subtitle">Projects</h4>
                        </div>

                        <Image src={graph} alt="A" className="img-fluid"/>
                    </div>
                </div>
            </div>


            <div className="row mt-4">
                <div className="col-12">
                    <div className="all-customer-box active-client-table payment-from-copany-user">
                        <h4 className="common-subtitle mb-15">Active Clients</h4>
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
                                        <th></th>
                                    </tr>


                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <div className="media">
                                            <Image src={avatar} alt="A" className="img-fluid"/>
                                                    <div className="media-body">
                                                        <h5>Lela Mraz</h5>
                                                        <span>zlincoln@unpixel.com</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="active">Active</p>
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
                                            <span className="status paid">
                                                Paid
                                            </span>
                                        </td>
                                        <td>
                                            <Link href="#">
                                                <Image src={dotsHorizontal} alt="" className="img-fluid"/>
                                            </Link>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <div className="media">
                                                    <Image src={avatar} alt="" className="img-fluid"/>
                                                    <div className="media-body">
                                                        <h5>Cecil Sporer</h5>
                                                        <span>zlincoln@unpixel.com</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="inactive">Inactive</p>
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
                                            <span className="status pending">
                                                Paid
                                            </span>
                                        </td>
                                        <td>
                                            <Link href="#">
                                                <Image src={dotsHorizontal} alt="" className="img-fluid"/>
                                            </Link>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                    <div className="media-body">
                                                        <h5>Lela Mraz</h5>
                                                        <span>zlincoln@unpixel.com</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="active">Active</p>
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
                                            <span className="status unpaid">
                                                Unpaid
                                            </span>
                                        </td>
                                        <td>
                                            <Link href="#">
                                                <Image src={dotsHorizontal} alt="A" className="img-fluid"/>
                                            </Link>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                    <div className="media-body">
                                                        <h5>Cecil Sporer</h5>
                                                        <span>zlincoln@unpixel.com</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="inactive">Inactive</p>
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
                                            <span className="status unpaid">
                                                Unpaid
                                            </span>
                                        </td>
                                        <td>
                                            <Link href="#">
                                                <Image src={dotsHorizontal} alt="" className="img-fluid"/>
                                            </Link>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <div className="media">
                                                
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                    <div className="media-body">
                                                        <h5>Lela Mraz</h5>
                                                        <span>zlincoln@unpixel.com</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="active">Active</p>
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
                                            <span className="status paid">
                                                Paid
                                            </span>
                                        </td>
                                        <td>
                                            <Link href="#">
                                                <Image src={dotsHorizontal} alt="" className="img-fluid"/>
                                            </Link>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <div className="media">
                                                
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                    <div className="media-body">
                                                        <h5>Cecil Sporer</h5>
                                                        <span>zlincoln@unpixel.com</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="inactive">Inactive</p>
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
                                            <span className="status pending">
                                                Paid
                                            </span>
                                        </td>
                                        <td>
                                            <Link href="#">
                                                <Image src={dotsHorizontal} alt="" className="img-fluid"/>
                                            </Link>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <div className="media">
                                                <Image src={avatar} alt="" className="img-fluid"/>
                                                    <div className="media-body">
                                                        <h5>Lela Mraz</h5>
                                                        <span>zlincoln@unpixel.com</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="active">Active</p>
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
                                            <span className="status paid">
                                                Paid
                                            </span>
                                        </td>
                                        <td>
                                            <Link href="#">
                                                <Image src={dotsHorizontal} alt="" className="img-fluid"/>
                                            </Link>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <div className="media">
                                                <Image src={avatar} alt="A" className="img-fluid"/>
                                                    <div className="media-body">
                                                        <h5>Cecil Sporer</h5>
                                                        <span>zlincoln@unpixel.com</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="inactive">Inactive</p>
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
                                            <span className="status pending">
                                                Paid
                                            </span>
                                        </td>
                                        <td>
                                            <Link href="#">
                                                <Image src={dotsHorizontal} alt="" className="img-fluid"/>
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
                                        <Link href="#" className="page-link page-link-left"><i className="fa-solid fa-angle-left"></i></Link>
                                    </li>
                                    <li className="page-item" aria-current="page"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#">2</Link>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">10</a></li>
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




        {/* Modal */}




        
        
        </section>
    );
}

export default Dashboard