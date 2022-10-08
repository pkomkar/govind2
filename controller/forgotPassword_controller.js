const user = require("../model/user_model")
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

exports.emailSendforUser = async(req,res)=>{
  let data = await user.findOne({Email:req.body.Email});
  console.log(req.body.Email);
  const responseType = {};
  if(data){
      let otpcode = Math.floor((Math.random()*10000)+1);
      var  transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user:"icaet20@nmiet.edu.in",
          pass:"Bonybaba125@",
        },
      });
    var mailOption = {
        from:"icaet20@nmiet.edu.in",
        to :req.body.Email ,
        subject :"forgot Password",
        text:`forgot Password using ${otpcode}`
    }
        transporter.sendMail(mailOption, error => {
            error
            ? console.log(`EMAIL NOT SEND ${error}`)
            : console.log("EMAIL SEND");
          
        });
    
      console.log(otpcode);
      responseType.statusText ='Success'
      responseType.message = `Please check Your Email Id ${otpcode}`;

  }
  else{
      responseType.statusText ='error'
      responseType.message = 'Email Id not Exit'; 
  }
 res.json(responseType)
 
}
exports.changePasswordforUser  = async(req,res)=>{
  let  data = await user.find({Email:req.body.Email,otp:req.body.otp});
  const responseType = {};
  if(data){
      let currentTime =new Date().getTime();
let diff = data.expireIn - currentTime;
if(diff <0){
   responseType.message= 'error'
   responseType.statusText ='Please Resend OTP'
}else{
 let emailexit = await user.findOne({Email:req.body.Email}) 
 const hash = await bcrypt.hashSync(req.body.Password,10)
 emailexit.Password = hash
 emailexit.save();
 responseType.message ='Your Password Changed Successfully' 
 responseType.statusText = 'Success'
}
   }
   else{
       responseType.message= 'Invalid Otp'
       responseType.statusText ='Please Resend OTP'

   }
   
   res.json(responseType)
   
}



