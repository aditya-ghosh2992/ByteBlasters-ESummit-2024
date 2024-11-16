import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";


export async function POST(req: Request) {
    await dbConnect();
    try{
        const {username, VerificationCode} =await req.json();
        const decodedUsername = decodeURIComponent(username); // the actual data is fetched, the spaces are reduced to 20%
        const user = await UserModel.findOne({username : decodedUsername})
        console.log(user);
        if(!user){
            console.log("User not found");
            return Response.json({
             success : false,
             message : "User Not Found"   
            },{
                status : 404
            })
            
        }
        const isCodeValid = user.verifyCode === VerificationCode;
        const isCodeNotExpired = new Date(user.verifyCodeDate)> new Date();
        if(isCodeValid && isCodeNotExpired){
            user.isVerified = true;
            await user.save();
            return Response.json({
             success : true,
             message : "User Verified"   
            },{status : 200})
        }
        else if(!isCodeNotExpired){
            return Response.json({
             success : false,
             message : "Verification Code Expired, signup again for new code"   
            },{
                status : 400
            })
        }
        else{
            return Response.json({
                success : false,
                message : "Invalid verification code"
            },{status : 403})
        }
    }
    catch(error){
        console.log("Erro verifying user : ", error);
        return Response.json({
         success : false,
         message : "Error Verifying User"   
        },{
            status : 500
        })
    }
}