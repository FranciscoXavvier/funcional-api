import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/storage/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + file.originalname);
    }
  })
  
  const uploadImage = multer({ storage : storage })

  export default uploadImage ;