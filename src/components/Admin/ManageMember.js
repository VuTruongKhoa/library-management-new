import React, { useState, Fragment, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import "./ManageMember.css";
import data from "./mock-data.json";
import EditableRow from "./EditableRow.js"
import ReadOnlyRow from "./ReadOnlyRow.js"
import "bootstrap";


export default function ManageMember()
{
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        setShowAddForm(false);
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        <div className="app-container">
            <form className="info-table" onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                    ) : (
                                    <ReadOnlyRow
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            
            <button className="add-contact-btn" onClick={() => setShowAddForm(true)}>Add a Contact</button>

            {showAddForm && (
                
                <div className="add-form-overlay">
                    <div className="add-form-content">
                        <form onSubmit={handleAddFormSubmit} className="row">
                            
                            <input
                                className="form-control mb-3"
                                type="text"
                                name="fullName"
                                required="required"
                                placeholder="Họ và tên..."
                                onChange={handleAddFormChange}
                            />
                            <input
                                className="form-control mb-3"
                                type="text"
                                name="address"
                                required="required"
                                placeholder="Địa chỉ..."
                                onChange={handleAddFormChange}
                            />
                            <input
                                className="form-control mb-3"
                                type="text"
                                name="phoneNumber"
                                required="required"
                                placeholder="Số điện thoại..."
                                onChange={handleAddFormChange}
                            />
                            <input
                                className="form-control mb-3"
                                type="email"
                                name="email"
                                required="required"
                                placeholder="Email..."
                                onChange={handleAddFormChange}
                            />
                            <div className="add-form-submit-btn">
                                <button className="btn btn-primary" type="submit">Thêm thành viên</button>
                                <button className="btn btn-danger" onClick={() => setShowAddForm(false)}>
                                    Close
                                </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                
            )}

            <br/><br/><br/><br/><br/>

        </div>
    );
}

        