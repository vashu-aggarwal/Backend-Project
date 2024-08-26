// const asyncHandler=(fn)=>async(res,req,next)=>{
//        try {
//           await fn(req,res,next);
//        } catch (error) {
//            res.status(err.code || 500).json({
//              success:false,
//              message:error.message
//            })
//        }
// }

const asyncHandler=(requestHandler)=>{
    (res,req,next)=>{
         Promise.resolve(requestHandler(res,req,next))
         .catch((err)=>next(err))
    }
}

export {asyncHandler}