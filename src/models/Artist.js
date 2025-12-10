import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Artist = sequelize.define('artists', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    performance_time: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'e.g., "20:00 - 21:30"'
    },
    instruments: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Comma separated: "Guembri, Krakebs, Tbel"'
    }
  });

  return Artist;
};