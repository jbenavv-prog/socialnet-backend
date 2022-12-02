const uploadFromBuffer = require("../util/files/uploadFiles");
const Profile = require("../models/profiles.model");

const updatePhotoProfile = async (req, res) => {
  console.log(req.file);
  try {
    const resultUploadPhoto = await uploadFromBuffer(req.file);

    if (!resultUploadPhoto) {
      return res.status(400).json({
        ok: false,
        message: "No se pudo obtener url de la photo",
      });
    }

    const photoUpdated = await Profile.findOneAndUpdate(
      { idAccount: req.user.id },
      {
        photoProfile: resultUploadPhoto.url,
      }
    );

    if (!photoUpdated) {
      await Profile.create({
        idAccount: req.user.id,
        photoProfile: resultUploadPhoto.url,
      });
    }

    res.status(200).json({
      ok: true,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ idAccount: req.user.id });

    if (!profile) {
      return res.status(404).json({
        ok: false,
        message: "Perfil no encontrado",
      });
    }

    res.status(200).json({
      ok: true,
      data: profile,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error,
    });
  }
};

module.exports = { updatePhotoProfile, getProfile };
