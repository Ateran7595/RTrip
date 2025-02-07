import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import ItineraryCard from "./ItineraryCard"

function ItineraryTrip({ trip }) {
  return (
    <div>
        <div>
          <h2 className="text-[30px] font-bold flex justify-center text-center">📅Itinerary</h2> 
          <Carousel className="m-auto mt-8 flex justify-center items-center font-robotoSlab w-[1270px]">
            <CarouselContent>
              {trip?.tripData?.travelPlanDetails?.suggestedDestination?.itinerary.map((item, index) => (
                <ItineraryCard key={index} item={item} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
    </div>
  )
}

export default ItineraryTrip