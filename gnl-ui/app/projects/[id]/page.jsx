import React from "react";
import Link from "next/link";
import Image from "next/image";


import "@/public/assets/css/style.css";
import "@/public/assets/css/project.css";
import "@/public/assets/css/responsive.css";

import avatar from "@/public/uploads/users/avatar-10.png";

import pen from "@/public/assets/images/icons/pen.svg";
import bin from "@/public/assets/images/icons/bin.svg";
import clock from "@/public/assets/images/icons/clock.svg";
import calendar from "@/public/assets/images/icons/calendar.svg";
import groupWhite from "@/public/assets/images/icons/Group-white.svg";
import like from "@/public/assets/images/icons/like.svg";
import dislike from "@/public/assets/images/icons/dislke.svg";
import replayIcon from "@/public/assets/images/icons/reply-icon.svg";
import projectIcon from "@/public/uploads/projects/project-01.png";
import { useRouter } from 'next/navigation';
import AddNewProject from "../components/addproject";
import { GetSingleProject } from "@/app/lib/projects";

async function ProjectDetails({params}) {

    const { id: projectId } = params;

    const {data : project} = await GetSingleProject(projectId);

    // const formattedStartDate = project.start_date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    // const formattedEndDate = project.end_date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    

    const startDate = new Date(project.start_date);
    const endDate = new Date(project.end_date);
    const daysRemaining = (endDate - startDate) / (1000 * 60 * 60 * 24);
        
    return (
        <section className="main-page-wrapper">

            <div className="page-title mb-4">
                <h1>Projects Details</h1>
                <div className="common-bttn">
                    <Link href="#" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-plus"></i> Add Project</Link>
                </div>
            </div>
            <div className="project-details-root-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="project-details-txt">
                            <div className="header">
                                <span className="in_progress"> In Progress</span>
                                <div className="actions">
                                    <Link href="#">
                                        <Image src={pen}  alt="a" className="img-fluid"/>
                                    </Link>
                                    <Link href="#"
                                    ><Image src={bin}  alt="a" className="img-fluid"/></Link>
                                </div>
                            </div>
                            <div className="txt">
                                <h4> {project.title} </h4>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                            <div className="thumbnail">
                                <Image src={project.thumbnail ? process.env.NEXT_BACKEND_URL+"/"+project.thumbnail: projectIcon} alt="a" className="img-fluid" />
                            </div>
                            <div className="d-flex">
                                <p>
                                    <Image src={calendar}  alt="a" className="img-fluid"/>
                        
                                    20 Oct - 30 Oct 2023
                         
                                </p>
                                <p>
                                    <Image src={clock}  alt="a" className="img-fluid avatar"/>
                                    {daysRemaining} Days Remaining
                                </p>
                            </div>
                            <hr />
                            <div className="project-bottom">
                                <div className="media">
                                    <Image src={avatar}  alt="a" className="img-fluid avatar"/>
                                    <div className="media-body">
                                        <h5>Louise Schuppe</h5>
                                        <p>Strategist</p>
                                    </div>
                                </div>
                                <h4>$460</h4>
                            </div>
                        </div>
                    </div>
                    

                    {/* Project comments */}
                    <div className="col-lg-7 border-start">
                        <div className="project-details-txt project-details-comment">
                            <div className="txt">
                                <h4>Comments</h4>
                            </div>
                            <hr />
                            <div className="project-single-comment mb-4">
                                <div className="media">
                                    
                                    <Image src={avatar}  alt="a" className="img-fluid avatar"/>
                                    <div className="media-body">
                                        <h5>Louise Schuppe</h5>
                                        <p>1 days ago</p>
                                    </div>
                                </div>
                                <p className="comment-text">
                                    Qui sapiente natus. Et deserunt temporibus. Sit corrupti aut
                                    itaque aliquid nemo rerum adipisci.
                                </p>

                                <ul>
                                    <li>
                                        <a href="#"
                                        >
                                            <Image src={like}  alt="a" className="img-fluid avatar"/>
                                            <span>948</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                        >
                                            <Image src={dislike}  alt="a" className="img-fluid avatar"/>
                                            <span>182</span>
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#" className="reply"> Reply </Link>
                                    </li>
                                </ul>

                                <hr />

                            </div>


                            <div className="project-single-comment mb-4">
                                <div className="media">
                                   
                                    <Image src={avatar}  alt="a" className="img-fluid avatar"/>
                                    <div className="media-body">
                                        <h5>Melinda Rodriguez</h5>
                                        <p>1 days ago</p>
                                    </div>
                                </div>
                                <p className="comment-text">
                                    Enim veritatis et neque sit voluptas ipsa perferendis. Voluptas accusamus dolorem dolore sit incidunt.
                                </p>
                               
                                <ul>
                                    <li>
                                        <Link href="#" className="active">
                                            <Image src={like}  alt="a" className="img-fluid"/>
                                        
                                            <span>948</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#"
                                        ><Image src={dislike}  alt="a" className="img-fluid"/>
                                            <span>182</span>
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#" className="reply"> Reply </Link>
                                    </li>
                                </ul>


                                <div className="comment-reply-box">
                                    <div className="media">
                                        <Image src={avatar}  alt="a" className="img-fluid avatar"/>
                                        <div className="media-body">
                                            <h5>Louise Schuppe</h5>
                                            <p>04:30 PM</p>
                                        </div>
                                    </div>

                                    <div className="commment-reply-box">
                                        <p className="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate veniam odio eligendi delectus iste consequuntur eveniet. Dicta consequuntur quam illo.</p>
                                        <textarea className="form-control" placeholder="Reply"></textarea>
                                        <button className="btn btn-submit" type="button">
                                            <Image src={replayIcon}  alt="a" className="img-fluid avatar"/>

                                            </button>

                                    </div>
                                </div>
                                <hr />

                            </div>


        
                            <div className="main-comment-input-box">
                                <input type="text" placeholder="Enter comment.." className="form-control" />
                                <button type="button" className="btn btn-submit">
                                    Send
                                    <Image src={groupWhite}  alt="a" className="img-fluid avatar"/>
                                </button>
                            </div>
         
                        </div>
                    </div>
                </div>
            </div>

            {/* project modal */}
            <AddNewProject/>
        </section>
    )
}

export default ProjectDetails