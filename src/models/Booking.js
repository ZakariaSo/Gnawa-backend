import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Booking = sequelize.define('bookings', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^(\+212|0)[5-7]\d{8}$/i // Moroccan phone format
      }
    },
    number_of_tickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10
      }
    },
    confirmation_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
      defaultValue: 'confirmed'
    }
  });

  return Booking;
};