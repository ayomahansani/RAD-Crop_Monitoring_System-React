import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addStaff, updateStaff, deleteStaff } from "../reducers/StaffSlice.ts";

function Staff() {
    const staffs = useSelector((store) => store.staffSlice.staffs);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [birth, setBirth] = useState("");
    const [editingEmail, setEditingEmail] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const staffData = { firstName, lastName, address, phone, email, joinDate, birth };

        if (editingEmail) {
            dispatch(updateStaff(staffData));
            setEditingEmail(null);
        } else {
            dispatch(addStaff(staffData));
        }
        clearForm();
    };

    const handleEdit = (staff) => {
        setFirstName(staff.firstName);
        setLastName(staff.lastName);
        setAddress(staff.address);
        setPhone(staff.phone);
        setEmail(staff.email);
        setJoinDate(convertDateFormat(staff.joinDate));
        setBirth(convertDateFormat(staff.birth));
        setEditingEmail(staff.email);
    };

    const convertDateFormat = (date) => {
        const [day, month, year] = date.split('-');
        return `${year}-${month}-${day}`;
    };

    const handleDelete = (email) => {
        dispatch(deleteStaff({ email }));
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setAddress("");
        setPhone("");
        setEmail("");
        setJoinDate("");
        setBirth("");
    };

    return (
        <div className="container-fluid" style={{ marginTop: "8px" }}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Staff Management</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!!editingEmail} />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="joinDate" className="form-label">Join Date</label>
                                        <input type="date" className="form-control" id="joinDate" value={joinDate} onChange={(e) => setJoinDate(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="birth" className="form-label">Birth Date</label>
                                        <input type="date" className="form-control" id="birth" value={birth} onChange={(e) => setBirth(e.target.value)} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        {editingEmail ? "Update" : "Add"}
                                    </button>
                                    <button type="button" className="btn btn-secondary" onClick={clearForm}>
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover w-100">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {staffs.map((staff, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{staff.firstName}</td>
                                    <td>{staff.lastName}</td>
                                    <td>{staff.address}</td>
                                    <td>{staff.email}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning mx-2" onClick={() => handleEdit(staff)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-sm btn-danger mx-2" onClick={() => handleDelete(staff.email)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Staff;
