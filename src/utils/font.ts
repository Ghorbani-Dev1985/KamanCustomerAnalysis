import localFont from "next/font/local";

export const IRANSansWebFont = localFont({
    src: [
        {
            path: "../../public/font/IRANSansWeb/woff2/IRANSansWeb(FaNum)_Black.woff2",
            weight: "900",
            style: "black",
        },
        {
            path: "../../public/font/IRANSansWeb/woff2/IRANSansWeb(FaNum)_Bold.woff2",
            weight: "700",
            style: "bold",
        },
        {
            path: "../../public/font/IRANSansWeb/woff2/IRANSansWeb(FaNum)_Medium.woff2",
            weight: "500",
            style: "medium",
        },
        {
            path: "../../public/font/IRANSansWeb/woff2/IRANSansWeb(FaNum)_Light.woff2",
            weight: "300",
            style: "light",
        },
        {
            path: "../../public/font/IRANSansWeb/woff2/IRANSansWeb(FaNum)_UltraLight.woff2",
            weight: "200",
            style: "extralight",
        },
        {
            path: "../../public/font/IRANSansWeb/woff2/IRANSansWeb(FaNum).woff2",
            weight: "normal",
            style: "normal",
        },
    ],
    variable: "--font-IRANSansWeb-FD"
})