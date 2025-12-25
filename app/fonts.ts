import localFont from "next/font/local";

export const robotoFont = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal"
    }
  ],
  display: "swap",
  preload: true
});
