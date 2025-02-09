import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function UserTripCard({ trip }) {
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
    <Link to={'/view-trip/'+trip?.id}>
     <div className="m-4 p-5">
      <div className="flex lg:flex-row 2xl:w-[1400px] m-auto xs:flex-col gap-5 border rounded-lg p-3 text-center hover:shadow-lg cursor-pointer transition-transform hover:scale-105">
        <div className="lg:border-r-2 xs:border-b-2 m-auto p-6"><img src={photoURL} alt="holder" className="md:w-[400px] md:h-[400px] object-cover rounded-xl" /></div>
        <div className="p-3 m-auto lg:w-[900px]  flex flex-col items-center justify-center text-center">
            <h2 className="font-bold text-[25px]">{trip?.tripData?.travelPlanDetails?.suggestedDestination?.name}</h2>
            <p>{trip?.tripData?.travelPlanDetails?.estimatedCostSummary?.costEstimate}</p>
        </div>
      </div>
    </div>   
    </Link>

  )
}

export default UserTripCard