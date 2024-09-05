import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Resources from '../components/Resources/Resources';
import ElementaryResources from '../components/Resources/ElementaryResources/ElementaryResources';
import HighSchoolResource from '../components/Resources/HighSchoolResources/HighSchoolResource';
import HighLevelResource from '../components/Resources/HigherLevelResources/HigherLevelResources';
import GeneralKnowledge from '../components/Resources/General Knowledge/GeneralKnowledge';
import WorldHistory from '../components/Resources/General Knowledge/World History/WorldHistory';
import Geography from '../components/Resources/General Knowledge/Geography/Geography';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Science from '../components/Resources/General Knowledge/Science/Science';
import Litrature from '../components/Resources/General Knowledge/Litrature/Litrature';
import Grade7 from '../components/Resources/ElementaryResources/Grade7/Grade7';
import Grade8 from '../components/Resources/ElementaryResources/Grade8/Grade8';
import ElementarySubjectDetail from '../components/Resources/ElementaryResources/ElemetarySubjectDetail';
import Exams from '../components/Exams/Exams';
import QuizInstructions from '../components/Exams/ExamInstructions';
import GeneralKnowledgeQuiz from '../components/Exams/GeneralKnowledgeQuiz';
import Grade9 from '../components/Resources/HighSchoolResources/Grade9/Grade9';
import HighSchoolSubjectDetail from '../components/Resources/HighSchoolResources/HighSchoolSubjectDetails';
import Grade10 from '../components/Resources/HighSchoolResources/Grade10/Grade10';
import Grade11 from '../components/Resources/HighSchoolResources/Grade11/Grade11';
import Grade12 from '../components/Resources/HighSchoolResources/Grade12/Grade12';
import Signup, { CheckEmail } from '../components/Auth/Signup';
import Login from '../components/Auth/Login';
import { useSelector } from 'react-redux';
import ForgotPassword from '../components/Auth/ForgotPassword';
import ResetPassword from '../components/Auth/ResetPassword';
import SettingsPage from '../components/Settings/Settings';
import ChangePassword from '../components/Auth/ChangePassword';

function Element(props) {
  const auth = useSelector((state) => state.auth);

  if (!auth.isLoggedin) {
    if (props.name === 'protected') {
      return (
        <>
          <Navigate to="/" />
        </>
      );
    } else {
      return (
        <>
          <Header />
          {props.children}
          <Footer />
        </>
      );
    }
  } else {
    return (
      <>
        <Header />
        {props.children}
        <Footer />
      </>
    );
  }
}

const routes = [
  {
    path: '/',
    element: (
      <Element>
        <Home />
      </Element>
    ),
  },
  {
    path: '/about',
    element: (
      <Element>
        <About />
      </Element>
    ),
  },
  {
    path: '/signup',
    element: (
      <Element>
        <Signup />
      </Element>
    ),
  },
  {
    path: '/check-email',
    element: <CheckEmail />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/login',
    element: (
      <Element>
        <Login />
      </Element>
    ),
  },
  {
    path: '/resources',
    element: (
      <Element name="protected">
        <Resources />
      </Element>
    ),
  },
  {
    path: '/exams',
    element: (
      <Element name="protected">
        <Exams />
      </Element>
    ),
  },
  {
    path: '/exams/examdesc',
    element: (
      <Element name="protected">
        <QuizInstructions />
      </Element>
    ),
  },
  { path: '/exams/exam', element: <GeneralKnowledgeQuiz /> },
  {
    path: '/resources/elementary',
    element: (
      <Element name="protected">
        <ElementaryResources />
      </Element>
    ),
  },
  {
    path: '/resources/highschool',
    element: (
      <Element name="protected">
        <HighSchoolResource />
      </Element>
    ),
  },
  {
    path: '/resources/highlevel',
    element: (
      <Element name="protected">
        <HighLevelResource />
      </Element>
    ),
  },
  {
    path: '/resources/general-knowledge',
    element: (
      <Element name="protected">
        <GeneralKnowledge />
      </Element>
    ),
  },
  {
    path: '/resources/general-knowledge/history',
    element: (
      <Element name="protected">
        <WorldHistory />
      </Element>
    ),
  },
  {
    path: '/resources/general-knowledge/geography',
    element: (
      <Element name="protected">
        <Geography />
      </Element>
    ),
  },
  {
    path: '/resources/general-knowledge/science',
    element: (
      <Element name="protected">
        <Science />
      </Element>
    ),
  },
  {
    path: '/resources/general-knowledge/litrature',
    element: (
      <Element name="protected">
        <Litrature />
      </Element>
    ),
  },

  {
    path: '/resources/elementary/grade7',
    element: (
      <Element name="protected">
        <Grade7 />
      </Element>
    ),
  },
  {
    path: '/resources/elementary/grade8',
    element: (
      <Element name="protected">
        <Grade8 />
      </Element>
    ),
  },
  {
    path: '/resources/elementary/:grade/:subject',
    element: (
      <Element name="protected">
        <ElementarySubjectDetail />
      </Element>
    ),
  },
  {
    path: '/resources/highschool/:grade/:subject',
    element: (
      <Element name="protected">
        <HighSchoolSubjectDetail />
      </Element>
    ),
  },
  {
    path: '/resources/highschool/grade9',
    element: (
      <Element name="protected">
        <Grade9 />
      </Element>
    ),
  },
  {
    path: '/resources/highschool/grade10',
    element: (
      <Element name="protected">
        <Grade10 />
      </Element>
    ),
  },
  {
    path: '/resources/highschool/grade11',
    element: (
      <Element name="protected">
        <Grade11 />
      </Element>
    ),
  },
  {
    path: '/resources/highschool/grade12',
    element: (
      <Element name="protected">
        <Grade12 />
      </Element>
    ),
  },
  {
    path: '/settings',
    element: (
      <Element name="protected">
        <SettingsPage />
      </Element>
    ),
  },
  {
    path: '/change-password',
    element: (
      <Element name="protected">
        <ChangePassword />
      </Element>
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
