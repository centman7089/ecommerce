// @ts-nocheck
import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import validator from "validator";


const createToken = ( id ) => {
   return jwt.sign({id},process.env.JWT_SECRET)
}

//route for user login
const loginUser = async( req, res ) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne( { email } )
        
        if (!user) {
            return res.json({success:false,message: "User doesn't exist"})
        }

        const isMatch = await bcrypt.compare( password, user.password )

        if (isMatch) {
            const token = createToken( user._id )
            return res.json({success:true,token})
        } else
        {
            return res.json({success:false,message: "Invalid credentials"}) 
        }
        

        
    } catch (error) {
        console.log( error );
         return res.json({success:false,message: error/message})
        
    }

}

//route for user login
const registerUser = async( req, res ) => {
    try
    {
        const { name, email, password } = req.body;
        //checking user already exist or not
        const exists = await userModel.findOne( { email } );
        if ( exists )
        {
            return res.json( { success: false, message: "User already exists with this email" } )
        }

        //validating email format & strong password
        if ( !validator.isEmail( email ) )
        {
            return res.json( { success: false, message: "Please enter a valid email" } )
        }
        if ( password.length < 8 )
        {
            return res.json( { success: false, message: "Please enter a strong password" } )
        }
        //hashing user password
        const salt = await bcrypt.genSalt( 10 )
        const hashedPassword = await bcrypt.hash( password, salt )
       
        const newUser = new userModel( {
            name, email, password: hashedPassword
        } )
       
        const user = await newUser.save()

        const token = createToken( user._id )
       
        return res.json( { success: true, token:token } )

    } catch ( error )
    {
        console.log( error );
        return res.json( { success: false, message: error.message} )
    
   }

}

//route for user login
const adminLogin = async( req, res ) => {
try {
    const { email, password } = req.body
    
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = await jwt.sign( email+password, process.env.JWT_SECRET );
        return res.json({success:true,token})
    } else
    {
        return res.json({success:false,message:"invalid credentials"})
    }
} catch (error) {
     console.log(error);
        
        return res.json({success:false,message:error.message})
}    

}
const logoutUser = async( req, res ) => {
    

}




export
{
    loginUser,
    registerUser,
    adminLogin,logoutUser
}