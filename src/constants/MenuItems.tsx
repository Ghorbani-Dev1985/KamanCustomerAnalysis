import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdLeaderboard, MdOutlineSettings, MdStackedLineChart } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { FaLuggageCart } from "react-icons/fa";
import { TbChartHistogram } from "react-icons/tb";
export const MenuItems = [
  {
    id: 1,
    title: "نمای کلی",
    href: "/Overview",
    icon: <MdLeaderboard />
  },
  {
    id: 2,
    title: " روند‌ها",
    href: "/Trends",
    icon: <MdStackedLineChart />
  },
  {
    id: 3,
    title: " تحلیل رفتار مشتریان",
    icon: <HiOutlineUserGroup />,
    subMenu: [
      {
        id: 1,
        title: " بخش بندی مشتریان ",
        href: "/CustomerSegmentation",
      },
      {
        id: 2,
        title: "جابجایی مشتریان ",
        href: "/MovingCustomers",
      },
      {
        id: 3,
        title: "نرخ بازگشت مشتریان ",
        href: "/CustomerReturnRate",
      },
      {
        id: 4,
        title: " ارزش طول عمر مشتریان",
        href: "/CustomerLifetimeValue",
      },
      {
        id: 5,
        title: " سهم سبد مشتریان",
        href: "/ShareCustomersShoppingCart",
      },
      {
        id: 6,
        title: " خوشه بندی خرید مشتریان",
        href: "/CustomerPurchaseClustering",
      },
      {
        id: 7,
        title: " گروه مشتریان",
        href: "/CustomerGroup"
      }
    ]
  },
  {
    id: 4,
    title: "تحلیل فروش محصولات",
    icon: <FaLuggageCart />,
    subMenu: [
      {
        id: 1,
        title: " تحلیل عملکرد محصولات",
        href: "/ProductPerformanceAnalysis",
      },
      {
        id: 2,
        title: " تحلیل سبد مشتریان",
        href: "/AnalysisCustomersShoppingCarts",
      },
    ]
  },
  {
    id: 5,
    title: "تحلیل‌های پیش‌بینی‌ کننده ",
    icon: <TbChartHistogram />,
    subMenu: [
      {
        id: 1,
        title: " پیش بینی ریزش مشتری",
        href: "/PredictingCustomerChurn",
      },
      {
        id: 2,
        title: " تحلیل فاصله بین هر خرید",
        href: "/AnalyzeDistanceBetweenPurchase",
      },
      {
        id: 3,
        title: " دسته کردن محصولات",
        href: "/ProductGrouping",
      },
    ]
  },
  {
    id: 6,
    title: " مدیریت کاربران ",
    href: "/UserManagement",
    icon: <FaUsersGear />
  },
  {
    id: 7,
    title: " تنظیمات سامانه ",
    icon: <MdOutlineSettings />,
    subMenu: [
      {
        id: 1,
        title: "  تحلیل داده",
        href: "/DataAnalysis",
      },
      {
        id: 2,
        title: "ورود داده",
        href: "/DataEntry",
      },
      {
        id: 3,
        title: "سامانه پیامک",
        href: "/SmsSystem",
      },
      {
          id: 4,
          title: " وب سرویس",
          href: "/WebService",
      }
    ]
  }
];

