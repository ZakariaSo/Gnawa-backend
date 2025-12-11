import express from 'express';
import { getEventInfo } from '../controllers/event.controller.js';

const router = express.Router();

router.get('/', getEventInfo);

export default router;