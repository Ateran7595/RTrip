import { CarouselItem } from '@/components/ui/carousel'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
import { useEffect, useState } from 'react'

function ItineraryCard({ item, index }) {
    const [photoURL, setPhotoURL] = useState()

    useEffect(() => {
        item&&GetPlacePhoto()
    },[item])

    const GetPlacePhoto = async() => {
        const data = {
        textQuery:item?.placeName
        }

        const result = await GetPlaceDetails(data).then(resp => {
        console.log(resp.data.places[0].photos[3].name)

        const PhotoURL=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
        setPhotoURL(PhotoURL)
        })
    }

  return (
    <CarouselItem >
      <div className="bg-neutral-400 w-[100px] m-auto mb-2 rounded-3xl">
        <p className="font-bold text-center text-[24px]">Day {item.day}</p>
      </div> 
      <div className="flex p-4 rounded-xl border hover:shadow-lg cursor-pointer transition-transform hover:scale-90">
        <div className="flex justify-center items-center border-r-2">
          <img src={photoURL} alt="city" className="w-[400px] h-[270px] m-4 rounded-xl" />
        </div>
        <div className="flex flex-col justify-center gap-4 items-start pl-5 w-[800px]">
          <h1 className="text-[35px] font-semibold">{item?.placeName}</h1>
          <p className="text-[20px] font-semibold">{item?.placeDetails}</p>
        </div>
      </div>
    </CarouselItem>
  )
}

export default ItineraryCard