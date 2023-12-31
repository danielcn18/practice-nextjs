import Navbar from "@/components/navbar/Navbar";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import './globals.css';
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="container">
            <div className="main-image">
              <Navbar />
              {children}
            </div>
            <Footer /> 
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}







