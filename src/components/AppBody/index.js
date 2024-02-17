import HomePage from "../HomePage";
import WorkWithUs from "../WorkWithUs";
import MeetAhead from "../MeetAheadCard";
import Vacancies from "../Vacancies";
import StartTestPage from "../StartTestPage";

import "./index.css";

const AppBody = () => (
  <div className="app-body">
    <HomePage />
    <MeetAhead />
    <WorkWithUs />
    <Vacancies />
    <StartTestPage />
  </div>
);

export default AppBody;
