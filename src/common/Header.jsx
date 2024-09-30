"use client";
import { Button, Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { LogoutUser } from "services/AuthServices";
import CustomModal from "./Modal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Drawer from "./Drawer";
import MenuItemView from "./MenuItemView";
import { useGetUser } from "hooks/useAuth";
import { DeleteCookies } from "@/utils/DeleteCookies";
import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import { useMutation } from "@tanstack/react-query";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

function Header() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const todayDate = new DateObject({ calendar: persian, locale: persian_fa })
  const {data: userInfo} = useGetUser();
  const { mutateAsync: mutateLogoutUser } = useMutation({
    mutationFn: LogoutUser,
  });
  const UserLogoutHandler = async () => {
    const token = await GetAccessTokenFromCookie()
    try {
      const result = await mutateLogoutUser(token)
      if(result.isSuccess){
          toast.success("خروج از حساب کاربری با موفقیت انجام شد")
          setIsModalOpen(false);
          router.replace('/')
          await DeleteCookies();
      }else{
        toast.error("خروج از حساب انجام نشد")
      }
    } catch (error) {
        toast.error("خطایی رخ داده است")
    }
  };

  return (
    <header className="bg-white">
      <div className="flex flex-col md:flex-row md:flex-between pt-9 pb-5 xl:pl-8 xl:pr-14 px-4">
        <div className="flex-center gap-x-5">
          <div className="flex lg:hidden">
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex-center size-10 bg-primary-50 rounded-full p-1.5"
            >
              <BiMenu className="size-8 text-primary" />
            </button>
            <Drawer
              drawerOpen={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <MenuItemView />
            </Drawer>
          </div>
          {
            userInfo &&
          <h6 className='font-bold text-sm sm:text-2xl text-primary-950'>{userInfo?.results.first_name} {userInfo?.results.last_name} عزیز؛ خوش آمدید</h6>
          }
            <Divider orientation='vertical' className='h-6 bg-gray-400'/>
          <p className="flex-center gap-x-1 text-gray-500 font-normal text-xs sm:text-base text-left">
          {todayDate.weekDay.name}, {todayDate.day} {todayDate.month.name} {todayDate.year}
          </p>
        </div>
        <Button
          onPress={() => setIsModalOpen(true)}
          color="danger"
          variant="light"
          startContent={<BiLogOut className="size-5" />}
        >
          خروج
        </Button>
        <CustomModal
          containerClasses="!block md:!flex"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <CustomModal.Header
            titleClass="h7-semibold"
            containerClass="!bg-muted-400 px-5 py-4"
            onClose={() => setIsModalOpen(false)}
          >
            آیا برای خروج اطمینان دارید؟
          </CustomModal.Header>
          <CustomModal.Body containerClass="p-3 bg-muted-100">
            <div className="flex justify-end items-center">
              <div className="flex-center gap-x-2">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => setIsModalOpen(false)}
                >
                  انصراف
                </Button>
                <Button color="primary" onPress={UserLogoutHandler}>
                  تایید
                </Button>
              </div>
            </div>
          </CustomModal.Body>
        </CustomModal>
      </div>
    </header>
  );
}

export default Header;
