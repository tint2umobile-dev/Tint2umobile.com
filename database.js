const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customer: {
        name: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    vehicle: {
        make: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    },
    appointment: {
        dateTime: {
            type: Date,
            required: true
        }
    },
    tintPackage: {
        type: String,
        enum: ['Standard', 'Premium', 'Ceramic'],
        required: true
    }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;