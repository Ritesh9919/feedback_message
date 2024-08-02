
import mongoose,{Schema, Document} from "mongoose";

export interface Message extends Document{
    content:string,
    createdAt:Date
}


const messageSchema:Schema<Message> = new Schema({
  content:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    required:true,
    default:Date.now()
  }
})




export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isAcceptingMessage:Boolean,
    isVerified:Boolean
    messages:Message[]
}


const userSchema = new Schema({
    username:{
        type:String,
        required:[true, 'username is required'],
        trim:true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/i, 'please use a valid email']
    },
    password:{
        type:String,
        required:true
    },
    verifyCode:{
        type:String,
        required:true
    },
    verifyCodeExpiry:{
        type:Date,
        required:true
    },
    isAcceptingMessage:{
        type:Boolean,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    messages:{
        type:[messageSchema]
    }
})


const User = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema);

export default User;

