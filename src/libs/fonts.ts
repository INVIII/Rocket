import localFont from "@next/font/local";

export const switzer = localFont({
  src: [
    {
      path: "../public/fonts/Switzer/Switzer-Variable.woff2",
      weight: "100 900",
    },
    {
      path: "../public/fonts/Switzer/Switzer-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/Switzer/Switzer-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Switzer/Switzer-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Switzer/Switzer-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/Switzer/Switzer-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Switzer/Switzer-Extrabold.woff2",
      weight: "800",
    },
    {
      path: "../public/fonts/Switzer/Switzer-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--switzer",
  display: "swap",
  style: "normal",
});