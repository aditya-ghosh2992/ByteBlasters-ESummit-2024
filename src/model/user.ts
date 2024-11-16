import mongoose , {Schema , Document} from "mongoose";

export interface Message extends Document{
    content : string,
    createdAt: Date,    
}

export interface User extends Document{
    username : string,
    email : string,
    password : string,
    verifyCode : string,
    verifyCodeDate : Date,
    isVerified : boolean,
    isAcceptMessage : boolean,
    messages : Message[]
}

const messageSchema : Schema<Message> = new Schema({ // it gives type safety as it makes sure the schema remains a custom schema of message we declared previously.
    content : {
        type : String, // mongoose string is "String" and TypeScript string is "string"
        required : true
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
})

const UserSchema : Schema<User> = new Schema({ // it gives type safety as it makes sure the schema remains a custom schema of message we declared previously.
   username : {
       type : String, // mongoose string is "String" and TypeScript string is "string"
       required : [true, "UserName is required"],
       trim : true,
       unique : true
   },
   email : {
    type : String , 
    required : [true, "Email is required"],
    unique : true,
    match : [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Please provide a valid email"]
   },
   password : {
       type : String,
       required : [true, "Password is required"],
       trim : true
   },
   verifyCode : {
        type : String,
        required : [true , "Verify Code is required"]
   },
   verifyCodeDate : {
        type : Date,
        required : [true , "Verify Code Date is required"]
   },
   isVerified : {      
       type : Boolean,
       default : false
    },
    isAcceptMessage : {
        type : Boolean,
        default : false
    },
    messages : [messageSchema] // As we already have our own custom message schema which works fine
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User" , UserSchema))

export default UserModel;