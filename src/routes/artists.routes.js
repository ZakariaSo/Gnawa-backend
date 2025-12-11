import express from 'express';
import {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist
} from '../controllers/artists.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllArtists);
router.get('/:id', getArtistById);

// Protected routes (admin only)
router.post('/', protect, createArtist);
router.put('/:id', protect, updateArtist);
router.delete('/:id', protect, deleteArtist);

export default router;