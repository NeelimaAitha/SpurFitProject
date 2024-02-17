import HomePage from "../HomePage";
import Page2 from "../Page2";
import WorkWithUs from "../WorkWithUs";
import MeetAhead from "../MeetAheadCard";
import Vacancies from "../Vacancies";
import StartTestPage from "../StartTestPage";

import "./index.css";

const AppBody = () => (
  <div className="app-body">
    <HomePage />
    <Page2 />
    <MeetAhead />
    <WorkWithUs />
    <Vacancies />
    <StartTestPage />
  </div>
);

export default AppBody;
