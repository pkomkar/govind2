const express = require("express")
const{CreateUserDetails,getAllUser,deleteUserDetails,updateUserDetails,getSingleUserDetails}=require("../controller/user_controller")
const{CreateCourseCategoryDetails,getAllCourseCategory,deleteCourseCategoryDetails,updateCourseCategoryDetails,getSingleCourseCategoryDetails}=require("../controller/Course_Category_controller")
const{CreateCourseSubCategoryDetails,getAllCourseSubCategory,deleteCourseSubCategoryDetails,updateCourseSubCategoryDetails,getSingleCourseSubCategoryDetails}=require("../controller/Course_SubCategory_controller")
const{CreateCourseDetails,InprogressApi,DoneCourseApi,getCategorybylowestCoursePrice,getAllCourseDetails,deleteCourseDetails,getCourseDetailsByCategoryName,updateCourseDetails,getSingleCourseDetails,getCourseDetailsByCourseName}=require("../controller/Course_controller")
const{CreatelessionDetails,getAlllessionDetails,deletelessionDetails,updatelessionDetails,getSinglelessionDetails,getAlllessionDetailsbyCourse}=require("../controller/lession_controller")
const{CreateBannerDetails,getAllBannerDetails,getAllBannerImageDetails,deleteBannerDetails,updateBannerDetails,getSingleBannerDetails}=require("../controller/Banner_controller")
const{CreateEnrollmentDetails,getAllEnrollmentDetails,deleteEnrollmentDetails,getAllEnrollmentbyQuizAndUserId,updateEnrollmentDetails,getSingleEnrollmentDetails}=require("../controller/Enrollment_controller")
const{CreateaddtoCartDetails,getAllCart,deleteCartDetails,updateCartDetails}=require("../controller/addtocart_controller")
const{CreatereviewDetails,deleteReviewDetails,getAllReview,getReviewbyCourse}=require("../controller/review_controller")
const{getAllrating}=require("../controller/rating_controller")
const{AddQuizDetails,getAllQuiz,deleteQuizDetails,updateQuizDetails,getSingleQuizDetails,getQuizDetailsbyCourseId}=require("../controller/Quiz_controller")
const{CreateQuizQuestionDetails,getAllQuizQuestion,deleteQuizQuestionDetails,updateQuizQuestionrDetails,getSingleQuizQuestionDetails}=require("../controller/QuizQuestion_controller")
const{CreateScoreDetails,getAllscore,getAllscorebyQuiz,getAllscorebyQuizAndUserId}=require("../controller/Score_controller")
const{CreatebillingDetails,getAllbilling,deletebillingDetails}=require("../controller/billing_controller")
const{getAllState}=require("../controller/state_controller")
const{Userlogin}=require("../controller/userLogin_controller")
const{resetPasswordforAdmin}=require("../controller/adminresetPassword_controller")
const{getStatebyCountry}=require("../controller/Country_controller")
const{CreateOrderDetails,getorderbyCourse}=require("../controller/order_controller")
const{changePasswordforUser,emailSendforUser}=require("../controller/forgotPassword_controller")
const Adminlogin = require("../controller/adminLogin_controller")
// const {getUser} = require("../controller/firebaseUser_controller")
const {getUser,deletebannerfile,deleteCoursefile,deletelessonfile} = require("../controller/firebaseUser_controller")
const uploads = require("../middleware/upload_middleware")
const {createlessoniscomplated,getAlllessoniscomplated,getAlllessoncomplated,getAlllessoninprogress} = require("../controller/lessoniscomplaed")
const router = express.Router()

// *****************************  User API START **********************/

router.route("/user/CreateUserDetails").post(CreateUserDetails)
router.route("/user/Userlogin").post(Userlogin)
router.route("/user/getAllUser").get(getAllUser)
router.route("/user/deleteUserDetails/:UserId").delete(deleteUserDetails)
router.route("/user/updateUserDetails").put(updateUserDetails)
router.route("/user/getSingleUserDetails/:UserId").get(getSingleUserDetails)
router.route("/user/emailSendforUser").post(emailSendforUser)
router.route("/user/changePasswordforUser").post(changePasswordforUser)

// *****************************  User API END **********************/

// *****************************  Category API START **********************/

router.route("/Category/CreateCourseCategoryDetails").post(CreateCourseCategoryDetails)
router.route("/Category/getAllCourseCategory").get(getAllCourseCategory)
router.route("/Category/deleteCourseCategoryDetails/:CategoryId").delete(deleteCourseCategoryDetails)
router.route("/Category/updateCourseCategoryDetails").put(updateCourseCategoryDetails)
router.route("/Category/getSingleCourseCategoryDetails/:CategoryId").get(getSingleCourseCategoryDetails)

// *****************************  Category API END **********************/


// *****************************  SubCategory API START **********************/

router.route("/SubCategory/CreateCourseSubCategoryDetails").post(CreateCourseSubCategoryDetails)
router.route("/SubCategory/getAllCourseSubCategory").get(getAllCourseSubCategory)
router.route("/SubCategory/deleteCourseSubCategoryDetails/:SubCategoryId").delete(deleteCourseSubCategoryDetails)
router.route("/SubCategory/updateCourseSubCategoryDetails").put(updateCourseSubCategoryDetails)
router.route("/SubCategory/getSingleCourseSubCategoryDetails/:SubCategoryId").get(getSingleCourseSubCategoryDetails)

// *****************************  SubCategory API END **********************/ 

// *****************************  Course API START **********************/

router.route("/Course/CreateCourseDetails").post(CreateCourseDetails)
router.route("/Course/getAllCourseDetails").get(getAllCourseDetails)
router.route("/Course/deleteCourseDetails/:CourseId").delete(deleteCourseDetails)
router.route("/Course/updateCourseDetails").put(updateCourseDetails)
router.route("/Course/getSingleCourseDetails").post(getSingleCourseDetails)
router.route("/Course/getCourseDetailsByCourseName").post(getCourseDetailsByCourseName)
router.route("/Course/getCourseDetailsByCategoryName").post(getCourseDetailsByCategoryName)
router.route("/Course/InprogressApi").get(InprogressApi)
router.route("/Course/DoneCourseApi").get(DoneCourseApi)
router.route("/Course/getCategorybylowestCoursePrice").post(getCategorybylowestCoursePrice)

// *****************************  Course API END **********************/

// *****************************  lession API START **********************/

router.route("/lession/CreatelessionDetails").post(CreatelessionDetails)
router.route("/lession/getAlllessionDetails").get(getAlllessionDetails)
router.route("/lession/deletelessionDetails/:lessionId").delete(deletelessionDetails)
router.route("/lession/updatelessionDetails").put(updatelessionDetails)
router.route("/lession/getSinglelessionDetails/:lessionId").get(getSinglelessionDetails)

// *****************************  lession API END **********************/
router.route("/lession/getAlllessoncomplated").get(getAlllessoncomplated)
router.route("/lession/getAlllessoninprogress").get(getAlllessoninprogress)
router.route("/createlessoniscomplated").post(createlessoniscomplated)
router.route("/getAlllessoniscomplated").get(getAlllessoniscomplated)

// *****************************  Banner API START **********************/

router.route("/banner/CreateBannerDetails").post(CreateBannerDetails)
router.route("/banner/getAllBannerDetails").get(getAllBannerDetails)
router.route("/banner/getAllBannerImageDetails").get(getAllBannerImageDetails)
router.route("/banner/deleteBannerDetails/:BannerId").delete(deleteBannerDetails)
router.route("/banner/updateBannerDetails").put(updateBannerDetails)
router.route("/banner/getSingleBannerDetails/:BannerId").get(getSingleBannerDetails)

// *****************************  Banner API END **********************/

// *****************************  Enrollment API START **********************/

router.route("/Enrollment/CreateEnrollmentDetails").post(CreateEnrollmentDetails)
router.route("/Enrollment/getAllEnrollmentDetails").get(getAllEnrollmentDetails)
router.route("/Enrollment/deleteEnrollmentDetails/:EnrollmentId").delete(deleteEnrollmentDetails)
router.route("/Enrollment/updateEnrollmentDetails").put(updateEnrollmentDetails)
router.route("/Enrollment/getSingleEnrollmentDetails/:EnrollmentId").get(getSingleEnrollmentDetails)
router.route("/Enrollment/getAllEnrollmentbyQuizAndUserId").post(getAllEnrollmentbyQuizAndUserId)

// *****************************  Enrollment API END **********************/
// *****************************  Enrollment API START **********************/

router.route("/addtocart/CreateaddtoCartDetails").post(CreateaddtoCartDetails)
router.route("/addtocart/getAllCart").get(getAllCart)
router.route("/addtocart/deleteCartDetails/:CartId").delete(deleteCartDetails)
router.route("/addtocart/updateCartDetails").put(updateCartDetails)

// *****************************  Enrollment API END **********************/

// *****************************  Review API START **********************/

router.route("/Review/CreatereviewDetails").post(CreatereviewDetails)
router.route("/Review/getAllReview").get(getAllReview)
router.route("/Review/getReviewbyCourse").post(getReviewbyCourse)
router.route("/Review/deleteReviewDetails/:ReviewId").delete(deleteReviewDetails)


// *****************************  Review API END **********************/

 // *****************************  Rating API START **********************/
router.route("/Rating/getAllrating").get(getAllrating)
// *****************************  Rating API END **********************/

// *****************************  Quiz API START **********************/

router.route("/Quiz/AddQuizDetails").post(AddQuizDetails)
router.route("/Quiz/getAllQuiz").get(getAllQuiz)
router.route("/Quiz/deleteQuizDetails/:QuizId").delete(deleteQuizDetails)
router.route("/Quiz/updateQuizDetails").put(updateQuizDetails)
router.route("/Quiz/getQuizDetailsbyCourseId").post(getQuizDetailsbyCourseId)
router.route("/Quiz/getSingleQuizDetails").post(getSingleQuizDetails)


// *****************************  Quiz API END **********************/

// *****************************  QuizQuestion API START **********************/

router.route("/QuizQuestion/CreateQuizQuestionDetails").post(CreateQuizQuestionDetails)
router.route("/QuizQuestion/getAllQuizQuestionbyQuizId").post(getAllQuizQuestion)
router.route("/QuizQuestion/deleteQuizQuestionDetails/:QuizQuestionId").delete(deleteQuizQuestionDetails)
router.route("/QuizQuestion/updateQuizQuestionrDetails").put(updateQuizQuestionrDetails)
router.route("/QuizQuestion/getSingleQuizQuestionDetails/:QuizQuestionId").get(getSingleQuizQuestionDetails)
// *****************************  QuizQuestion API END **********************/

// *****************************  Score API Start **********************/
router.route("/Score/CreateScoreDetails").post(CreateScoreDetails)
router.route("/Score/getAllscore").get(getAllscore)
router.route("/Score/getAllscorebyQuizId").post(getAllscorebyQuiz)
router.route("/Score/getAllscorebyQuizAndUserId").post(getAllscorebyQuizAndUserId)
// *****************************  Score API End **********************/
 
// *****************************  Billing API Start **********************/
router.route("/Billing/CreatebillingDetails").post(CreatebillingDetails)
router.route("/Billing/getAllbilling").get(getAllbilling)
router.route("/Billing/deletebillingDetails/:BillinId").delete(deletebillingDetails)
// *****************************  Billing API End **********************/

// *****************************  State API Start **********************/
router.route("/State/getAllState").get(getAllState)
// *****************************  State API End **********************/
router.route("/lesson/getAlllessionDetailsbyCourse").post(getAlllessionDetailsbyCourse)

// *****************************  Country API Start **********************/
router.route("/Country/getStatebyCountry").get(getStatebyCountry)
// *****************************  Country API End **********************/

// *****************************  Order API Start **********************/
router.route("/Order/CreateOrderDetails").post(CreateOrderDetails)
router.route("/Order/getAllorder").post(getorderbyCourse)
// *****************************  Order API End **********************/

//*****************************  Admin API Start **********************/
router.route("/admin/Adminlogin").post(Adminlogin)
router.route("/admin/resetPasswordforAdmin").post(resetPasswordforAdmin)
// *****************************  Admin API End **********************/
router.route("/getUser").get(getUser)
router.route("/deletebannerfile/:BannerImageId").delete(deletebannerfile)
router.route("/deleteCoursefile/:CourseImageId").delete(deleteCoursefile)
router.route("/deletelessonfile/:lessonImageId").delete(deletelessonfile)
module.exports = router 