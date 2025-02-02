import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='flex justify-between items-center bg-neutral-700 p-3 pl-20 pr-20'>
        <div className='flex p-2'>
          {/* <Link */}
          <img src="/logo.svg" alt="logo" className="w-[70px] h-[60px] -mr-2" />
          <h1 className='font-courgette text-neutral-200'>RTrip</h1> 
        </div>
        <div className='p-2'>
            <Button className="font-robotoSlab font-semibold w-[100px] h-[45px] text-[16px]">Sign In</Button>
        </div>
    </div>
  )
}

export default Header