function DeleteConfirmPopUp() {
    return (
        <div className="custom-modal custom-modal-leads">
            <div
                className={`modal fade show`}
                id="delteConfirm"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5" id="staticBackdropLabel">
                                Delete Customer
                            </h5>
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="fas fa-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete?</p>
                        </div>
                        <div class="modal-footer">
                            <button data-bs-dismiss="modal" type="button" class="btn btn-secondary" id="close-modal">No</button>
                            <button type="button" class="btn btn-danger">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmPopUp