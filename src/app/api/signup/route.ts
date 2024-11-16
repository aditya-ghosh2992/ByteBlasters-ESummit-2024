import dbConnect from "@/lib/dbConnect"
import UserModel from "@/model/user";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST (req : Request){
    await dbConnect();
    try {
        const {username, email, password} = await req.json();
        const existingUserVerifiedByUserName = await UserModel.findOne({username, isVerified: true})
        if( existingUserVerifiedByUserName){
            return Response.json({
                success : false,
                message : "User Already Exists"
            }, {
                status: 409
            })
        }
        const existingUserVerifiedByEmail = await UserModel.findOne({email})
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        
        if(existingUserVerifiedByEmail){
            if(existingUserVerifiedByEmail.isVerified){
                return Response.json({
                    success : false,
                    message : "User Already Exists"
                }, {
                    status: 409
                })
            }
            else{
                const hashedPassword = await bcrypt.hash(password, 10)
                existingUserVerifiedByEmail.password = hashedPassword;
                existingUserVerifiedByEmail.verifyCode = verifyCode;
                existingUserVerifiedByEmail.verifyCodeDate = new Date(Date.now() + 3600000);
                await existingUserVerifiedByEmail.save()
            }
        }
        
        
        // NEW USER SETUP 
        else{
           const hashedPassword = await bcrypt.hash(password, 10)
           const expiryDate = new Date() // object so it doesnt matter either it is let or const, as it will be a reference to the Date function
           expiryDate.setDate(expiryDate.getHours() + 1) // after 1 hour the code expires !! 
           const NewUser = new UserModel({
               username,
               email,
               password : hashedPassword, 
               verifyCode,
               verifyCodeDate : expiryDate,
               isVerified : false , 
               isAcceptMessage : true,
               messages : [] 
           })
           await NewUser.save()
        }



//  =============================== {The part below will happen, just separated this to make sure a continuity is understandable when i see the code after some time } =============================




        //Send Verification Email
        const EmailResponse = await sendVerificationEmail(email, username, verifyCode)
        if(!EmailResponse.success){
            return Response.json({
                success : false,
                message : EmailResponse.message
            },{
                status : 500
            }
        )
        }
        else{
            return Response.json({
                success : true,
                message : "User Registration completed, now please verify your email !!! "
            },{
                status : 201
            }
        )
        }
    } catch (error) {
        console.error('Error Registering User:', error);
        return Response.json({
            success : false,
            message : "Error Registering User"
        },
        {
            status : 500
        }
    )
    }
}