'use client'
import TodayLocaleDate from '@/utils/TodayLocaleDate'
import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { LogoutUser } from 'services/AuthServices'
import CustomModal from './Modal'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


function Header() {
  const router = useRouter()
  const CompleteDate = TodayLocaleDate().split(',')
  const SplitDate = CompleteDate[0].split(' ')
  const UserLogoutHandler = async () => {
    try {
      const {data} = await LogoutUser();
      if(data.isSuccess){
          toast.success("خروج از حساب کاربری با موفقیت انجام شد")
          router.push('/')
      }else{
        toast.error("خروج از حساب انجام نشد")
      }
    } catch (error) {
        toast.error("خطایی رخ داده است")
    }
  }
  return (
    <header className='bg-white'>
      <div className='flex-between pt-9 pb-5 xl:pl-8 xl:pr-14 px-4'> 
          <div className='flex-center gap-x-5'>
            <h6 className='font-bold text-sm sm:text-2xl text-primary-950'>محمد قربانی عزیز؛ خوش آمدید</h6>
            <Divider orientation='vertical' className='h-6 bg-gray-400'/>
           <p className='flex-center gap-x-1 text-gray-500 font-normal text-xs sm:text-base text-left'><span>{CompleteDate[1]},</span><span>{SplitDate[2]}</span><span>{SplitDate[1]}</span><span>{SplitDate[0]}</span></p>
          </div>
          <CustomModal btnText="خروج" startContent={<BiLogOut className='size-5'/>} btnColor='danger' btnVariant='light' acceptHandler={UserLogoutHandler} modalHeader='آیا برای خروج مطمعن هستید؟'
          ></CustomModal>
        </div>
    </header>
  )
}

export default Header
