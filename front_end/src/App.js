import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./sharedPages/Home";
import Login from "./sharedPages/Login";
import Patient from "./components/PatientMenu";
import Doctor from "./components/DoctorDash";
import Register from "./patientPages/Register";
import Appointments from "./patientPages/Appointments";
import Messages from "./patientPages/Messages";
//import LoginConfirmation from "./pages/LoginConfirmation";
import { createBrowserHistory as history } from "history";
import Dashboard from "./components/dashboard";
import Find_a_Doc from "./patientPages/Find_a_Doc";

function App() {
  return (
    <Router history={history}>
        <Dashboard />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/appointments" exact component={Appointments} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/findadoc" exact component={Find_a_Doc} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/patient" exact component={Patient} />
          
          <Route path="/doctor" exact component={Doctor} />
        </Switch>
    </Router>
  );
}

export default App;
