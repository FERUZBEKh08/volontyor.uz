import { Outlet , } from "react-router-dom";


///navs
import Navbar from "./Navbar";
import Navbottom from "./Medianav"
import Topmedia from "./Top";
import NavBottom from "./NavbarBottom";

export default function RootLayoute() {
  return (
    <>
      <header>
        <Navbar />
        <Topmedia/>
        <Navbottom/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <NavBottom />
      </footer>
    </>
  );
}
