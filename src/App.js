import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from "./LoginPage";
import Home from "./Home";
import Recruit from './Recruit';
import Apply from "./Apply";
import CreateProject from "./CreateProject";
import CreateStudy from "./CreateStudy";
import CreateTeam from "./CreateTeam";
import Alarm from "./Alarm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/recruit" element={<Recruit/>}></Route>
        <Route path="/apply" element={<Apply/>}></Route>
        <Route path="/createproject" element={<CreateProject/>}></Route>
        <Route path="/createstudy" element={<CreateStudy/>}></Route>
        <Route path="/createteam" element={<CreateTeam/>}></Route>
        <Route path="/alarm" element={<Alarm/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
