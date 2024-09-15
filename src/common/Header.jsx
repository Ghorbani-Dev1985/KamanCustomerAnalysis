'use client'
import TodayLocaleDate from '@/utils/TodayLocaleDate'
import {Divider } from '@nextui-org/react'
import React, { useState } from 'react'
import { BiLogOut, BiMenu } from 'react-icons/bi'
import { LogoutUser } from 'services/AuthServices'
import CustomModal from './Modal'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Drawer from './Drawer'
import MenuItemView from './MenuItemView'
import { useGetUser } from 'hooks/useAuth'
import { DeleteCookies } from '@/utils/DeleteCookies'
import { GetAccessTokenFromCookie } from '@/utils/GetAccessTokenFromCookie'
import { useMutation } from '@tanstack/react-query'



function Header() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const CompleteDate = TodayLocaleDate().split(',')
  const SplitDate = CompleteDate[0].split(' ')
 // console.log(useGetUser())
  const {mutateAsync: mutateLogoutUser} = useMutation({mutationFn : LogoutUser})
  const UserLogoutHandler = async () => {
    const token = await GetAccessTokenFromCookie()
    try {
      const result = await mutateLogoutUser(token)
      console.log(result)
      if(result.isSuccess){
          toast.success("خروج از حساب کاربری با موفقیت انجام شد")
          router.replace('/')
          await DeleteCookies()    
      }else{
        toast.error("خروج از حساب انجام نشد")
      }
    } catch (error) {
        toast.error("خطایی رخ داده است")
    }
  }
  return (
    <header className='bg-white'>
      <div className='flex flex-col md:flex-row md:flex-between pt-9 pb-5 xl:pl-8 xl:pr-14 px-4'> 
          <div className='flex-center gap-x-5'>
             <div className='flex lg:hidden'>
             <button
        onClick={() => setDrawerOpen(true)}
        className="flex-center size-10 bg-primary-50 rounded-full p-1.5"
      >
        <BiMenu className='size-8 text-primary'/>
      </button>
      <Drawer drawerOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
         <MenuItemView />
        </Drawer>
             </div>
            {/* <h6 className='font-bold text-sm sm:text-2xl text-primary-950'> عزیز؛ خوش آمدید{userInfo?.first_name} {userInfo?.last_name}</h6>
            <Divider orientation='vertical' className='h-6 bg-gray-400'/> */}
           <p className='flex-center gap-x-1 text-gray-500 font-normal text-xs sm:text-base text-left'><span>{CompleteDate[1]},</span><span>{SplitDate[2]}</span><span>{SplitDate[1]}</span><span>{SplitDate[0]}</span></p>
          </div>
          <CustomModal btnText="خروج" startContent={<BiLogOut className='size-5'/>} btnColor='danger' btnVariant='light' acceptHandler={UserLogoutHandler} modalHeader='آیا برای خروج مطمعن هستید؟'
          ></CustomModal>
        </div>
    </header>
  )
}

export default Header
