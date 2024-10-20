import "./App.css"


import Navbar from "./Navbar"
import MainPage from "./MainPage"
import ScrolBtn from "./scrolBtn"

// import NavBottom from "./NavbarBottom"





export default function App() {
  return (
    <div className="container">
      <Navbar/>

      <MainPage/>


      <ScrolBtn/>

      {/* <NavBottom/> */}
    </div>
  )
}