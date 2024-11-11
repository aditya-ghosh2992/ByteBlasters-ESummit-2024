import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        //const { messages } = await req.json();
        const prompt ="What’s something you’re really passionate about and why? ‘||’ If you could have dinner with any historical figure, who would it be and what would you ask them? ‘||’ What’s the most interesting place you’ve ever traveled to, and what made it special?"
        const result = await streamText({
        model: openai('gpt-4-turbo'),
        prompt,
        maxTokens: 400,
  });

  return result.toDataStreamResponse();

    } catch (error) {
        if(error instanceof OpenAI.APIError){
            const {name,status,headers,message} = error;
            return NextResponse.json({name,status,headers,message},{status})
        }
        else{
            console.log("unexpected error")
            throw error;
        }
    }
}