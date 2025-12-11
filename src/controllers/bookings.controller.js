import models from '../models/index.js';
import { generateConfirmationCode } from '../utils/generateCode.js';
const { Booking } = models;

export const getBookingByCode = async (req, res, next) => {
  try {
    const { code } = req.params;
    const booking = await Booking.findOne({
      where: { confirmation_code: code.toUpperCase() }
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: booking
    });
  } catch (error) {
    next(error);
  }
};

export const getBookingsByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const bookings = await Booking.findAll({
      where: { email: email.toLowerCase() },
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    next(error);
  }
};

export const createBooking = async (req, res, next) => {
  try {
    const { full_name, email, phone, number_of_tickets } = req.body;

    // Validation
    if (!full_name || !email || !phone || !number_of_tickets) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    if (number_of_tickets < 1 || number_of_tickets > 10) {
      return res.status(400).json({
        success: false,
        message: 'Number of tickets must be between 1 and 10'
      });
    }

    // Generate unique confirmation code
    let confirmation_code;
    let isUnique = false;
    
    while (!isUnique) {
      confirmation_code = generateConfirmationCode();
      const existing = await Booking.findOne({
        where: { confirmation_code }
      });
      if (!existing) isUnique = true;
    }

    const booking = await Booking.create({
      full_name,
      email: email.toLowerCase(),
      phone,
      number_of_tickets,
      confirmation_code,
      status: 'confirmed'
    });

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking
    });
  } catch (error) {
    next(error);
  }
};