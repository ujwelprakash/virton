import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3003/Login', { email, password });
            const data = response.data;

            if (data.role === 'admin') {
                navigate('/AdminDashboard');
            } else if (data.role === 'user') {
                navigate(`/UserDashboard/${email}`);
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Login error:', error.response.data.message || error.response.data || error.message);
                alert(`Error: ${error.response.data.message || 'An error occurred while logging in'}`);
            } else if (error.request) {
                // No response was received
                console.error('No response received:', error.request);
                alert('Network error: Unable to reach the server. Please try again later.');
            } else {
                // Something else went wrong
                console.error('Unexpected error:', error.message);
                alert('Unexpected error occurred. Please try again.');
            }
        }
        
    };

    return (
        <div className="page-container">
    <header className="register-header">
        <img src="/images/logo.png" alt="Logo" className="header-logo" />
        <div className="header-buttons">
            <button className="login-box" onClick={() => navigate('/login')}>Login</button>
            <button className="signup-box" onClick={() => navigate('/Register')}>Sign Up</button>
        </div>
    </header>

    <main className="center-container">
        <div className="image-section">
            <img src="/images/loginimg.jpg" alt="Showcase" className="image-content" />
        </div>
        <div className="login-section">
    <h1 style={{color:"white"}} className="log">Login</h1>
    <p style={{color:"white"}} className="fill">Fill in your credentials and click on the Login button</p>
    <form onSubmit={handleLogin}>
        <div className="input-container">
            <label className="input-label">Email</label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <div className="input-container">
            <label className="input-label">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <p style={{color:"white"}} className="forget">Forget password?</p>
        <div >
            <button type="submit" className="login-box">Login</button>
        </div>
        <p style={{ color: "white" }} className="dont">
    Don’t have an account? <Link to="/Register" style={{ color:"white", textDecoration: "none" }}>Sign Up</Link>
</p>
    </form>
</div>

    </main>

    <footer className="register-footer">
    <img
        src="/images/logo.png"
        alt="Company Logo"
        className="footer-logo"
    />
    <p className="footer-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
    </p>
    <div className='logoimportant'>

    <p className='imp'>Important Links</p>
    <p className='contact'> contact us</p>
    <p className='privacy'> privacy policy</p>
    <p className='terms'> Terms & condition</p>
    <p className='contact-support'> contact-support</p>
    <div className='footer-facebook'>
    <img style={{position:"relative", left:"170px"}}
        src="/images/Group 588 (1).png"
        alt="facebook"
        
    />
     <img style={{position:"relative", left:"210px",top:"-29px"}}
        src="/images/Group 589.png"
        alt="insta"
        
    />
     <img style={{position:"relative", left:"250px" ,top:"-59px"}}
        src="/images/Group 590.png"
        alt="indees"
        
    />
     <img style={{position:"relative", left:"290px" ,top:"-89px"}}
        src="/images/Group 591.png"
        alt="sweeter"
        
    />
    </div>
    </div>
    
<div className='whiteline'></div>
    <p style={{position:"relative", top:"50px"}}>2025 Your Company. All rights reserved.</p>
</footer>
</div>


    );
}

export default Login;


