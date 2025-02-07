import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios'

function Header() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);


  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp), 
    onError: (error) => console.log(error)
  })

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
      window.location.reload()
    })
  }

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div className='flex justify-between items-center bg-neutral-700 p-3 pl-20 pr-20'>
        <div className='flex p-2'>
          {/* <Link */}
          <img src="/logo.svg" alt="logo" className="w-[70px] h-[60px] -mr-2" />
          <h1 className='font-courgette text-neutral-200'>RTrip</h1> 
        </div>
        <div className='p-2'>
            {user ? 
              <div className='flex items-center gap-5'>
                <Button variant="outline" className="bg-neutral-300 text-black font-robotoSlab font-bold w-[100px] h-[45px] text-[16px]">View Trips</Button>
                <Popover>
                  <PopoverTrigger>
                    <Avatar>
                      <AvatarImage src={user?.picture} />
                      <AvatarFallback>UserPic</AvatarFallback>
                    </Avatar>                    
                  </PopoverTrigger>
                  <PopoverContent>
                    <h2 className='cursor-pointer' onClick={() => {
                      googleLogout();
                      localStorage.clear()
                      window.location.reload()
                    }}>Log Out</h2>
                  </PopoverContent>
                </Popover>
              </div> : 
              <Button onClick={() => setOpenDialog(true)} className="font-robotoSlab font-semibold w-[100px] h-[45px] text-[16px]">Sign In</Button>}
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

export default Header