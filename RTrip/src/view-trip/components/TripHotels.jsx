import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function TripHotels({ trip }) {
  const [photoURLs, setPhotoURLs] = useState({})

  useEffect(() => {
    if (trip) {
      trip?.tripData?.travelPlanDetails?.hotelOptions.forEach(item => {
        // Call GetPlacePhoto for each hotel item
        GetPlacePhoto(item);
      });
    }
  }, [trip]);

  const GetPlacePhoto = async (item) => {
    const data = {
      textQuery: item?.hotelName
    };

    try {
      const response = await GetPlaceDetails(data);
      const photoName = response?.data?.places?.[0]?.photos?.[3]?.name;
      if (photoName) {
        const photoURL = PHOTO_REF_URL.replace('{NAME}', photoName);
        setPhotoURLs(prevState => ({
          ...prevState,
          [item?.hotelName]: photoURL
        }));
      }
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  }

  return (
    <div className="font-robotoSlab">
        <div className="m-auto flex justify-center items-center">
          <h1 className="text-[35px] font-bold">🏨Hotel Suggestions:</h1>
        </div>
        <div>
          <Carousel className="m-auto mt-8 flex justify-center items-center w-[1270px]">
            <CarouselContent>
              {trip?.tripData?.travelPlanDetails?.hotelOptions.map((item, index) => (
                <CarouselItem key={index}>
                  <Link to={'https://www.google.com/maps/search/?api=1&query='+ item?.hotelName + "," + item?.latitude + "," + item?.longitude} target="_blank" className="text-black">
                    <div className="flex p-4 rounded-xl border hover:shadow-lg cursor-pointer transition-transform hover:scale-90">
                      <div className="flex flex-col justify-center gap-4 items-start pl-5 w-[800px]">
                        <h1 className="text-[35px] font-semibold">{item?.hotelName}</h1>
                        <p className="text-[20px]">{item?.description}</p>
                        <div className="flex gap-10 pl-3">
                          <p><span className="font-bold">Price: </span>💰{item?.priceRange}</p>
                          <p><span className="font-bold">Star Rating: </span>{item?.starRating} </p>
                          <p><span className="font-bold">Guest Rating: </span>⭐{item?.guestRating}</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center border-l-2">
                        {photoURLs[item?.hotelName] && 
                          <img src={photoURLs[item?.hotelName]} alt="Hotel" className="w-[400px] h-[270px] m-4 rounded-xl" />
                        }
                      </div>
                    </div>            
                  </Link>
                </CarouselItem> 
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="p-3 m-auto mt-7 w-[1350px]">
          <h2 className="pl-4 text-[30px] font-bold">Estimated Cost Summary:</h2>
          <p className="pl-6 pt-2 text-[21px] "> {trip?.tripData?.travelPlanDetails?.estimatedCostSummary?.costEstimate}</p>
        </div>
    </div>
  );
}

export default TripHotels;