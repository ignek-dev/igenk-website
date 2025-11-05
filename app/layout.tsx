import "styles/tailwind.css"
import { Poppins } from "next/font/google"
import BottomBar from "components/Common/BottomBar"
import { Footer } from "../components/Common"
import Navigation from "../components/Navigation/Navigation"

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="min-h-screen bg-white text-black">
        <Navigation />
        {children}
        <Footer />
        <BottomBar />
      </body>
    </html>
  )
}
