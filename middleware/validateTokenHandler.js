const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authheader = req.headers.authorization;
    if(authheader && authheader.startsWith("Bearer")){
        token = authheader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                req.status(401);
                throw new Error("User is not Authorized");
            }
            req.user = decoded.user;
            next();
        });
    }
        else{
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
});

module.exports = validateToken;