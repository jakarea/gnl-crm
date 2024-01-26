"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from '@/app/lib/axios';

function AddExpense() {
    const initialExpenseState = {
        title: '',
        pay_date: '',
        service_type: '',
        amount: '',
        tax: '',
        type: '',
        description: '',
        error_list: [],
    }


    const [expenseInput, setExpense] = useState(initialExpenseState);

    const handleInput = (e) => {
        setExpense((prevExpenseInput) => ({
            ...prevExpenseInput,
            [e.target.name]: e.target.value,
            error_list: {
                ...prevExpenseInput.error_list,
                [e.target.name]: undefined,
            },
        }));
    }

    const handleTypeChange = (selectedType) => {
        setExpense({ ...expenseInput, type: selectedType });
    };

    const submitExpense = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('title', expenseInput.title);
        formData.append('pay_date', expenseInput.pay_date);
        formData.append('service_type', expenseInput.service_type);
        formData.append('amount', expenseInput.amount);
        formData.append('tax', expenseInput.tax);
        formData.append('type', expenseInput.type ? expenseInput.type: "Variable");
        formData.append('description', expenseInput.description);

        await toast.promise(
            axios.post(`api/expense/store`, formData), {
            loading: 'Saving...',

            success: () => {
                setExpense(initialExpenseState);
                return 'Expense added successfully!';
            },
            error: (error) => {
                if (error.response && error.response.data.errors) {

                    setExpense({
                        ...setExpense,
                        error_list: error.response.data.errors,
                    });

                }

                return 'Failed to add expense. Please try again.';
            },

        }
        );
    };

    return (
        <div className="custom-modal custom-modal-hosting">
            <div className="modal fade" id="staticBackdropAdd" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropAddLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-content-hosting">
                        <div className="modal-header modal-header-hosting">
                            <h1 className="modal-title" id="staticBackdropAddLabel">Add Expenses</h1>
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="fas fa-close"></i>
                            </button>
                        </div>
                        <div className="modal-body modal-body-hosting">
                            <form action="" className="common-form" onSubmit={submitExpense} encType="multipart/form-data">
                                <div className="add-customer-form add-customer-form-hosting">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="title">Title</label>
                                                <input type="text" placeholder="Enter name" id="title" name="title" className="form-control" onChange={handleInput} value={expenseInput.title}/>
                                                {expenseInput.error_list.title && (
                                                    <div className="invalid-feedback d-block">{expenseInput.error_list.title}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="date">Payment Date</label>
                                                <input type="date" placeholder="" id="date" name="pay_date" className="form-control"onChange={handleInput} value={expenseInput.pay_date} />
                                                {expenseInput.error_list.pay_date && (
                                                    <div className="invalid-feedback d-block">{expenseInput.error_list.pay_date}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="services_type">Service Type</label>
                                                <input type="text" placeholder="Service name" id="services_type" name="service_type"
                                                    className="form-control" onChange={handleInput} value={expenseInput.service_type}/>
                                                {expenseInput.error_list.service_type && (
                                                    <div className="invalid-feedback d-block">{expenseInput.error_list.service_type}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="amount">Amount</label>
                                                <input type="text" placeholder="$0000" id="amount" name="amount" className="form-control" onChange={handleInput} value={expenseInput.amount}/>
                                                {expenseInput.error_list.amount && (
                                                    <div className="invalid-feedback d-block">{expenseInput.error_list.amount}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error">
                                                <label htmlFor="tax">Tax</label>
                                                <input type="text" placeholder="$0000" id="tax" name="tax" className="form-control" onChange={handleInput} value={expenseInput.tax}/>
                                                {expenseInput.error_list.tax && (
                                                    <div className="invalid-feedback d-block">{expenseInput.error_list.tax}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group form-error form-group-four">
                                                <label htmlFor="website">Payment Type</label>
                                                <div className="common-dropdown">
                                                    <div className="dropdown">
                                                        <button className="btn w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {expenseInput.type || 'Variable'}<i className="fas fa-angle-down"></i>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-two dropdown-menu-three w-100">
                                                            <li><Link className="dropdown-item" href="#" onClick={() => handleTypeChange('Fixed')}>Fixed<i className="fas fa-check"></i></Link></li>
                                                            <li><Link className="dropdown-item" href="#" onClick={() => handleTypeChange('Variable')}>Variable</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea id='description' placeholder="Write Description" name='description' className="form-control" onChange={handleInput} value={expenseInput.description}></textarea>
                                                {expenseInput.error_list.description && (
                                                    <div className="invalid-feedback d-block">{expenseInput.error_list.description}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="form-bttn">
                                                <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-bttn">
                                                <button type="submit" className="btn btn-submit">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExpense