import { Heebo } from "next/font/google";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Heebo({ subsets: ["latin"] });

export const metadata = {
  title: "John Willian Navarrete | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(spaceGrotesk.className, "bg-dark text-light uppercase")}
      >
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
