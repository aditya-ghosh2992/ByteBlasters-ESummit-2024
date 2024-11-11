"use client"
import React from "react"
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { verifyCodeSchema } from "@/schemas/verifySchema";
import axios from "axios";
import { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { Form, FormItem, FormField, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; 

const VerifyAccount = () =>{
    const router = useRouter();
    const param = useParams<{username : string}>();
    const {toast} = useToast();
    const form = useForm<z.infer<typeof verifyCodeSchema>>({
        resolver: zodResolver(verifyCodeSchema),
        defaultValues: {
          code: "",
        }
      })
      const onSubmit = async(data:z.infer<typeof verifyCodeSchema>) =>{
          try {
           const response =  await axios.post(`/api/verify-code` , {username : param.username , VerificationCode : data.code})
            toast({
              title : "Success",
              description : response.data.message
            })
            router.replace("/sign-in");
        } catch (error) {
            console.log("Error in user signup : " , error)
        const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;
      toast({
        title : "Signup Failed",
        description : errorMessage,
        variant : "destructive"
      });
      
          }
      }
  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 tracking-tight lg:text-5xl mb-6">
                    Verify Your Account
                </h1>
                <p>
                    Enter the VerificationCode Sent to your email
                </p>
            </div>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification Code</FormLabel>
              <FormControl>
                <Input placeholder="code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>        
        </div>
    </div>
  )
}
export default VerifyAccount;