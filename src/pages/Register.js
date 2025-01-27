import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Register.css'; // Importing CSS for styling

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        whatsappNumber: '',
        username: '',
        email: '',
        state: '',
        referralCode: '',
        password: '',
        confirmPassword: ''
    });
    const [termsAccepted, setTermsAccepted] = useState(false); // State for Terms checkbox
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleRegister = async(e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('You must agree to the Terms and Conditions and Privacy Policy.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3003/Register', formData);
            if (response.data) {
                alert('Registration successful');
                navigate('/login');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            alert('Error registering');
        }
    };

    return ( <
        div className = "register-page" >
        <
        header className = "register-header" >
        <
        img src = "/images/logo.png"
        alt = "Logo"
        className = "header-logo" / >
        <
        div className = "header-buttons" >
        <
        button className = "login-box"
        onClick = {
            () => navigate('/login') } > Login < /button> <
        button className = "signup-box"
        onClick = {
            () => navigate('/Register') } > Sign Up < /button> <
        /div> <
        /header> <
        main className = "register-main" >
        <
        div className = "register-content" >
        <
        div className = "register-image" >
        <
        img src = "/images/REg.jpg"
        alt = "img" / >
        <
        /div> <
        div className = "register-form-container" >
        <
        h2 className = "sign-up" > Sign up < /h2> <
        p className = "txtone" > Fill in your credentials and click on the Sign up button < /p>

        <
        form onSubmit = { handleRegister }
        className = "register-form" > { /* Name Container */ } <
        div className = "name-container" >
        <
        div className = "first-name" >
        <
        label className = "input-label" > First Name < /label> <
        input type = "text"
        name = "firstName"
        value = { formData.firstName }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "last-name" >
        <
        label className = "input-label" > Last Name < /label> <
        input type = "text"
        name = "lastName"
        value = { formData.lastName }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        /div>

        { /* Other Input Fields */ } <
        div className = "input-container" >
        <
        label className = "input-label" > Contact Number < /label> <
        input type = "text"
        name = "contactNumber"
        value = { formData.contactNumber }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "input-container" >
        <
        label className = "input-label" > WhatsApp Number < /label> <
        input type = "text"
        name = "whatsappNumber"
        value = { formData.whatsappNumber }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "input-container" >
        <
        label className = "input-label" > Username < /label> <
        input type = "text"
        name = "username"
        value = { formData.username }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "input-container" >
        <
        label className = "input-label" > Email < /label> <
        input type = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "input-container" >
        <
        label className = "input-label" > State < /label> <
        input type = "text"
        name = "state"
        value = { formData.state }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "input-container" >
        <
        label className = "input-label" > Referral Code < /label> <
        input type = "text"
        name = "referralCode"
        value = { formData.referralCode }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "input-container" >
        <
        label className = "input-label" > Password < /label> <
        input type = "password"
        name = "password"
        value = { formData.password }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "input-container" >
        <
        label className = "input-label" > Confirm Password < /label> <
        input type = "password"
        name = "confirmPassword"
        value = { formData.confirmPassword }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "terms-container" >
        <
        input type = "checkbox"
        id = "terms"
        name = "terms"
        checked = { termsAccepted }
        onChange = {
            () => setTermsAccepted(!termsAccepted) }
        required /
        >
        <
        label htmlFor = "terms"
        className = "terms-label" >
        I agree to the < a href = "/terms"
        target = "_blank" > Terms and Conditions < /a> and <a href="/privacy
        " target="
        _blank ">Privacy Policy</a>. <
        /label> <
        /div>

        <
        div className = "button-container" > { /* Buttons in the same row */ } <
        div className = "buttons-row" >
        <
        button type = "submit"
        className = "submit-button" > Register < /button> <
        button type = "button"
        className = "login-button"
        onClick = {
            () => navigate('/login') } >
        Login <
        /button> <
        /div>

        { /* Terms and Conditions */ }

        <
        /div>


        { /* Buttons */ }

        <
        /form> <
        /div> <
        /div> <
        /main> <
        footer className = "register-footer" >
        <
        img src = "/images/logo.png"
        alt = "Company Logo"
        className = "footer-logo" /
        >
        <
        p className = "footer-description" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit. <
        /p> <
        div className = 'logoimportant' >

        <
        p className = 'imp' > Important Links < /p> <
        p className = 'contact' > contact us < /p> <
        p className = 'privacy' > privacy policy < /p> <
        p className = 'terms' > Terms & condition < /p> <
        p className = 'contact-support' > contact - support < /p> <
        div className = 'footer-facebook' >
        <
        img style = {
            { position: "relative", left: "170px" } }
        src = "/images/Group 588 (1).png"
        alt = "facebook"

        /
        >
        <
        img style = {
            { position: "relative", left: "210px", top: "-29px" } }
        src = "/images/Group 589.png"
        alt = "insta"

        /
        >
        <
        img style = {
            { position: "relative", left: "250px", top: "-59px" } }
        src = "/images/Group 590.png"
        alt = "indees"

        /
        >
        <
        img style = {
            { position: "relative", left: "290px", top: "-89px" } }
        src = "/images/Group 591.png"
        alt = "sweeter"

        /
        >
        <
        /div> <
        /div>

        <
        div className = 'whiteline' > < /div> <
        p style = {
            { position: "relative", top: "50px" } } > 2025 Your Company.All rights reserved. < /p> <
        /footer>

        <
        /div>
    );
}

export default Register;