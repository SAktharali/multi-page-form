const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../modal/userModal");
const userModal = require("../modal/userModal");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashedPassword; 

    const newUser = await userModel.create(req.body);

   return res.status(201).send({
      success: true,
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    console.error(error.message); 
  return  res.status(500).send({
      success: false,
      message: "Internal server error",
      error:error.message
    }); 
  }
};
const loginController = async(req,res) => {
    try{
        const {email} =req.body;
        const user = await userModel.findOne({email});
        if(!user){
         return   res.send({
                success:false,
                message:'email or password mismatch'
            }); 
        }
        const verifyUser = await bcrypt.compare(req.body.password,user.password);
        const token = jwt.sign({id:user.id},process.env.JWT_SECRET_KEY,{
            expiresIn:"1d"
        });
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000, // 1 day
    // });
        if(!verifyUser){
          return  res.send({
            success:false,
            message:'email or password mismatch',
        });
        }
        else{
            return  res.status(200).send({
                  success:true,
                  message:'logged in successfully',
                  token
              });
        }
    }
    catch(error){
        return  res.status(500).send({
            success:false,
            message:'Internal server server'
        });
    }
}

const homeController = async (req, res) => {
  try {
    req.body.password = undefined;
    
    const users = await userModel.find({});

    if (users && users.length > 0) {
      return res.status(200).send({
        success: true,
        message: "Users fetched successfully",
        users, 
        });
    } else {
      return res.status(404).send({
        success: false,
        message: "No users found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};


module.exports = {
    registerController,
    loginController,
    homeController
}