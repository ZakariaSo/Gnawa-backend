import models from '../models/index.js';
const { EventInfo } = models;

export const getEventInfo = async (req, res, next) => {
  try {
    const event = await EventInfo.findOne();
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event information not found'
      });
    }

    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    next(error);
  }
};