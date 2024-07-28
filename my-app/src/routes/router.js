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
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Science from "../components/Resources/General Knowledge/Science/Science";
import Litrature from "../components/Resources/General Knowledge/Litrature/Litrature";
import Grade7 from "../components/Resources/ElementaryResources/Grade7/Grade7";
import Grade8 from "../components/Resources/ElementaryResources/Grade8/Grade8";
import ElementarySubjectDetail from "../components/Resources/ElementaryResources/ElemetarySubjectDetail";
import Exam from "../components/Exams/Exam";
import Exams from "../components/Exams/Exams";
import QuizInstructions from "../components/Exams/ExamInstructions";
import GeneralKnowledgeQuiz from "../components/Exams/GeneralKnowledgeQuiz";
import Grade9 from "../components/Resources/HighSchoolResources/Grade9/Grade9";
import HighSchoolSubjectDetail from "../components/Resources/HighSchoolResources/HighSchoolSubjectDetails";
import Grade10 from "../components/Resources/HighSchoolResources/Grade10/Grade10";
import Grade11 from "../components/Resources/HighSchoolResources/Grade11/Grade11";
import Grade12 from "../components/Resources/HighSchoolResources/Grade12/Grade12";

function Element(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
const routes = [
  {
    path: "/",
    element: (
      <Element>
        <Home />
      </Element>
    ),
  },
  {
    path: "/about",
    element: (
      <Element>
        <About />
      </Element>
    ),
  },
  {
    path: "/resources",
    element: (
      <Element>
        <Resources />
      </Element>
    ),
  },
  {
    path: "/exams",
    element: (
      <Element>
        <Exams />
      </Element>
    ),
  },
  {
    path: "/exams/examdesc",
    element: (
      <Element>
        <QuizInstructions />
      </Element>
    ),
  },
  { path: "/exams/exam", element: <GeneralKnowledgeQuiz /> },
  {
    path: "/resources/elementary",
    element: (
      <Element>
        <ElementaryResources />
      </Element>
    ),
  },
  {
    path: "/resources/highschool",
    element: (
      <Element>
        <HighSchoolResource />
      </Element>
    ),
  },
  {
    path: "/resources/highlevel",
    element: <Element><HighLevelResource/></Element>,
  },
  {
    path: "/resources/general-knowledge",
    element: <Element><GeneralKnowledge/></Element>,
  },
  {
    path: "/resources/general-knowledge/history",
    element: <Element><WorldHistory/></Element>
  },
  {
    path: "/resources/general-knowledge/geography",
    element: <Element><Geography/></Element>
  },
  {
    path: "/resources/general-knowledge/science",
    element: <Element><Science/></Element>
  },
  {
    path: "/resources/general-knowledge/litrature",
    element: <Element><Litrature/></Element>,
  },
  {
    path: "/resources/elementary/grade7",
    element: <Element><Grade7/></Element>
  },
  {
    path: "/resources/elementary/grade8",
    element: <Element><Grade8/></Element>
  },
  {
    path: "/resources/elementary/:grade/:subject",
    element: <Element><ElementarySubjectDetail/></Element>,
    
  },
  {
    path: "/resources/highschool/:grade/:subject",
    element: <Element><HighSchoolSubjectDetail/></Element>,
    
  },
  {
    path: "/resources/highschool/grade9",
    element: <Element><Grade9/></Element>,
  },
  {
    path: "/resources/highschool/grade10",
    element: <Element><Grade10/></Element>,
  },
  {
    path: "/resources/highschool/grade11",
    element: <Element><Grade11/></Element>,
  },
  {
    path: "/resources/highschool/grade12",
    element: <Element><Grade12/></Element>,
  },
];

const router = createBrowserRouter(routes);

export default router;
