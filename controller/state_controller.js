const state = require("../model/state_model")
// exports.getStatebyCountry = async(req,res)=>{
//     try {
//         const result = await state.find()
//         res.json({
//             count:result.length,
//             success:true,
//             message:"All State with their City",
//             data:result
//         })
//     } catch (error) {
//         res.json({
//             success:false,
//             message:"Something  went wrong",
//             data:null
//         })  
//     }
// }
exports.getAllState = async(req,res)=>{
    try {
        const result = await state.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All State",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
