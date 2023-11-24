import "./globals.scss";

import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin", "cyrillic"], weight: ["400"] });

export const metadata = {
  title: "About",
  description: "Page that represents current state of my degradation",
  meta: {
    viewport: "width=device-width, user-scalable=no",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} theme="dark">
        {children}
      </body>
    </html>
  );
}
