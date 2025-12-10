import sequelize from '../config/database.js';
import Artist from './Artist.js';
import Booking from './Booking.js';
import EventInfo from './EventInfo.js';
import Admin from './Admin.js';

// Initialize models
const models = {
  Artist: Artist(sequelize),    
  Booking: Booking(sequelize),
  EventInfo: EventInfo(sequelize),
  Admin: Admin(sequelize)
};

export { sequelize };
export const { Artist: ArtistModel, Booking: BookingModel, EventInfo: EventInfoModel, Admin: AdminModel } = models;
export default models;