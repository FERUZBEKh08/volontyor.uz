import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
import MainPage from "./MainPage";
import RootLayoute from "./RootLayoute"; // E'tibor bering, nomni to'g'riladik


//expers

import ExpertOne from "../expert/ExpertOne";
import ExpertTwo from "../expert/ExpertTwo";
import ExpertThree from "../expert/ExpertThree";
import ExpertFour from "../expert/ExpertFour";
import ExpertFive from "../expert/ExpertFive";
import ExpertSix from "../expert/ExpertSix";
import ExpertSeven from "../expert/ExpertSeven";
import ExpertEight from "../expert/ExpertEight";
import ExpertNine from "../expert/ExpertNine";
import ExpertTen from "../expert/ExpertTen";
import Expert11 from "../expert/Expert11";
import Expert12 from "../expert/Expert12";


//News

import NewOne from "../news/NewOne";
import NewTwo from "../news/NewTwo";
import NewThree from "../news/NewThree";
import NewFour from "../news/NewFour";
import NewFive from "../news/NewFive";
import NewSix from "../news/NewsSix";
import NewSeven from "../news/NewsSeven";
import NewEight from "../news/NewsEight";
import NewNine from "../news/NewsNine";
import NewTen from "../news/NewsTen";
import New11 from "../news/News11";
import New12 from "../news/News12";
import New13 from "../news/News13";
import New14 from "../news/News14";
import New15 from "../news/News15";
import New16 from "../news/News16";


//NotFount
import NotFount from "../pages/NotFount";

//AboutPage
import About from "../pages/About";

//School
import School from "../pages/School";
import MediaOne from "../media/MediaOne"
import MediaTwo from "../media/MediaTwo"
import MediaThree from "../media/MediaThree"
import MediaFour from "../media/MediaFour"

//Projects

import Projects from "../pages/Projects";

import ProjectsOne from "../project.jsx/ProjectsOne";
import ProjectsTwo from "../project.jsx/ProjectsTwoIn";
import ProjectsThree from "../project.jsx/ProjectsThreeIn";
import ProjectsFour from "../project.jsx/ProjectsFourIn";
import ProjectsFive from "../project.jsx/ProjectsFiveIn";
import ProjectsSix from "../project.jsx/ProjectsSixIn";


//News

import News from "../pages/News";

//volonteer

import Volonteer from "../pages/Volonteer";
import VolonteerTwo from "../pages/VolonteerTwo";
import VolonteerThree from "../pages/VolunteerThree";
import VolonteerFour from "../pages/VolunteerFour";
import VolonteerFive from "../pages/VolunteerFive";

//akkaunt 
import Create from "./create";

import Join from "./join";



//slider
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Be from "../pages/Be";

//dashboard

import Dashboard from "../dashboard/dashboard";
import Donlayn from "../dashboard/Donlayn";
import Dfoyda from "../dashboard/Dfoyda";
import Dblock from "../dashboard/Dblock";
import Dopen from "../dashboard/Dopen";

//Telegram

import Tg from "../pages/Tg"






export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayoute />}>
        <Route path="/" element={<MainPage />} />
      
        <Route path="/experts/1" element={<ExpertOne/>} />
        <Route path="/experts/2" element={<ExpertTwo/>} />
        <Route path="/experts/3" element={<ExpertThree/>} />
        <Route path="/experts/4" element={<ExpertFour/>} />
        <Route path="/experts/5" element={<ExpertFive/>} />
        <Route path="/experts/6" element={<ExpertSix/>} />
        <Route path="/experts/7" element={<ExpertSeven/>} />
        <Route path="/experts/8" element={<ExpertEight/>} />
        <Route path="/experts/9" element={<ExpertNine/>} />
        <Route path="/experts/10" element={<ExpertTen/>} />
        <Route path="/experts/11" element={<Expert11/>} />
        <Route path="/experts/12" element={<Expert12/>} />
        
        <Route path="/news/1" element={<NewOne/>} />
        <Route path="/news/2" element={<NewTwo/>} />
        <Route path="/news/3" element={<NewThree/>} />
        <Route path="/news/4" element={<NewFour/>} />
        <Route path="/news/5" element={<NewFive/>} />
        <Route path="/news/6" element={<NewSix/>} />
        <Route path="/news/7" element={<NewSeven/>} />
        <Route path="/news/8" element={<NewEight/>} />
        <Route path="/news/9" element={<NewNine/>} />
        <Route path="/news/10" element={<NewTen/>} />
        <Route path="/news/11" element={<New11/>} />
        <Route path="/news/12" element={<New12/>} />
        <Route path="/news/13" element={<New13/>} />
        <Route path="/news/14" element={<New14/>} />
        <Route path="/news/15" element={<New15/>} />
        <Route path="/news/16" element={<New16/>} />


        <Route path="/about" element={<About/>} />

        <Route path="/school" element={<School/>} />

        <Route path="/school/media/1" element={<MediaOne/>} />
        <Route path="/school/media/2" element={<MediaTwo/>} />
        <Route path="/school/media/3" element={<MediaThree/>} />
        <Route path="/school/media/4" element={<MediaFour/>} />


        <Route path="/projects" element={<Projects/>} />

        <Route path="/projects/info1" element={<ProjectsOne/>} />
        <Route path="/projects/info2" element={<ProjectsTwo/>} />
        <Route path="/projects/info3" element={<ProjectsThree/>} />
        <Route path="/projects/info4" element={<ProjectsFour/>} />
        <Route path="/projects/info5" element={<ProjectsFive/>} />
        <Route path="/projects/info6" element={<ProjectsSix/>} />


        <Route path="/news" element={<News/>} />


        <Route path="/volunteers" element={<Volonteer/>} />
        <Route path="/volunteers/2" element={<VolonteerTwo/>} />
        <Route path="/volunteers/3" element={<VolonteerThree/>} />
        <Route path="/volunteers/4" element={<VolonteerFour/>} />
        <Route path="/volunteers/5" element={<VolonteerFive/>} />

        <Route path="/Be" element={<Be/>} />

        <Route path="/create" element={<Create/>} />
        <Route path="/join" element={<Join/>} />

        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/online" element={<Donlayn/>} />
        <Route path="/dashboard/benefit" element={<Dfoyda/>} />
        <Route path="/dashboard/block" element={<Dblock/>} />
        <Route path="/dashboard/open" element={<Dopen/>} />

        <Route path="/send" element={<Tg/>} />







      
        <Route path="*" element={<NotFount/>} />
      </Route>
    )
  );
  
  return (
    <div className="container">
      <RouterProvider router={routes} />

    </div>
  );
}