import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    username:{
        type:String,
        // required: [true, "Username is required"],
        // unique: [true, "Username already in"]
    },
    password:{
        type:String,
        // required: [true, "password is required"]
    }
})


export default mongoose.model.Admins|| mongoose.model('Admin',adminSchema);