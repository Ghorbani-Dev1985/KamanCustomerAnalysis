import "../../../public/styles/globals.css";
import { IRANSansWebFont } from "@/utils/font";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import ReactQueryProvider from "../Providers";
import SideBar from "@/common/SideBar";
import Header from "@/common/Header";
export const metadata: Metadata = {
  title: {
    template: "%s | تحلیل مشتریان کمان",
    default: "تحلیل مشتریان کمان",
  },
  description: "در این پلتفرم می توانید اطلاعات فروش خود را وارد نمایید تا بتوانید مشتریان خود را بر اساس رفتار خریدشان دسته بندی نمایید",
};
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="fa" dir="rtl" className={IRANSansWebFont.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body>
        <ReactQueryProvider>
          <NextUIProvider>
            <NextTopLoader
              color="#2c51a3"
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
            />
            <Toaster />
            <main className="grid grid-cols-1 lg:grid-cols-24 min-h-screen">
              <SideBar />
              <div className="col-span-1 lg:col-[span_19_/_span_19] xl:col-[span_20_/_span_20] h-[calc(100%-102px)]">
               <Header />
               <section className="w-full h-full bg-slate-50 rounded-tr-3xl xl:px-3 pt-6 pb-14">
                <div className="container">
                  <div className="flex flex-col">
              {children}
                  </div>
                </div>
               </section>
              </div>
            </main>
          </NextUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default DashboardLayout;