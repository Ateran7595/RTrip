

function GeneralInfo({ trip }) {
  return (
    <div className="font-robotoSlab p-3 m-auto mt-3 w-[1450px] ">
        <div className="mb-10">
            <h1 className="text-[30px] font-bold text-center">🌍Interesting & Unique Facts About {trip?.tripData?.travelPlanDetails?.suggestedDestination?.name}</h1>
            <div>
                {trip?.tripData?.travelPlanDetails?.interestingUniqueFacts.map((item, index) => (
                    <p key={index} className="pl-8 pt-4 text-[21px] w-[1200px] m-auto">{index + 1}. {item}</p>
                ))}
            </div>
        </div>
        <div className='border-b-2 w-[1400px] m-auto mb-8 mt-10'></div>
        <div className="text-center">
            <h1 className="text-[30px] font-bold ">💡General Travel Tips</h1>
            <div >
                {trip?.tripData?.travelPlanDetails?.generalTravelTips.map((item, index) => (
                    <p key={index} className="pl-8 pt-4 text-[21px]">✅{item}</p>
                ))}
            </div>
        </div>
        <div className='border-b-2 w-[1400px] m-auto mb-8 mt-10'></div>
        <footer className="text-center">RTrip Created By Alejandro Teran</footer>
    </div>
  )
}

export default GeneralInfo