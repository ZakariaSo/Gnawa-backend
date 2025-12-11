import models from '../models/index.js';
const { Artist } = models;

export const getAllArtists = async (req, res, next) => {
  try {
    const artists = await Artist.findAll({
      order: [['performance_time', 'ASC']]
    });

    res.json({
      success: true,
      count: artists.length,
      data: artists
    });
  } catch (error) {
    next(error);
  }
};

export const getArtistById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByPk(id);

    if (!artist) {
      return res.status(404).json({
        success: false,
        message: 'Artist not found'
      });
    }

    res.json({
      success: true,
      data: artist
    });
  } catch (error) {
    next(error);
  }
};

export const createArtist = async (req, res, next) => {
  try {
    const { name, bio, image_url, performance_time, instruments } = req.body;

    const artist = await Artist.create({
      name,
      bio,
      image_url,
      performance_time,
      instruments
    });

    res.status(201).json({
      success: true,
      message: 'Artist created successfully',
      data: artist
    });
  } catch (error) {
    next(error);
  }
};

export const updateArtist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, bio, image_url, performance_time, instruments } = req.body;

    const artist = await Artist.findByPk(id);

    if (!artist) {
      return res.status(404).json({
        success: false,
        message: 'Artist not found'
      });
    }

    await artist.update({
      name,
      bio,
      image_url,
      performance_time,
      instruments
    });

    res.json({
      success: true,
      message: 'Artist updated successfully',
      data: artist
    });
  } catch (error) {
    next(error);
  }
};

export const deleteArtist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByPk(id);

    if (!artist) {
      return res.status(404).json({
        success: false,
        message: 'Artist not found'
      });
    }

    await artist.destroy();

    res.json({
      success: true,
      message: 'Artist deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};