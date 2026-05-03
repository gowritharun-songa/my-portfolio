import { Inter, Open_Sans, Work_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-open-sans',
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: '--font-work-sans',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-roboto',
});

export const metadata = {
  title: "Gowri Tharun Songa | Portfolio",
  description: "Personal portfolio of Gowri Tharun Songa, a Full Stack Developer.",
  keywords: ["Gowri Tharun Songa", "Full Stack Developer", "MERN Stack", "Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${openSans.variable} ${workSans.variable} ${roboto.variable}`}>
      <body className={`${inter.className} font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}