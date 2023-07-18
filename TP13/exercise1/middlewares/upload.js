const { required } = require('joi');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
      
    }
});

const upload = multer({ 
  storage: storage ,
  limits: {
    fieldSize: 1024 * 1024 * 2
  }
});

module.exports = upload;

 