import Header from "../partials/header/Header"
import Footer from "../partials/footer/Footer"
import { Outlet } from "react-router-dom"
const MainLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout