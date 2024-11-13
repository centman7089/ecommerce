// @ts-nocheck
import mongoose from "mongoose";

const userSchema = mongoose.Schema( {
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,default:{},
        
    },
}, { minimize:false,timestamps: true } )

const userModel = mongoose.models.user || mongoose.model( "user ", userSchema )


export default userModel