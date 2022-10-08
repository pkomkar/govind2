const lessoniscomplated = require('../model/lessoniscomplated')
exports.createlessoniscomplated = async(req,res)=>{
  try {
    const result = await lessoniscomplated.create(req.body) 
    res.json({
        status:"Success",
        message:"lesson is complated",
        data:result
    })
}
catch (error) {
    res.json({
        status:false,
        message:"Something went worng",
        data:null
    }) 
}
  } 
  exports.getAlllessoniscomplated = async(req,res)=>{
    try {
      const result = await lessoniscomplated.aggregate([
        {
          $lookup:{
            from:"courses",
            localField:"CourseId",
            foreignField:"CourseId",
            as:"Course"
        },
        }
      ])
      res.json({
        count:result.length,
          status:"Success",
          message:"get All lesson Completed",
          data:result
      })
  }
  catch (error) {
      res.json({
          status:false,
          message:"Something went worng",
          data:null
      }) 
  }
    } 
    exports.getAlllessoncomplated = async(req,res)=>{
      try {
        const result = await lessoniscomplated.aggregate([
          {
            $lookup:{
              from:"courses",
              localField:"CourseId",
              foreignField:"CourseId",
              as:"Course"
          },

          },
          {
            $match:{Iscomplated:true}
          }
        ])
        res.json({
          count:result.length,
            status:"Success",
            message:"get All lesson Completed",
            data:result
        })
    }
    catch (error) {
        res.json({
            status:false,
            message:"Something went worng",
            data:null
        }) 
    }
      } 
      exports.getAlllessoninprogress = async(req,res)=>{
        try {
          const result = await lessoniscomplated.aggregate([
            {
              $lookup:{
                from:"courses",
                localField:"CourseId",
                foreignField:"CourseId",
                as:"Course"
            },
  
            },
            {
              $match:{Iscomplated:false}
            }
          ])
          res.json({
            count:result.length,
              status:"Success",
              message:"get Course  in progress",
              data:result
          })
      }
      catch (error) {
          res.json({
              status:false,
              message:"Something went worng",
              data:null
          }) 
      }
        } 