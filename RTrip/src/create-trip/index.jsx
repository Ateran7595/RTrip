import { Button } from '@/components/ui/button'
import { AI_PROMPT, travelActivities, travelBudget, travelClimate, travelCompanions, travelPreference } from '@/constants/options'
import { chatSession } from '@/service/AIModal'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/service/firebaseConfig'
import { useNavigate } from 'react-router-dom'


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
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp), 
    onError: (error) => console.log(error)
  })

  const handleGenerateTrip = async() => {
    const user = localStorage.getItem('user')

    if(!user){
      setOpenDialog(true);
      return;
    }

    if(!formData?.activity || !formData?.budget || !formData?.climate || !formData.companion || !formData.travelPreference){
      toast("Please provide all information.")
      return;
    }
      setLoading(true)
      const FINAL_PROMPT= AI_PROMPT
      .replace('{travelPreference}', formData?.travelPreference)
      .replace('{budget}', formData?.budget)
      .replace('{activity}', formData?.activity)
      .replace('{climate}', formData?.climate)
      .replace('{companion}', formData?.companion)
      
      const result= await chatSession.sendMessage(FINAL_PROMPT)
      console.log(result?.response?.text())

      setLoading(false);
      SaveAITrip(result?.response.text())
  };

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers:{
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp)
      localStorage.setItem('user', JSON.stringify(resp.data))
      setOpenDialog(false)
      handleGenerateTrip()
    })
  }

  const SaveAITrip = async(TripData) => {
    setLoading(true)
    const docID = Date.now().toString()
    const user = JSON.parse(localStorage.getItem('user'))

    await setDoc(doc(db, "RandomTrip", docID), {
        userSelection: formData,
        tripData: JSON.parse(TripData),
        userEmail:user?.email,
        id: docID
    });
    setLoading(false)
    navigate('/view-trip/' + docID)
  }

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
        <Button disabled={loading} onClick={handleGenerateTrip}>
          {loading?
          <AiOutlineLoading3Quarters className='animate-spin'/>:'Generate Trip'
          } 
        </Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className='flex p-2 justify-center items-center'>
                <img src="/logo.svg" alt="logo" className="w-[70px] h-[60px] -mr-2" />
                <h1 className='font-courgette text-neutral-900'>RTrip</h1> 
              </div>
              <h2 className='text-center p-2 ml-3 text-neutral-900 text-[17px] font-robotoSlab'>Sign in with Google to save your preferences and plan your next trip!</h2>
              <div className='flex justify-center '>
                <Button 
                disabled={loading}
                onClick={login}
                className="font-robotoSlab w-[400px] mt-4"><FcGoogle />Sign In With Google</Button>
              </div>
              
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default CreateTrip