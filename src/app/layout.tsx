import "../../public/styles/globals.css";
import { IRANSansWebFont } from "@/utils/font";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import { Metadata } from "next";
import ReactQueryProvider from "./Providers";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    template: "%s | تحلیل مشتریان کمان",
    default: "تحلیل مشتریان کمان",
  },
  description: "در این پلتفرم می توانید اطلاعات فروش خود را وارد نمایید تا بتوانید مشتریان خود را بر اساس رفتار خریدشان دسته بندی نمایید",
};
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="fa" dir="rtl" className={IRANSansWebFont.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          
            <main className="">
              {children}
            </main>
       
          </NextUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;