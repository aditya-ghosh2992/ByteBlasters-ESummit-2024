import {resend} from "@/lib/resend";
import EmailVerification from "@/.././../emails/verificationEmail";
import { ApiResponse} from "@/types/ApiResponse";

export async function sendVerificationEmail(email : string,username : string , verifyCode : string): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'test@apitoexim.com',
            to: email,
            subject: 'Mystery Message || SNJ',
            react: EmailVerification({username : username , otp : verifyCode}),
        });
        return{
            success : true,
            message : "Email Sent successfully !!! " 
        }
    } catch (emailError) {
        console.log(`issue sending email : ${emailError}`);
        return {
            success : false,
            message : "Issue sending email" 
        }
    }
}