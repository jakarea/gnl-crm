import React from 'react';


import clock from "@/public/assets/images/icons/clock.svg";
import avatar from "@/public/uploads/users/avatar-10.png";

import projectImage from "@/public/uploads/projects/project-01.png";

import calendar from "@/public/assets/images/icons/calendar.svg";
import Link from 'next/link';
import Image from 'next/image';


function ProjectItems({project}) {
    const firstCustomer = project.customers.length > 0 ? project.customers[0] : null;
    const avatarSrc = firstCustomer ? process.env.NEXT_BACKEND_URL + "/" + firstCustomer.avatar : avatar;

    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div className="project-single-box">
                <div className="project-status">
                    <span className="in_progress"><i className="fas fa-circle danger"></i> In Progress</span>
                    <Link href="#"><i className="fa-solid fa-ellipsis-vertical"></i></Link>
                </div>
                <div className="title">
                    <h3><Link href={`/projects/${project.project_id}`}> {project.title} </Link></h3>
                </div>
                <div className="thumbnail">
                    <Image src={project.thumbnail ? process.env.NEXT_BACKEND_URL+"/"+project.thumbnail: projectImage} alt="a" className="img-fluid" />
                </div>
                <div className="d-flex">
                    <p><Image src={calendar} alt="a" className="img-fluid" /> 20 Oct - 30 Oct 2023</p>
                    <p><Image src={clock} alt="a" className="img-fluid" /> 4 Days Remaining</p>
                </div>
                <hr />
                <div className="project-bottom">
                    <div className="media">
                        {/* <Image src={avatarSrc} width={20} height={20} alt="a" className="img-fluid avatar" /> */}
                        <div className="media-body">
                        <h5>{firstCustomer && firstCustomer.name}</h5>
                        <p>{firstCustomer && firstCustomer.designation}</p>
                        </div>
                    </div>
                    <h4>{project.amount}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProjectItems