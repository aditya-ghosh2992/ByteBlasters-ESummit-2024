import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import { z } from "zod";
import { verifyUsername } from "@/schemas/signUpSchema";


const UsernameQuerySchema = z.object({
    username : verifyUsername
})  
export async function GET (req : Request){
    await dbConnect();
    try {
        const  {searchParams} = new URL(req.url);
        const queryParam = {
            username : searchParams.get("username")
        }
        //validation with zod
        const result = UsernameQuerySchema.safeParse(queryParam);
        console.log(result); //TODO: Remove
        if(!result.success){
            const username = result.error.format().username?._errors || [];
            return Response.json({
                success : false,
                message : username
            }, {
                status: 400
            })
            }

            const {username} = result.data;

            const exitingVerifiedUser = await UserModel.findOne({username , isVerified : true})
            if(exitingVerifiedUser){
                return Response.json({
                    success : false,
                    message : "User Already Exists"
                }, {
                    status: 409
                })
            }
            return Response.json({
                success : true,
                message : "Username is unique"
            },{
                status: 200
            })

        }catch (err) {
        console.log("Error checking username", err);
        return Response.json({
            success : false,
            message : "The error is for checking user name :"+err
        }, {
            status: 500
        })
    }
}