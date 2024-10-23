import { Outlet , } from "react-router-dom";


///navs
import Navbar from "./Navbar";
// import NavBottom from "./NavbarBottom";

export default function RootLayoute() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet/>
      </main>

      {/* <footer>
        <NavBottom />
      </footer> */}
    </>
  );
}
