import React from "react";
import Link from "next/link";
import Image from "next/image";

import "@/public/assets/css/style.css";
import "@/public/assets/css/project.css";
import "@/public/assets/css/leads.css";
import "@/public/assets/css/responsive.css";


import avatar from "@/public/uploads/users/avatar-10.png";
import plusCircle from "@/public/assets/images/icons/plus-circle.svg";
import arrow from "@/public/assets/images/icons/arrow-move.svg";

import calling from "@/public/assets/images/icons/calling-one.svg";
import gmail from "@/public/assets/images/icons/gmail-one.svg";
import instagram from "@/public/assets/images/icons/instagram.svg";
import linkedin from "@/public/assets/images/icons/linkedln.svg";
import AddLead from "../components/leads/add-lead";
import { Toaster } from "react-hot-toast";

function Leads() {
    return (
        <section className="main-page-wrapper leads-page-wrapper">
            <Toaster  position="top-right"/>
            <div className="page-title leads-page-title">
                <h1>Hosting Leads</h1>

                <div className="common-bttn">
                    <Link href="/leads/all" className="add">View All</Link>
                </div>

            </div>
            <div className="leads-main-wrapper">
                <div className="leads-vertical-scroller custom-scroll-bar">

                    <div className="leads-section">
                        <div className="leads-title">
                            <h3>News Leads</h3>
                            <Link href="#" type="button" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdropFour">
                                <Image src={plusCircle} alt="a" className="img-fluid" />
                            </Link>
                        </div>

                        <div className="leads-collection">

                            <div className="lead-item-area">
                                <div className="leads-items">
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid avatar" />
                                        <div className="media-body">
                                            <h5>Harold Gaylord</h5>
                                            <ul>
                                                <li><Link href="#"><Image src={calling} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={gmail} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={instagram} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={linkedin} alt="a" className="img-fluid" /></Link></li>
                                            </ul>
                                        </div>
                                        <Link href="#">
                                            <Image src={arrow} alt="a" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="lead-item-area">
                                <div className="leads-items">
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid avatar" />
                                        <div className="media-body">
                                            <h5>Harold Gaylord</h5>
                                            <ul>
                                                <li><Link href="#"><Image src={calling} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={gmail} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={instagram} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={linkedin} alt="a" className="img-fluid" /></Link></li>
                                            </ul>
                                        </div>
                                        <Link href="#">
                                            <Image src={arrow} alt="a" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                    <div className="leads-section">
                        <div className="leads-title">
                            <h3>In Progress</h3>
                            <Link href="" type="button" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdropFour">
                                <Image src={plusCircle} alt="a" className="img-fluid" />
                            </Link>
                        </div>

                        <div className="leads-collection">

                            <div className="lead-item-area">
                                <div className="leads-items">
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid avatar" />
                                        <div className="media-body">
                                            <h5>Harold Gaylord</h5>
                                            <ul>
                                                <li><Link href="#"><Image src={calling} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={gmail} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={instagram} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={linkedin} alt="a" className="img-fluid" /></Link></li>
                                            </ul>
                                        </div>
                                        <Link href="#">
                                            <Image src={arrow} alt="a" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="lead-item-area">
                                <div className="leads-items">
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid avatar" />
                                        <div className="media-body">
                                            <h5>Harold Gaylord</h5>
                                            <ul>
                                                <li><Link href="#"><Image src={calling} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={gmail} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={instagram} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={linkedin} alt="a" className="img-fluid" /></Link></li>
                                            </ul>
                                        </div>
                                        <Link href="#">
                                            <Image src={arrow} alt="a" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="leads-section">
                        <div className="leads-title">
                            <h3>No Answer Yet</h3>
                            <Link href="" type="button" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdropFour">
                                <Image src={plusCircle} alt="a" className="img-fluid" />
                            </Link>
                        </div>

                        <div className="leads-collection">

                            <div className="lead-item-area">
                                <div className="leads-items">
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid avatar" />
                                        <div className="media-body">
                                            <h5>Harold Gaylord</h5>
                                            <ul>
                                                <li><Link href="#"><Image src={calling} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={gmail} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={instagram} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={linkedin} alt="a" className="img-fluid" /></Link></li>
                                            </ul>
                                        </div>
                                        <Link href="#">
                                            <Image src={arrow} alt="a" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                    <div className="leads-section">
                        <div className="leads-title">
                            <h3>Completed</h3>
                            <Link href="" type="button" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdropFour">
                                <Image src={plusCircle} alt="a" className="img-fluid" /></Link>
                        </div>

                        <div className="leads-collection">

                            <div className="lead-item-area">
                                <div className="leads-items">
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid avatar" />
                                        <div className="media-body">
                                            <h5>Harold Gaylord</h5>
                                            <ul>
                                                <li><Link href="#"><Image src={calling} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={gmail} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={instagram} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={linkedin} alt="a" className="img-fluid" /></Link></li>
                                            </ul>
                                        </div>
                                        <Link href="#">
                                            <Image src={arrow} alt="a" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="leads-section">
                        <div className="leads-title">
                            <h3>Completed</h3>
                            <Link href="" type="button" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdropFour">
                                <Image src={plusCircle} alt="a" className="img-fluid" /></Link>
                        </div>

                        <div className="leads-collection">

                            <div className="lead-item-area">
                                <div className="leads-items">
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid avatar" />
                                        <div className="media-body">
                                            <h5>Harold Gaylord</h5>
                                            <ul>
                                                <li><Link href="#"><Image src={calling} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={gmail} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={instagram} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={linkedin} alt="a" className="img-fluid" /></Link></li>
                                            </ul>
                                        </div>
                                        <Link href="#">
                                            <Image src={arrow} alt="a" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="leads-section">
                        <div className="leads-title">
                            <h3>Completed</h3>
                            <Link href="" type="button" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdropFour">
                                <Image src={plusCircle} alt="a" className="img-fluid" /></Link>
                        </div>

                        <div className="leads-collection">

                            <div className="lead-item-area">
                                <div className="leads-items">
                                    <div className="media">
                                        <Image src={avatar} alt="a" className="img-fluid avatar" />
                                        <div className="media-body">
                                            <h5>Harold Gaylord</h5>
                                            <ul>
                                                <li><Link href="#"><Image src={calling} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={gmail} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={instagram} alt="a" className="img-fluid" /></Link></li>
                                                <li><Link href="#"><Image src={linkedin} alt="a" className="img-fluid" /></Link></li>
                                            </ul>
                                        </div>
                                        <Link href="#">
                                            <Image src={arrow} alt="a" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>






            {/* Leads add modal */}
           <AddLead/>
        </section>
    )
}

export default Leads