import { Routes, Route } from 'react-router-dom';
import './App.css';
import Splash from './layouts/Splash';
import Auth from './layouts/Auth';
import Home from './layouts/Home';
import './index.css'
import Dashboard from './layouts/Dashboard';
import Sections from './layouts/Sections';
import Offers from './layouts/offers';
import SectionInfo from './layouts/SectionInfo';
import Tests from './layouts/Tests';
import NewTest from './layouts/NewTest';
import OfferInfo from './layouts/OfferInfo';
import OutStanding from './layouts/OutStanding';
import ContactAs from './layouts/ContactAs';
import Students from './layouts/Students';
import StudentTests from './layouts/StudentTests';
import StudentBuyOrder from './layouts/StudentBuyOrder';
import GeneralInformationDashboard from './layouts/GeneralInformation ';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home />} >
        <Route
          path="dashboard"
          element={<Dashboard />}
        />
        <Route
          path="students"
          element={<Students />}
        />
        <Route
          path="students/tests"
          element={<StudentTests />}
        />
        <Route
          path="students/orders"
          element={<StudentBuyOrder />}
        />
        <Route
          path="sections"
          element={<Sections />}
        />
        <Route
          path="sections/:id"
          element={<SectionInfo />}
        />
        <Route
          path="/home/tests/:testId"
          element={<Tests />}
        />
        <Route
          path="/home/tests/new"
          element={<NewTest />} />
        <Route
          path="offers"
          element={< Offers />}
        />
        <Route
          path="offers/:id"
          element={< OfferInfo />}
        />
        <Route
          path="outstanding"
          element={< OutStanding />}
        />
        <Route
          path="contact"
          element={< ContactAs />}
        />
        <Route
          path="info"
          element={< GeneralInformationDashboard />}
        />
      </Route>
    </Routes>

  );
}

export default App;
