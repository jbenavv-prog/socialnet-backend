const cloudinary = require("cloudinary");
let streamifier = require("streamifier");
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  secure: true,
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

let uploadFromBuffer = (file) => {
  console.log(file);
  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.v2.uploader.upload_stream(
      {
        folder: "photoProfiles",
      },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
  });
};

module.exports = uploadFromBuffer;
