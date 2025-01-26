import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import RegisterModel from "@/components/models/RegisterModel";
import { Toaster } from "react-hot-toast";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AirBnb",
  description: "AirBnb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="w-full">
          <Toaster />
          <Navbar />
          <RegisterModel />
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
