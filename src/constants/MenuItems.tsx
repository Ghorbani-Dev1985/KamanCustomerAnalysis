import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdLeaderboard, MdOutlineSettings, MdStackedLineChart } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { FaLuggageCart } from "react-icons/fa";
import { TbChartHistogram } from "react-icons/tb";
export const MenuItems = [
  {
    id: 1,
    title: "نمای کلی",
    href: "/Dashboard/Overview",
    icon: <MdLeaderboard className="size-5" />
  },
  {
    id: 2,
    title: " روند‌ها",
    href: "/Dashboard/Trends",
    icon: <MdStackedLineChart className="size-5" />
  },
  {
    id: 3,
    title: " تحلیل رفتار مشتریان",
    icon: <HiOutlineUserGroup className="size-5" />,
    subMenu: [
      {
        id: 1,
        title: " بخش بندی مشتریان ",
        href: "/Dashboard/CustomerSegmentation",
      },
      {
        id: 2,
        title: "جابجایی مشتریان ",
        href: "/Dashboard/MovingCustomers",
      },
      {
        id: 3,
        title: "نرخ بازگشت مشتریان ",
        href: "/Dashboard/CustomerReturnRate",
      },
      {
        id: 4,
        title: " ارزش طول عمر مشتریان",
        href: "/Dashboard/CustomerLifetimeValue",
      },
      {
        id: 5,
        title: " سهم سبد مشتریان",
        href: "/Dashboard/ShareCustomersShoppingCart",
      },
      {
        id: 6,
        title: " خوشه بندی خرید مشتریان",
        href: "/Dashboard/CustomerPurchaseClustering",
      },
      {
        id: 7,
        title: " گروه مشتریان",
        href: "/Dashboard/CustomerGroup"
      }
    ]
  },
  {
    id: 4,
    title: "تحلیل فروش محصولات",
    icon: <FaLuggageCart className="size-5" />,
    subMenu: [
      {
        id: 1,
        title: " تحلیل عملکرد محصولات",
        href: "/Dashboard/ProductPerformanceAnalysis",
      },
      {
        id: 2,
        title: " تحلیل سبد مشتریان",
        href: "/Dashboard/AnalysisCustomersShoppingCarts",
      },
    ]
  },
  {
    id: 5,
    title: "تحلیل‌های پیش‌بینی‌ کننده ",
    icon: <TbChartHistogram className="size-5" />,
    subMenu: [
      {
        id: 1,
        title: " پیش بینی ریزش مشتری",
        href: "/Dashboard/PredictingCustomerChurn",
      },
      {
        id: 2,
        title: " تحلیل فاصله بین هر خرید",
        href: "/Dashboard/AnalyzeDistanceBetweenPurchase",
      },
      {
        id: 3,
        title: " دسته کردن محصولات",
        href: "/Dashboard/ProductGrouping",
      },
    ]
  },
  {
    id: 6,
    title: " مدیریت کاربران ",
    href: "/Dashboard/UserManagement",
    icon: <FaUsersGear className="size-5" />
  },
  {
    id: 7,
    title: " تنظیمات سامانه ",
    icon: <MdOutlineSettings className="size-5" />,
    subMenu: [
      {
        id: 1,
        title: "  تحلیل داده",
        href: "/Dashboard/DataAnalysis",
      },
      {
        id: 2,
        title: "ورود داده",
        href: "/Dashboard/DataEntry",
      },
      {
        id: 3,
        title: "سامانه پیامک",
        href: "/Dashboard/SmsSystem",
      },
      {
          id: 4,
          title: " وب سرویس",
          href: "/Dashboard/WebService",
      }
    ]
  }
];

