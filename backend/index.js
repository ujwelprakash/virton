const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { EmployeeModel, EstimateModel } = require('./models/employeee');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection


// User Login (For both Admin and Regular Users)
app.post('/Login', (req, res) => {
    const { email, password } = req.body;

    EmployeeModel.findOne({ email })
        .then(user => {
            console.log(user); // Log user for debugging
            if (user) {
                // Check if the password matches
                if (user.password === password) {
                    if (user.role === 'admin') {
                        // If the user is an admin, return 'admin' role
                        res.json({ message: 'Admin login successful', role: 'admin' });
                    } else {
                        // If the user is a regular user, return 'user' role
                        res.json({ message: 'User login successful', role: 'user' });
                    }
                } else {
                    // If password is incorrect
                    res.status(400).json({ message: 'Password is incorrect' });
                }
            } else {
                // If no user is found with the given email
                res.status(404).json({ message: 'No user found with this email' });
            }
        })
        .catch(err => {
            console.error('Error logging in:', err); // Detailed error logged to the console
            res.status(500).json({ message: 'Internal server error', error: err }); // Detailed error sent to the client
        });
});

// User Registration (For both Admin and Regular Users)
app.post('/Register', (req, res) => {
    const {
        firstName,
        lastName,
        contactNumber,
        whatsappNumber,
        username,
        email,
        state,
        referralCode,
        password,
        role = 'user'
    } = req.body;

    // Ensure all required fields are present
    if (!firstName || !lastName || !email || !password || !username) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    EmployeeModel.create({
            firstName,
            lastName,
            contactNumber,
            whatsappNumber,
            username,
            email,
            state,
            referralCode,
            password,
            role
        })
        .then(employee => res.json(employee))
        .catch(err => res.status(500).json({ message: 'Error registering user', error: err }));
});


// Admin Dashboard: View All Registered Users
app.get('/Dashboard', async(req, res) => {
    try {
        const users = await EmployeeModel.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});

// Admin Dashboard: View All Estimates
app.get('/Dashboard/estimates', async(req, res) => {
    try {
        const estimates = await EstimateModel.find({});
        res.json(estimates);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching estimates', error: err });
    }
});

// Delete Estimate (Admin only)
app.delete('/delete/:id', async(req, res) => {
    const { id } = req.params;
    try {
        await EstimateModel.findByIdAndDelete(id);
        res.status(200).send('Estimate deleted');
    } catch (error) {
        res.status(500).send('Error deleting estimate');
    }
});

// Start the server
app.listen(3003, () => {
    console.log("Server running on port 3003");
});