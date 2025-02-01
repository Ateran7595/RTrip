import React from 'react'
import { Button } from '../ui/button'


function Hero() {
  return (
    <div className="relative w-full ">
      <div className="absolute inset-0 font-robotoSlab w-[1000px] ml-auto mr-auto mb-[1000px] flex flex-col justify-center items-center font-bold text-center z-10">
        <h1 className='text-teal-400 text-[65px] mb-4'>Explore Your Next Destination:</h1>
        <h1 className='text-[30px] text-neutral-200'>Discover your next adventure with ease! Our platform suggests a random travel destination based on your preferences, making trip planning effortless and exciting.</h1>
        <p className='text-white text-[30px] mt-4'>Let us find the perfect getaway for you!</p>
        <Button className="font-semibold mt-8 text-[25px] w-[250px] h-[45px] bg-neutral-700 text-neutral-200">Get Started</Button>
      </div>

      <div className='flex space-x-16 bg-black'>
          <div className="relative flex z-0 animate-loop-scroll">
          <img src="/images/city.jpg" alt="city"
            style={{ maskImage: "linear-gradient(black 85%, transparent)", WebkitMaskImage: "linear-gradient(black 85%, transparent)" }} 
            className="brightness-50 max-w-none h-[700px]" 
          />
          <img src="/images/beach.jpg" alt="beach"
            style={{ maskImage: "linear-gradient(black 85%, transparent)", WebkitMaskImage: "linear-gradient(black 85%, transparent)" }} 
            className="brightness-50 max-w-none h-[700px]" 
          />
          <img src="/images/countryside.jpg" alt="countryside"
            style={{ maskImage: "linear-gradient(black 85%, transparent)", WebkitMaskImage: "linear-gradient(black 85%, transparent)" }} 
            className="brightness-50 max-w-none h-[700px]" 
          />
          <img src="/images/hiking.jpg" alt="mountain"
            style={{ maskImage: "linear-gradient(black 85%, transparent)", WebkitMaskImage: "linear-gradient(black 85%, transparent)" }} 
            className="brightness-50 max-w-none h-[700px]" 
          />
        </div>
        <div className="relative flex z-0 animate-loop-scroll"  >
          <img src="/images/city.jpg" alt="city"
            style={{ maskImage: "linear-gradient(black 85%, transparent)", WebkitMaskImage: "linear-gradient(black 85%, transparent)" }} 
            className="brightness-50 max-w-none h-[700px]" 
          />
          <img src="/images/beach.jpg" alt="beach"
            style={{ maskImage: "linear-gradient(black 85%, transparent)", WebkitMaskImage: "linear-gradient(black 85%, transparent)" }} 
            className="brightness-50 max-w-none h-[700px]" 
          />
          <img src="/images/countryside.jpg" alt="countryside"
            style={{ maskImage: "linear-gradient(black 85%, transparent)", WebkitMaskImage: "linear-gradient(black 85%, transparent)" }} 
            className="brightness-50 max-w-none h-[700px]" 
          />
          <img src="/images/hiking.jpg" alt="mountain"
            style={{ maskImage: "linear-gradient(black 85%, transparent)", WebkitMaskImage: "linear-gradient(black 85%, transparent)" }} 
            className="brightness-50 max-w-none h-[700px]" 
          />
        </div>
      </div>
      
      <div className="p-10 flex justify-center items-center gap-9 mt-10">
        <div className='font-robotoSlab'>
          <h1 className="text-[45px]  font-bold mb-4">How it works</h1>
          <ol className="list-decimal list-inside space-y-2 p-3">
            <li>Choose your travel preferences (budget, companions, activities, etc.).</li>
            <li>Get a random destination suggestion.</li>
            <li>View details like hotels, flights, and costs.</li>
            <li>Book and start your adventure!</li>
          </ol>
        </div>
        <div>
          <img src="/images/climbing.webp" alt="climbing" className='rounded-xl' />
        </div>
      </div>

      <div className='p-10 flex justify-center items-center gap-9 mt-10'>
        <div>
          <img src="/images/uniquePlace.webp" alt="uniquePlace" className='rounded-xl' />
        </div>
        <div  className='font-robotoSlab'>
          <h1 className="text-[45px]  font-bold mb-4">Why should users try this? </h1>
            <ol className="list-disc list-inside space-y-2 p-3">
              <li>✅ Discover unique places.</li>
              <li>✅ Hassle-free trip planning.</li>
              <li>✅ Personalized recommendations.</li>
            </ol>
        </div>
      </div>
    </div>
  )
}

export default Hero