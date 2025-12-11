import express from 'express';
import {
  getBookingByCode,
  getBookingsByEmail,
  createBooking
} from '../controllers/bookings.controller.js';

const router = express.Router();

router.get('/:code', getBookingByCode);
router.get('/email/:email', getBookingsByEmail);
router.post('/', createBooking);

export default router;