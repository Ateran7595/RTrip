
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi"
import { useEffect, useState } from "react"

function TripInfo({ trip }) {
  const [photoURL, setPhotoURL] = useState()

  useEffect(() => {
    trip&&GetPlacePhoto()
  },[trip])

  const GetPlacePhoto = async() => {
    const data = {
      textQuery:trip?.tripData?.travelPlanDetails?.suggestedDestination?.name
    }

    const result = await GetPlaceDetails(data).then(resp => {
      console.log(resp.data.places[0].photos[3].name)

      const PhotoURL=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
      setPhotoURL(PhotoURL)
    })
  }

  return (
    <div>
        <div className="font-robotoSlab p-3 m-4">
            <h1 className="text-center text-[40px] font-bold">🏝️Suggested Destination: <span className="text-teal-500">{trip?.tripData?.travelPlanDetails?.suggestedDestination?.name}</span></h1>
            <div>
              <img src={photoURL} alt="destination" className="lg:w-[1400px] xs:w-full lg:h-[450px] m-auto mt-3 rounded-xl object-cover" />
            </div>
            <div className="mt-4 md:w-[50%] xs:w-full flex flex-col items-center m-auto p-6 rounded-xl text-[22px] bg-orange-100">
              <p><span className="font-semibold">📍 Location Preference:</span> {trip?.userSelection?.travelPreference}</p>
              <p><span className="font-semibold">📌 Climate:</span> {trip?.userSelection?.climate}</p>
              <p><span className="font-semibold">💰 Budget:</span> {trip?.userSelection?.budget}</p>
              <p><span className="font-semibold">👥 Companions:</span> {trip?.userSelection?.companion}</p>
              <p><span className="font-semibold">🎭 Activities:</span> {trip?.userSelection?.activity}</p>
            </div>  

            <div className="w-[85%] flex flex-col items-center text-center p-6 m-auto">
              <h2 className="pl-4 text-[30px] font-bold">Description:</h2> 
              <p className="pl-6 pt-2 text-[21px]">{trip?.tripData?.travelPlanDetails?.suggestedDestination?.description}</p> 
            </div>  
        </div>
    </div>
  )
}

export default TripInfo