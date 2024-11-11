import UserModel from "@/model/user";
import dbConnect from "@/lib/dbConnect";
import { Message } from "@/model/user";

export async function POST(request: Request) {
    await dbConnect();
    const {username , content} = await request.json();
    try {
        const user = await UserModel.findOne({username});
        if(!user){
            return Response.json({
                success : false,
                message : "User not found"
            },{status:404})
        }
        // is user accepting any messages ? 
        if(!user.isAcceptMessage){
            return Response.json({
                success : false,
                message : "User is not accepting messages"
            },{status:403})
        }
        const newMessage = {content , createdAt : new Date()};
        user.messages.push(newMessage as Message); // i know its of type message but for the sake of typescript we need to again type declare it
        await user.save();

        return Response.json({
            success : true,
            message : "Message sent successfully"   
        },{status:200})
    } catch (error) {
        console.log("An unexpected error occured  ",error);
        return Response.json({
            success : false,  
            message : "An unexpected error occured"
        },{status:500})
    }
}