const mediaModel = require('../models/media'); // Update the model import

const addMedia = async (users_id, post_id, mediaUrl) => { // Update the function name and parameters
  return mediaModel.addMedia(users_id, post_id, mediaUrl); // Update the function call
};

module.exports = {
  addMedia,
};
