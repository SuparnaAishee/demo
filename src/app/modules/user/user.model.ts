import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

export interface IUserModel extends IUser, mongoose.Document {}

const userSchema = new Schema <IUserModel>({

name:{type:String,required:true},
email:{type:String,required:true,unique:true},  
phone:{type:String,required:false},
password:{type:String,required:true},


});

export const User = mongoose.model<IUserModel>('User',userSchema)