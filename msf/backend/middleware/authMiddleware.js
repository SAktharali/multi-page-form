const jwt = require("jsonwebtoken");

module.exports = async(req,res,next) =>{
    try{
const token = req.headers['authorization'].split(" ")[1];

jwt.verify(token,process.env.JWT_SECRET_KEY,(error,decoded)=>{
    if(error){
        return res.status(401).send({
            success:false,
            message:"invalid token"
        });
    }
    else{
        req.body.id = decoded.id;
        next();
    }
})

}

catch(error){
    return res.status(500).send({
        success:false,
        message:"authorization failed"
    });
}
}

// module.exports = async(req,res,next) =>{
//     try{
// const token = req.cookies.token;
// if(!token){
//     return res.status(404).send({
//         success:false,
//         message:"token is unavailable"
//     });
// }
// else{
// jwt.verify(token,process.env.JWT_SECRET_KEY,(error,decoded)=>{
//     if(error){
//         return res.status(404).send({
//             success:false,
//             message:"token is unavailable"
//         });
//     }
//     else{
//         req.body.id = decoded.id;
//         next();
//     }
// })
// }
// }
// catch(error){
//     return res.status(404).send({
//         success:false,
//         message:"authorization failed"
//     });
// }
// }