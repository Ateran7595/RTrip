import { Button } from '@/components/ui/button'
import { travelActivities, travelBudget, travelClimate, travelCompanions, travelPreference } from '@/constants/options'
import React, { useEffect, useState } from 'react'

function TripCreator({ travelObject, objName, formData, setFormData }){

  const handleInputChange= (name, value) => {
    setFormData({
      ...formData, 
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <div className='mt-16'>
      <h2 className='text-left text-[25px] font-semibold mb-5'>{travelObject.question}</h2>
      <div className='flex gap-5 w-[1140px] justify-center flex-wrap'>
        {travelObject.options.map((item, index) => (
          <div key={index} 
          onClick={() => handleInputChange(objName, item.title)}
          className={`border rounded-lg w-[325px] p-3 text-center hover:shadow-lg cursor-pointer transition-transform hover:scale-105 ${formData[objName] === item.title ? 'shadow-lg border-black' : ''}`}>  
            <h2 className='font-semibold text-[20px]'>{item.icon} {item.title}</h2>
            <h2>{item.desc}</h2>
          </div>
        ))}
      </div> 
    </div>
  )
}

function CreateTrip() {
  const [formData, setFormData] = useState({});

  const handleGenerateTrip = () => {
    console.log('Generated trip with:', formData);
    // Add logic for generating a trip or making API requests
  };


  return (
    <div className='font-robotoSlab flex flex-col justify-center items-center m-auto mt-16 p-5'>
      <div className='font-robotoSlab mb-8'>
        <h1 className='font-bold text-[47px]'>Choose your preferences</h1>
        <p className='mt-3 text-[20px]'>Provide basic information about your travel style, budget, and interests, so we can suggest the perfect destination for you!</p>
      </div>

      <TripCreator travelObject={travelPreference} objName={travelPreference.objName} formData={formData} setFormData={setFormData} />
      <TripCreator travelObject={travelBudget} objName={travelBudget.objName} formData={formData} setFormData={setFormData} />
      <TripCreator travelObject={travelActivities} objName={travelActivities.objName} formData={formData} setFormData={setFormData} />
      <TripCreator travelObject={travelClimate} objName={travelClimate.objName} formData={formData} setFormData={setFormData} />
      <TripCreator travelObject={travelCompanions} objName={travelCompanions.objName} formData={formData} setFormData={setFormData} />

      <div className='mt-10 mb-5'>
        <Button onClick={handleGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  )
}

export default CreateTrip