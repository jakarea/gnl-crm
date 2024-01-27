
import Image from "next/image";

import "@/public/assets/css/style.css";
import "@/public/assets/css/customer.css";

import downAngleIcon from "@/public/assets/images/icons/angle-down.svg";

import plusIcon from "@/public/assets/images/icons/plus.svg";
import UserAddIcon from "@/public/assets/images/icons/user-add.svg";

import AddNewCustomer from "./components/add-customer";
import { Toaster } from 'react-hot-toast';
import { Customers } from "@/app/lib/customers";

import Pagination from "../components/pagination/pagination";
import Link from "next/link";
import CustomerFilter from "../components/customers/customer-filter";
import CustomerItems from "./components/customerist-item";

export const metadata = {
	title: 'Customer List',
	description: 'Customer list description',
}

async function Customer() {

	const { data } = await Customers();

	const {
		totalCustomer = 0,
		newCustomer = 0,
		repeatedCustomer = 0,
		totalCustomerInc = 0,
		newCustomerInc = 0,
		repeatCustomerInc = 0
	} = data;



	
	return (
		<section className="main-page-wrapper customer-page-wrapper">
			<Toaster  position="top-right"/>

			<div className="page-title">
				<h1 className="pb-0">Customer</h1>

				<div className="common-bttn">
					<a
						href="#"
						type="button"
						className="add"
						data-bs-toggle="modal"
						data-bs-target="#staticBackdrop"
					>
						<Image src={plusIcon} alt="a" /> Add Customer
					</a>
				</div>
			</div>

			<div className="row">
				<div className="col-12 col-md-6 col-xl-4">
					<div className="customer-status-box">
						<h5>
							<Image src={UserAddIcon}
								alt="icon"
								className="img-fluid"
							/>
							Total Customer
						</h5>
						<h3>{ totalCustomer }</h3>
						<div className="d-flex">
							<span>+{totalCustomerInc}%</span>
							<p>Higher than last month</p>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-6 col-xl-4">
					<div className="customer-status-box">
						<h5>
							<Image src={UserAddIcon}
								alt="icon"
								className="img-fluid"
							/>
							New Customer
						</h5>
						<h3>{newCustomer}</h3>
						<div className="d-flex">
							<span>+{newCustomerInc}%</span>
							<p>Higher than last month</p>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-6 col-xl-4">
					<div className="customer-status-box">
						<h5>
							<Image src={UserAddIcon}
								alt="icon"
								className="img-fluid"
							/>
							Repeat Customer
						</h5>
						<h3> {repeatedCustomer} </h3>
						<div className="d-flex">
						<span>+{repeatCustomerInc}%</span>
							<p>Higher than last month</p>
						</div>
					</div>
				</div>
			</div>

			<div className="all-customer-box mt-15">
				<CustomerFilter/>


				<CustomerItems/>
	
			</div>


			{/* Add new customer modal */}
			<AddNewCustomer />
							

			{/* Customer details modal */}
			{/* <CustomerDetails/> */}

		</section>
	);



}


export default Customer;