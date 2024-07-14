import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Resources from "../components/Resources/Resources";
import ElementaryResources from "../components/Resources/ElementaryResources/ElementaryResources";
import HighSchoolResource from "../components/Resources/HighSchoolResources/HighSchoolResource";
import HighLevelResource from "../components/Resources/HigherLevelResources/HigherLevelResources";
import GeneralKnowledge from "../components/Resources/General Knowledge/GeneralKnowledge";
import WorldHistory from "../components/Resources/General Knowledge/World History/WorldHistory";
import Geography from "../components/Resources/General Knowledge/Geography/Geography";
import Quizzes from "../components/Quizzes/Quizzes";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Science from "../components/Resources/General Knowledge/Science/Science";
import Litrature from "../components/Resources/General Knowledge/Litrature/Litrature";
import Subject from "../components/Resources/ElementaryResources/Subject";
import Grade7 from "../components/Resources/ElementaryResources/Grade7/Grade7";
import Grade8 from "../components/Resources/ElementaryResources/Grade8/Grade8";

function Element(props) {
  return (
    <>
      <Header />
      {props.page}
      <Footer />
    </>
  );
}
const routes = [
  { path: "/", element: <Element page={<Home />} /> },
  { path: "/about", element: <Element page={<About />} /> },
  { path: "/resources", element: <Element page={<Resources />} /> },
  {
    path: "/resources/elementary",
    element: <Element page={<ElementaryResources />} />,
  },
  {
    path: "/resources/highschool",
    element: <Element page={<HighSchoolResource />} />,
  },
  {
    path: "/resources/highlevel",
    element: <Element page={<HighLevelResource />} />,
  },
  {
    path: "/resources/general-knowledge",
    element: <Element page={<GeneralKnowledge />} />,
  },
  {
    path: "/resources/general-knowledge/history",
    element: <Element page={<WorldHistory />} />,
  },
  {
    path: "/resources/general-knowledge/geography",
    element: <Element page={<Geography />} />,
  },
  {
    path: "/resources/general-knowledge/science",
    element: <Element page={<Science />} />,
  },
  {
    path: "/resources/general-knowledge/litrature",
    element: <Element page={<Litrature />} />,
  },
  { path: "/quizzes", element: <Element page={<Quizzes />} /> },
  { path: '/resources/elementary/grade7', element: <Element page={<Grade7/>}/>},
  { path: '/resources/elementary/grade8', element: <Element page={<Grade8/>}/>}

];

const router = createBrowserRouter(routes);

export default router;
