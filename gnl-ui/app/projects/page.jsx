import React from "react";
import Link from "next/link";
import Image from "next/image";

import "@/public/assets/css/style.css";
import "@/public/assets/css/project.css";


import AddNewProject from "./components/addproject";
import { Toaster } from 'react-hot-toast';
import ProjectItems from "./components/project-items";
import { Projects } from "../lib/projects";

async function Project() {

    const {data : projects} = await Projects();


    return (
        <section className="main-page-wrapper">
            <Toaster  position="top-right"/>

            <div className="page-title mb-4">
                <h1>Projects</h1>

                <div className="common-bttn">
                    <Link href="#" className="add" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-plus"></i>
                        Add Project</Link>
                </div>

            </div>
            <div className="project-root-wrap">
                <div className="row align-items-center mb-4">
                    <div className="col-lg-6">
                        <h2 className="inner-title">All Project</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="common-dropdown project-dropdown text-end">
                            <div className="dropdown dropdown-porject-item">
                                <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Project<i className="fas fa-angle-down"></i>
                                </button>
                                <ul className="dropdown-menu project-dropdown-menu">
                                    <li><Link className="dropdown-item project-dropdown-item" href="#">All Projects<i className="fas fa-check"></i></Link></li>
                                    <li><Link className="dropdown-item project-dropdown-item" href="#">In Progress</Link></li>
                                    <li><Link className="dropdown-item project-dropdown-item" href="#">Completed</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {projects.map((project, index) => (
						<ProjectItems key={index} project={project} />
					))} 
                </div>
            </div>


            {/* project modal */}
            <AddNewProject/>
        </section>
    )
}

export default Project