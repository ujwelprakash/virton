import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // Login page
import AdminDashboard from './pages/AdminDashboard'; // Admin dashboard
import UserDashboard from './pages/UserDashboard'; // User dashboard
import Register from './pages/Register'; // Register page

function App() {
    return ( <
        Router >
        <
        div className = "App" >

        <
        Routes > { /* Route for Login Page */ } <
        Route path = "/Login"
        element = { < Login / > }
        />

        { /* Route for Register Page */ } <
        Route path = "/Register"
        element = { < Register / > }
        />

        { /* Route for Admin Dashboard */ } <
        Route path = "/AdminDashboard"
        element = { < AdminDashboard / > }
        />

        { /* Route for User Dashboard */ } <
        Route path = "/UserDashboard/:email"
        element = { < UserDashboard / > }
        />

        { /* Default route (Redirect or Not Found page can be added here) */ } <
        Route path = "/"
        element = { < Login / > }
        /> <
        /Routes> <
        /div> <
        /Router>
    );
}

export default App;