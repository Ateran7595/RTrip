import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Hero() {
  return (
    <div className="relative w-full ">
      <div className="absolute inset-0 font-robotoSlab lg:w-[1000px] ml-auto mr-auto lg:mb-[1000px] md:mb-[800px] sm:mb-[1300px] xs:mb-[1300px] flex flex-col justify-center items-center font-bold text-center z-10">
        <h1 className='text-teal-400 lg:text-[65px] md:text-[40px] xs:text-[35px] mb-4'>Explore Your Next Destination</h1>
        <h1 className='lg:text-[30px] md:text-[20px] xs:text-[20px] text-neutral-200'>Discover your next adventure with ease! Our platform suggests a random travel destination based on your preferences, making trip planning effortless and exciting.</h1>
        <p className='text-white lg:text-[30px] md:text-[20px] mt-4'>Let us find the perfect getaway for you!</p>

        <Link to={'/create-trip'}>
          <Button className="font-semibold mt-8 text-[25px] w-[250px] h-[45px] bg-neutral-700 text-neutral-200">Get Started</Button>
        </Link>
      </div>

      <div className='flex bg-black w-full overflow-hidden'>
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
      
      <div className="p-10 flex md:flex-row xs:flex-col justify-center items-center gap-9 mt-10">
        <div className='font-robotoSlab'>
          <h1 className="lg:text-[45px] xs:text-[30px] xs:text-center font-bold mb-4">How it works</h1>
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

      <div className='p-10 flex md:flex-row xs:flex-col justify-center items-center gap-9 mt-10'>
        <div>
          <img src="/images/uniquePlace.webp" alt="uniquePlace" className='rounded-xl' />
        </div>
        <div  className='font-robotoSlab'>
          <h1 className="lg:text-[45px] xs:text-[30px] xs:text-center font-bold mb-4">Why should users try this? </h1>
            <ol className="list-disc list-inside space-y-2 p-3">
              <li>✅ Discover unique places.</li>
              <li>✅ Hassle-free trip planning.</li>
              <li>✅ Personalized recommendations.</li>
            </ol>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Hero