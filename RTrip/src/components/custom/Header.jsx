import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      localStorage.setItem('user', JSON.stringify(resp.data))
      setOpenDialog(false)
      window.location.reload()
    })
  }

  return (
    <div className='flex justify-between items-center xs:flex-col sm:flex-row bg-neutral-700 p-3 px-6 sm:px-20'>
      {/* Logo */}
      <div className='p-2'>
        <a href='/' className='flex items-center'>
          <img src="/logo.svg" alt="logo" className="w-[50px] sm:w-[70px] h-[40px] sm:h-[60px]" />
          <h1 className='font-courgette text-neutral-200 lg:text-[40px] xs:text-[25px]'>RTrip</h1>
        </a>
      </div>

      {/* Navigation */}
      <div className='p-2 flex items-center gap-4 sm:gap-5'>
        {user ? (
          <>
            <a href="/create-trip">
              <Button className="bg-neutral-100 text-black font-bold text-[4vw] sm:text-[16px]">Create Trip</Button>
            </a>
            <a href="/my-trips">
              <Button className="bg-neutral-100 text-black font-bold text-[4vw] sm:text-[16px]">View Trips</Button>
            </a>
            <Popover>
              <PopoverTrigger className='rounded-[200px] w-[50px] h-[50px] flex justify-center items-center'>
                <Avatar><AvatarImage src={user?.picture} /></Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={() => { googleLogout(); localStorage.clear(); window.location.reload(); }}><a href='/'>Log Out</a></h2>
              </PopoverContent>
            </Popover>
          </>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>
      <Dialog open={openDialog} >
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