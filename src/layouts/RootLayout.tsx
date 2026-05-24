import { Outlet } from 'react-router-dom'
import { ColorPalettePicker } from '../components/ColorPalettePicker'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ScrollToTop } from '../components/ScrollToTop'

export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ColorPalettePicker />
    </>
  )
}
