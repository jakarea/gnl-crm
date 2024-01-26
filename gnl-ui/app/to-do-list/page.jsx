import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/public/assets/css/style.css";
import "@/public/assets/css/todo.css";
import "@/public/assets/css/project.css";
import "@/public/assets/css/responsive.css";

import avatar from "@/public/uploads/users/avatar-10.png";
import camera from "@/public/assets/images/icons/camera-2.svg";
import close from "@/public/assets/images/icons/close-3.svg";
import calendar from "@/public/assets/images/icons/calendar.svg";
import clock from "@/public/assets/images/icons/clock.svg";

import AddTask from "./components/add-task";
import { Toaster } from "react-hot-toast";


function Todo() {
	return (
		<section className="main-page-wrapper">
			<Toaster  position="top-right"/>

			<div className="page-title">
				<h1 className="pb-0">To Do List</h1>
			</div>

			<div className="row">
				<div className="col-lg-3">
					<div className="my-task-list-box">
						<div className="header">
							<h4>My Task</h4>
							<Link
								href="#"
								className="add inter"
								data-bs-toggle="modal"
								data-bs-target="#staticBackdrop"
							>
								<i className="fas fa-plus me-2"></i>Task
							</Link>
						</div>

						<div className="task-list-area custom-scroll-bar">
							<div className="task-item">
								<div className="top">
									<span>
										<i className="fas fa-circle"></i> Priority
									</span>
									<Link href="#">
										<i className="fas fa-ellipsis-vertical"></i>
									</Link>
								</div>
								<h4>

									<Image src={camera} alt="logo" />
									Meeting
								</h4>
								<p>Let us know what is the our new project updates.</p>
								<hr />

								<div className="media">
									<Image src={avatar} alt="a" className="img-fluid avatar" />
									<div className="media-body">
										<h5>Louise Schuppe</h5>
										<span>Strategist</span>
									</div>
								</div>
								<hr />
								<div className="media">
									<Image src={avatar} alt="a" className="img-fluid avatar" />
									<div className="media-body">
										<h5>Dashboard Design</h5>
										<span>
											<Image src={close} alt="a" className="img-fluid" /> 4 Days
											Remaining
										</span>
									</div>
								</div>
								<hr />

								<div className="ftr">
									<p>
										<Image src={calendar} alt="a" className="img-fluid" /> Today
									</p>
									<p>
										<Image src={clock} alt="a" className="img-fluid" /> 12:30 PM
									</p>
								</div>
							</div>

							<div className="task-item">
								<div className="top">
									<span className="important">
										<i className="fas fa-circle"></i> Important
									</span>
									<Link href="#">
										<i className="fas fa-ellipsis-vertical"></i>
									</Link>
								</div>
								<h4>
									<Image src={camera} alt="a" className="img-fluid" />
									Meeting
								</h4>
								<p>Let us know what is the our new project updates.</p>
								<hr />

								<div className="media">
									<Image src={avatar} alt="a" className="img-fluid avatar" />
									<div className="media-body">
										<h5>Louise Schuppe</h5>
										<span>Strategist</span>
									</div>
								</div>
								<hr />
								<div className="media">
									<Image src={avatar} alt="a" className="img-fluid avatar" />
									<div className="media-body">
										<h5>Dashboard Design</h5>
										<span>
											<Image src={close} alt="a" className="img-fluid" /> 4 Days
											Remaining
										</span>
									</div>
								</div>
								<hr />

								<div className="ftr">
									<p>
										<Image src={calendar} alt="a" className="img-fluid" /> Today
									</p>
									<p>
										<Image src={clock} alt="a" className="img-fluid" /> 12:30 PM
									</p>
								</div>
							</div>

							<div className="task-item">
								<div className="top">
									<span className="basic">
										<i className="fas fa-circle"></i> Basic
									</span>
									<Link href="#">
										<i className="fas fa-ellipsis-vertical"></i>
									</Link>
								</div>
								<h4>
									<Image src={camera} alt="a" className="img-fluid" /> Meeting
								</h4>
								<p>Let us know what is the our new project updates.</p>
								<hr />

								<div className="media">
									<Image src={avatar} alt="a" className="img-fluid avatar" />
									<div className="media-body">
										<h5>Louise Schuppe</h5>
										<span>Strategist</span>
									</div>
								</div>
								<hr />
								<div className="media">
									<Image src={avatar} alt="a" className="img-fluid avatar" />
									<div className="media-body">
										<h5>Dashboard Design</h5>
										<span>
											<Image src={close} alt="a" className="img-fluid" /> 4 Days
											Remaining
										</span>
									</div>
								</div>
								<hr />

								<div className="ftr">
									<p>
										<Image src={calendar} alt="a" className="img-fluid" /> Today
									</p>
									<p>
										<Image src={calendar} alt="a" className="img-fluid" /> 12:30 PM
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-9">
					<div className="schedule-part-box">
						<div className="header">
							<Link href="#">
								<i className="fas fa-plus me-2"></i> Schedule
							</Link>
						</div>

						<h4>Schedule Comming soon.....</h4>
					</div>
				</div>
			</div>


			{/* Add Task Modal  */}
			<AddTask/>
			
		</section>
	);
}

export default Todo;
