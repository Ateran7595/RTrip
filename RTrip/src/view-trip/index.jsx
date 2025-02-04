import { db } from '@/service/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

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
    <div>{tripID}</div>
  )
}

export default ViewTrip