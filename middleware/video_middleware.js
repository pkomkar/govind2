const multer = require("multer")
const path = require("path");
const storage = multer.diskStorage({
    destination : function (req , Video, cb){
        cb(null , "uploads/Video")
    },
    filename : function(req , Video, cb){
        // const ext = path.extname(file.originalname)
        console.log(Video);
        const fn = "video-" + Date.now() +  path.extname(Video.originalname);
        req.body.Video = "uploads/" + fn;
        cb(null , fn );
    }
})
const upload = multer({storage : storage})
module.exports = upload