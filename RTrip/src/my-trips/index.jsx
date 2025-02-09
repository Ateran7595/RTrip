import { db } from "@/service/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserTripCard from "./components/UserTripCard"
import Footer from "@/components/custom/Footer"

function MyTrips() {
    const [userTrips, setUserTrips] = useState([])
    const navigate = useNavigate(); // useNavigate instead of useNavigation

    useEffect(() => {
        GetUserTrips()
    }, [])

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (!user) {
            navigate('/'); // Fixed: useNavigate() instead of useNavigation
            return;
        }

        setUserTrips([]); // Reset state
        const q = query(collection(db, 'RandomTrip'), where('userEmail', '==', user?.email));
        const querySnap = await getDocs(q);

        const trips = querySnap.docs.map(doc => doc.data()); // Collect first, then set state
        setUserTrips(trips);
    };

    useEffect(() => {
        console.log("Updated userTrips:", userTrips);
    }, [userTrips]); // Log state updates

    return (
        <div className="font-robotoSlab">
            <h1 className="font-semibold text-center mt-5 mb-5">My Trips</h1>
            <div >
                {userTrips.length > 0 ? (
                    userTrips.map((trip, index) => (
                        <UserTripCard key={index} trip={trip} />
                    ))
                ) : (
                    <p>No trips found</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default MyTrips;