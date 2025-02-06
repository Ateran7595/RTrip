import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Link } from "react-router-dom"

function ItineraryTrip({ trip }) {
  return (
    <div>
        <div>
          <h2 className="text-[30px] font-bold flex justify-center text-center">📅Itinerary</h2> 
          <Carousel className="m-auto mt-8 flex justify-center items-center font-robotoSlab w-[1270px]">
            <CarouselContent>
              {trip?.tripData?.travelPlanDetails?.suggestedDestination?.itinerary.map((item, index) => (
                <CarouselItem key={index} className="">
                  <div className="bg-neutral-400 w-[100px] m-auto mb-2 rounded-3xl">
                    <p className="font-bold text-center text-[24px]">Day {item.day}</p>
                  </div> 
                  <div className="flex p-4 rounded-xl border hover:shadow-lg cursor-pointer transition-transform hover:scale-90">
                    <div className="flex justify-center items-center border-r-2">
                      <img src="/images/city.jpg" alt="city" className="w-[400px] m-4 rounded-xl" />
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-start pl-5 w-[800px]">
                      <h1 className="text-[35px] font-semibold">{item?.placeName}</h1>
                      <p className="text-[20px]">{item?.placeDetails}</p>
                    </div>
                  </div>
                </CarouselItem> 
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        {/* to={'https://www.google.com/maps/search/?api=1&query='+item?.placeName}  */}
    </div>
  )
}

export default ItineraryTrip