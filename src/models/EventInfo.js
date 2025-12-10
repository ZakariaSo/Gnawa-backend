import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const EventInfo = sequelize.define('event_info', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'La Grande Soirée Gnawa'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'e.g., "19:00"'
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Agadir'
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Venue name'
    },
    ticket_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 150.00
    },
    total_capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 500
    },
    banner_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    }
  });

  return EventInfo;
};