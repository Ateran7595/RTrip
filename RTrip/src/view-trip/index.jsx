import { db } from '@/service/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import TripInfo from './components/TripInfo'
import ItineraryTrip from './components/ItineraryTrip'
import TripHotels from './components/TripHotels'

function ViewTrip() {
    const {tripID} = useParams()
    const [trip, setTrip] = useState([])

    useEffect(() => {
        tripID&& GetTripData();
    }, [tripID]);

    const GetTripData = async() => {
        const docRef = doc(db, 'RandomTrip', tripID);
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            console.log("Document:", docSnap.data())
            setTrip(docSnap.data())
        } else {
            console.log("No document found")
            toast('No Document Found')
        }
    }

  return (
    <div>
        <TripInfo trip={trip} />
        <div className='border-b-2 w-[1350px] m-auto mb-5'></div>
        <ItineraryTrip trip={trip} />
        <div className='border-b-2 w-[1350px] m-auto mb-5 mt-10'></div>
        <TripHotels trip={trip} />
    </div>
  )
}

export default ViewTrip