import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // State for selected user details
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const response = await fetch('http://localhost:3003/Dashboard');
                const data = await response.json();
                setUsers(data);
                setFilteredUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = users.filter(user => {
            const name = user.name || "";
            const email = user.email || "";
            const phone = user.phone || "";
            const username = user.username || "";
            return (
                name.toLowerCase().includes(lowerCaseQuery) ||
                email.toLowerCase().includes(lowerCaseQuery) ||
                phone.toLowerCase().includes(lowerCaseQuery) ||
                username.toLowerCase().includes(lowerCaseQuery)
            );
        });
        setFilteredUsers(filtered);
    }, [searchQuery, users]);

    const handleView = (user) => {
        setSelectedUser(user); // Set the selected user
        setShowModal(true); // Show the modal
    };

    const handleSaveChanges = () => {
        // Add logic here to save any changes, if necessary
        console.log("Changes saved for user:", selectedUser);
        setShowModal(false); // Close the modal
    };

    return ( <
        div className = "admin-dashboard" >
        <
        div >
        <
        img style = {
            { top: "10px" } }
        src = "/images/virton.png"
        alt = "Logo"
        className = "header-logo" / >
        <
        /div> <
        div className = 'userslist' >
        <
        div className = 'line' > < /div> <
        button className = 'user' > User List < /button> <
        div className = 'line' > < /div> <
        button className = 'trans' > Transaction List < /button> <
        div className = 'line' > < /div> <
        button style = {
            { paddingLeft: "10px", lineHeight: "24px", letterSpacing: "0.01em" } }
        className = 'trans' > Video Management < /button> <
        div className = 'line' > < /div> <
        button className = 'trans' > Top Reciver List < /button> <
        div className = 'line' > < /div> <
        /div> <
        div className = 'whitebox' >
        <
        p className = 'headdash' > Dashboard < /p> <
        p className = 'date' > 01 - 25 March, 2020 < /p> <
        p className = 'ulist' > User List < /p> <
        input type = "text"
        placeholder = "Search..."
        className = "form-control mb-3"
        value = { searchQuery }
        onChange = {
            (e) => setSearchQuery(e.target.value) }
        /><i className="bi bi-search search-icon"></i >

        <
        div className = 'greybox' >

        <
        table className = "table table-striped" >
        <
        thead >
        <
        tr >
        <
        th > Name < /th> <
        th > Email < /th> <
        th > Phone < /th> <
        th > Username < /th> <
        th > Action < /th> <
        /tr> <
        /thead> <
        tbody > {
            filteredUsers.length > 0 ? (
                filteredUsers.map((user) => ( <
                    tr key = { user._id } >
                    <
                    td > { user.firstName } < /td> <
                    td > { user.email } < /td> <
                    td > { user.contactNumber } < /td> <
                    td > { user.username } < /td> <
                    td >
                    <
                    button className = "btn btn-primary btn-sm"
                    onClick = {
                        () => handleView(user) } >
                    View <
                    /button> <
                    /td> <
                    /tr>
                ))
            ) : ( <
                tr >
                <
                td colSpan = "5" > No users match your search < /td> <
                /tr>
            )
        } <
        /tbody> <
        /table> <
        /div> <
        /div>

        { /* Modal for viewing user details */ } {
            showModal && selectedUser && ( <
                div className = "modal-overlay" >
                <
                div className = "modal-content" >
                <
                p className = "view-edit-list-heading" > View & Edit List < /p> <
                div className = "form-sections" > { /* Left Section */ } <
                div className = "left-section" >
                <
                div className = "input-group" >
                <
                label > First Name: < /label><br/ >
                <
                div className = "input-box" > { selectedUser.firstName } < /div> <
                /div> <
                div className = "input-group" >
                <
                label > Last Name: < /label><br/ >
                <
                div className = "input-box" > { selectedUser.lastName } < /div> <
                /div> <
                div className = "input-group" >
                <
                label > Contact Number: < /label><br/ >
                <
                div className = "input-box" > { selectedUser.contactNumber } < /div> <
                /div> <
                div className = "input-group" >
                <
                label > WhatsApp Number: < /label><br/ >
                <
                div className = "input-box" > { selectedUser.whatsappNumber } < /div> <
                /div> <
                /div> { /* Right Section */ } <
                div className = "right-section" >
                <
                div className = "input-group" >
                <
                label > Username: < /label><br/ >
                <
                div className = "input-box" > { selectedUser.username } < /div> <
                /div> <
                div className = "input-group" >
                <
                label > Email: < /label><br/ >
                <
                div className = "input-box" > { selectedUser.email } < /div> <
                /div> <
                div className = "input-group" >
                <
                label > State: < /label><br/ >
                <
                div className = "input-box" > { selectedUser.state } < /div> <
                /div> <
                div className = "input-group" >
                <
                label > Referral Code: < /label><br/ >
                <
                div className = "input-box" > { selectedUser.referralCode } < /div> <
                /div> <
                /div> <
                /div> <
                button className = "save-button"
                onClick = { handleSaveChanges } >
                Save Changes <
                /button> <
                /div> <
                /div>
            )
        } <
        /div>
    );
};

export default AdminDashboard;