
function TripInfo({ trip }) {

  return (
    <div>
        <div className="font-robotoSlab p-3 m-4">
            <h1 className="text-center text-[40px] font-bold">🏝️Suggested Destination: <span className="text-teal-500">{trip?.tripData?.travelPlanDetails?.suggestedDestination?.countryCityDetails}</span></h1>
            <div className="m-4 p-4 rounded-xl text-[22px] bg-orange-100">
              <p><span className="font-semibold">📍 Location Preference:</span> {trip?.userSelection?.travelPreference}</p>
              <p><span className="font-semibold">📌 Climate:</span> {trip?.userSelection?.climate}</p>
              <p><span className="font-semibold">💰 Budget:</span> {trip?.userSelection?.budget}</p>
              <p><span className="font-semibold">👥 Companions:</span> {trip?.userSelection?.companion}</p>
              <p><span className="font-semibold">🎭 Activities:</span> {trip?.userSelection?.activity}</p>
            </div>    
            <h2 className="pl-4 text-[30px] font-bold">Description:</h2> 
            <p className="pl-6 pt-4 text-[21px] ">{trip?.tripData?.travelPlanDetails?.suggestedDestination?.description}</p> 
        </div>
    </div>
  )
}

export default TripInfo