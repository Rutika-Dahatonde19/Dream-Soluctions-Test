const pool = require('../config/dbconfig');

const getAllMedia = async () => {
  const query = 'SELECT * FROM media'; // Update table name to 'media'
  const result = await pool.query(query);
  return result.rows;
};

const getMediaById = async (mediaId) => {
  const query = 'SELECT * FROM media WHERE media_id = $1'; // Update column name to 'media_id'
  const result = await pool.query(query, [mediaId]);
  return result.rows[0];
};

const addMedia = async (mediaData) => {
  const { users_id, post_id, mediaUrl } = mediaData; // Update column name to 'mediaUrl'
  const query = 'INSERT INTO media (users_id, post_id, media_url) VALUES ($1, $2, $3) RETURNING *'; // Update column name to 'media_url'
  const result = await pool.query(query, [users_id, post_id, mediaUrl]);
  return result.rows[0];
};

const updateMedia = async (mediaId, updatedMediaData) => {
  const { users_id, post_id, mediaUrl } = updatedMediaData; // Update column name to 'mediaUrl'
  const query = 'UPDATE media SET users_id = $1, post_id = $2, media_url = $3 WHERE media_id = $4 RETURNING *'; // Update column names to 'media_id' and 'media_url'
  const result = await pool.query(query, [users_id, post_id, mediaUrl, mediaId]);
  return result.rows[0];
};

const deleteMedia = async (mediaId) => {
  const query = 'DELETE FROM media WHERE media_id = $1 RETURNING *'; // Update column name to 'media_id'
  const result = await pool.query(query, [mediaId]);
  return result.rows[0];
};

module.exports = {
  getAllMedia,
  getMediaById,
  addMedia,
  updateMedia,
  deleteMedia,
};
