
import Image from "next/image";

import "@/public/assets/css/customer.css";
import "@/public/assets/css/style.css";

import downAngleIcon from "@/public/assets/images/icons/angle-down.svg";

import plusIcon from "@/public/assets/images/icons/plus.svg";
import UserAddIcon from "@/public/assets/images/icons/user-add.svg";
import UserAvatar from "@/public/uploads/users/avatar-1.png";
import CustomerList from "../components/customer/CustomerList";

export const metadata = {
    title: 'Customer List',
    description: 'Customer list description',
}


async function Customer() {


    return (
        <section className="main-page-wrapper customer-page-wrapper">
            {/* <Toaster position="top-right" /> */}

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
                        <h3>12345</h3>
                        <div className="d-flex">
                            <span>+4.3%</span>
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
                        <h3>4,136</h3>
                        <div className="d-flex">
                            <span>+4.3%</span>
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
                        <h3>3646</h3>
                        <div className="d-flex">
                            <span>+4.3%</span>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="all-customer-box mt-15">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="customer-filter-title">
                            <h2 className="common-title pb-0">All Customer</h2>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form action="">
                            <div className="filters-area">
                                <div className="dropdown">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        All Leads <Image src={downAngleIcon} alt="a" />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item active" href="#">
                                                All Leads <i className="fas fa-check"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Hosting Leads
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Marketing Leads
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Project Leads
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Website Leads
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Lost Leads
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        All Service <Image src={downAngleIcon} alt="a" />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item active" href="#">
                                                All Service <i className="fas fa-check"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                App Design
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Dashboard Design
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Landing Page Design
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        All Customer <Image src={downAngleIcon} alt="a" />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item active" href="#">
                                                All Customer <i className="fas fa-check"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Active Customer
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Inactive Customer
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <CustomerList />
                </div>

                <div className="pagination-section">
                    <nav className="mt-4" aria-label="...">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link page-link-left">
                                    <i className="fa-solid fa-angle-left"></i>
                                </a>
                            </li>
                            <li className="page-item" aria-current="page">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    ...
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    10
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link page-link-right" href="#">
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="pagination-text">
                        <p>Showing 1 to 8 of 80 entries</p>
                    </div>
                </div>
            </div>


            {/* Add new customer modal */}
            {/* <AddNewCustomer /> */}


            {/* Customer details modal */}
            {/* <CustomerDetails /> */}

        </section>
    );



}


export default Customer;