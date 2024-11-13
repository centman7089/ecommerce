import multer from "multer";

const storage = multer.diskStorage( {
    filename: function ( req, file, callback )
    {
        callback(null,file.originalname)
    },
    destination:"uploads"
} )

const upload = multer( { storage } )

export default upload