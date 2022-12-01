const uploadFromBuffer = require("../util/files/uploadFiles");

const updatePhotoProfile = async (req, res) => {
  console.log(req.file);
  const result = await uploadFromBuffer(req.file);

  if (result) {
    console.log(result);
  }
};

module.exports = updatePhotoProfile;
