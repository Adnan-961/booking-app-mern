import jwt from "jsonwebtoken"
import {createError} from "../utils/error.js"


export const verifyToken = (req,res,next)=>{
console.log(req.cookies)

const token = req.cookies.access_token;
if(!token){
    return next(createError(401,"not authed!"))
}
jwt.verify(token,"SecretPassword123",(err,user )=>{
    if(err)
    return next(createError(403,"invalid token"))
    req.user = user;
    next()
})
}



export const verifyUser = (req,res,next)=>{

    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.id ===req.user.isAdmin){
            next()
        }
        else{
             if(err)
             return next(createError(403,"invalid token"))
 
        }
    })

}

export const verifyAdmin = (req,res,next)=>{

    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
             if(err)
             return next(createError(403,"invalid token"))
 
        }
    })

}