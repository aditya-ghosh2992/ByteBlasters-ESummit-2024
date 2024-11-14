"use client"
import React from 'react';
import  message from "@/messages.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import image from "./SNJ.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
export default function  Home() {
  return (
    <>
  <div className="flex flex-col items-center pb-10 text-center px-4 mt-20">
  <h1 className="text-2xl md:text-4xl font-bold">Hello Everyone, I am Suman, and I welcome you to Cryptic Comms</h1>
  <p className="text-lg md:text-xl mt-4">A very basic Backend project, just to showcase a bit use of apis and auth handling</p>
  <Carousel className="w-full max-w-xs mt-20" plugins={[Autoplay({delay:2000})]}>
      <CarouselContent >
        {message.map((message, index) => (
          <CarouselItem key={index} >
            <div className="p-1">
              <Card>
                <CardHeader>
                <CardTitle>{message.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <p className="text-xl sm:text-2xl">{message.content}</p>
                </CardContent>
                  <p>- {message.received}</p>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  <Separator/>
  <div>

  </div>
    

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div  className="sm:flex sm:items-center sm:justify-between">
            <a href="https://suman-jain.vercel.app/"  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={image.src}  className="h-20 w-20" alt="Flowbite Logo" />
                <span  className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SNJ</span>
            </a>
            <ul  className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#"  className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#"  className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#"  className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#"  className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr  className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span  className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#"  className="hover:underline"></a></span>
    </div>
</footer>


    </>
  )
};
