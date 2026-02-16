const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/tint2umobile', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// API Endpoints
app.post('/api/book', (req, res) => {
    // Logic for booking
    res.send('Booking created');
});

app.get('/api/bookings', (req, res) => {
    // Logic to get all bookings
    res.send('List of bookings');
});

app.get('/api/booking/:id', (req, res) => {
    // Logic to get a specific booking by ID
    res.send('Details of booking');
});

// Email Notification Function
const sendEmailNotification = (bookingDetails) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: bookingDetails.email,
        subject: 'Booking Confirmation',
        text: `Your booking is confirmed with details: ${JSON.stringify(bookingDetails)}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
};

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
