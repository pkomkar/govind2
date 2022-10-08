const firebase = require("firebase-admin")
const banner = require("../model/banner_image_model")
const cours =require("../model/Course_Image_model")
const lession =require("../model/lesson_image_model")

const fire = require("../englishguruapp-a35c4-firebase-adminsdk-m7yxq-05f3bad452.json")
const firebaseConfig = {
    credential: firebase.credential.cert(fire),
  };
   const app = firebase. initializeApp(firebaseConfig)
exports.getUser = async (req,res)=>{
 const Users = await firebase.auth().listUsers()
//  console.log(`user:${JSON.stringify(Users)}`);
 res.json({
    count:Users.length,
    success:true,
    message:"get All User",
    data:Users
})
}
const path = require("path");
const fs = require("fs");
const {v4 : UUID} = require('uuid');
const { request } = require("http");
const { json } = require("express")
let uuid = UUID();
require('@google-cloud/storage');
const storage = firebase.storage(app);
const uploadFilebaner = async(filePath, fileName,req,res)=> {
  try {
    const bucket = storage.bucket('englishguruapp-a35c4.appspot.com');
   await bucket.upload(filePath, {
        destination: fileName,
        metadata:{
          metadata:{
            firebaseStorageDownloadTokens: uuid,
                
          }
        }
      });
      const data =  await banner.create({
        BannerImageId:Math.floor((Math.random()*100000)+1),
        BannerId:req.body.BannerId,
        file:`https://firebasestorage.googleapis.com/v0/b/englishguruapp-a35c4.appspot.com/o/${encodeURIComponent(fileName)}?alt=media&token=${uuid}`,
      })
  } catch (e) {
    console.error("Error occurred while uploading file", e);
  }
}
const uploadFileCourse = async(filePath, fileName,req,res)=> {
  console.log(filePath);
  try {
    // Uploading file here
    const bucket = storage.bucket('englishguruapp-a35c4.appspot.com');
   await bucket.upload(filePath, {
      destination: fileName,
      metadata:{
        metadata:{
          firebaseStorageDownloadTokens: uuid,
              
        }
      }
    });

    //Get Download Url of file
    // const mainDownloadUrl = `https://firebasestorage.googleapis.com/v0/b/englishguruapp-a35c4.appspot.com/o/${encodeURIComponent(fileName)}?alt=media&token=${uuid}`;

    
    // Now After this uplod this link in the mongo db

const Course =  await cours.create({
  CourseImageId:Math.floor((Math.random()*100000)+1),
  CourseId:req.body.CourseId,
  file:`https://firebasestorage.googleapis.com/v0/b/englishguruapp-a35c4.appspot.com/o/${encodeURIComponent(fileName)}?alt=media&token=${uuid}`,
 
})
    // console.log(`main download Url is: ${mainDownloadUrl}`);
   
  } catch (e) {
    console.error("Error occurred while uploading file", e);
  }
}
const uploadFilelesson = async(filePath, fileName,req,res) =>{
  console.log(filePath);
  try {
    // Uploading file here
    const bucket = storage.bucket('englishguruapp-a35c4.appspot.com');
   await bucket.upload(filePath, {
      destination: fileName,
      metadata:{
        metadata:{
          firebaseStorageDownloadTokens: uuid,
            
        }
      }
    });

    //Get Download Url of file
    // const mainDownloadUrl = `https://firebasestorage.googleapis.com/v0/b/englishguruapp-a35c4.appspot.com/o/${encodeURIComponent(fileName)}?alt=media&token=${uuid}`;

    
    // Now After this uplod this link in the mongo db
const lesson =  await lession.create({
  lessonImageId:Math.floor((Math.random()*100000)+1),
  lessionId:req.body.lessionId,
  file:`https://firebasestorage.googleapis.com/v0/b/englishguruapp-a35c4.appspot.com/o/${encodeURIComponent(fileName)}?alt=media&token=${uuid}`,
})
const videoSize = fs.statSync(file).size
console.log(videoSize);
    // console.log(`main download Url is: ${mainDownloadUrl}`);
  
    

  } catch (e) {
    console.error("Error occurred while uploading file", e);
  }
}
exports.addImagebanner = async (req, res,fileName) => {
  try {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, '..', "./uploads/image.png");
    // Saving image temporarily on backend
    // console.log("this is file", req, req.file)
      fs.open(targetPath, (err, fd) => {
        fs.writeFile(targetPath, req.file.buffer, err => {
          if (err) {
            console.log(err);
            return;
          }

          //uploading image to firebase
          let targetFileName = 'images11/' + req.file.originalname;
          // console.log(file);
        //  res.send(targetFileName)
         uploadFilebaner(targetPath, targetFileName,req).then(() => {
            console.log("uploaded");
            res
            .status(200)
            .contentType("text/plain")
            .end("file Send Successfully")
          }).catch(err => {
            console.log(err);
            res
            .status(200)
            .contentType("text/plain")
            .end(`${err}`);
          })
           
        });

      });



  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
}
exports.addCoureseImage = async (req, res,fileName) => {
  try {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, '..', "./uploads/image.png");
    // Saving image temporarily on backend
    // console.log("this is file", req, req.file)
      fs.open(targetPath, (err, fd) => {
        fs.writeFile(targetPath, req.file.buffer, err => {
          if (err) {
            console.log(err);
            return;
          }

          //uploading image to firebase
          let targetFileName = 'images11/' + req.file.originalname;
          // console.log(file);
         console.log(targetFileName);
         uploadFileCourse(targetPath, targetFileName,req).then(() => {
            console.log("uploaded");
            res
            .status(200)
            .contentType("text/plain")
            .end("File uploaded")
          }).catch(err => {
            console.log(err);
            res
            .status(200)
            .contentType("text/plain")
            .end(`${err}`);
          })
           
        });

      });



  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
}
exports.addlessonImage = async (req, res,fileName) => {
  try {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, '..', "./uploads/image.png");
    // Saving image temporarily on backend
    // console.log("this is file", req, req.file)
      fs.open(targetPath, (err, fd) => {
        fs.writeFile(targetPath, req.file.buffer, err => {
          if (err) {
            console.log(err);
            return;
          }

          //uploading image to firebase
          let targetFileName = 'images11/' + req.file.originalname;
          // console.log(file);
         console.log(targetFileName);
         uploadFilelesson(targetPath, targetFileName,req).then(() => {
            console.log("uploaded");
            res
            .status(200)
            .contentType("text/plain")
            .end("File uploaded Successfully")
          }).catch(err => {
            console.log(err);
            res
            .status(200)
            .contentType("text/plain")
            .end(`${err}`);
          })
           
        });

      });



  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
}

exports.deletebannerfile = async(req,res)=>{
const result = await banner.findOneAndDelete({BannerImageId:req.params.BannerImageId})
result.delete().then(() => {
 res.end("file Delete Successfully")
}).catch(err => {
  console.log(`Failed to remove photo, error: ${err}`)
});
}
exports.deleteCoursefile = async(req,res)=>{
  const result = await cours.findOneAndDelete({CourseImageId:req.params.CourseImageId})
  result.delete().then(() => {
    console.log("Done")
    res.end("File Deleted Suceesfully")
  }).catch(err => {
    console.log(`Failed to remove photo, error: ${err}`)
  });
  }
  exports.deletelessonfile = async(req,res)=>{
    const result = await lession.findOneAndDelete({lessonImageId:req.params.lessonImageId})
    result.delete().then(() => {
      res.end("file delete successfully")
    
    }).catch(err => {
      console.log(`Failed to remove photo, error: ${err}`)
    });
    }
