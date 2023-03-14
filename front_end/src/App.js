import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./sharedPages/Login";
import Patient from "./components/PatientMenu";
import Doctor from "./components/DoctorMenu";
import Register from "./patientPages/Register";
import { createBrowserHistory as history } from "history";
import Dashboard from "./components/dashboard";
import Appointments from "./patientPages/Appointments";
import Messages from "./patientPages/Messages";
import Find_a_Doc from "./patientPages/Find_a_Doc";
import Lab_Results from "./patientPages/Lab_Results";
import Medical_Records from "./patientPages/Medical_Records";
import Prescriptions from "./patientPages/Prescriptions";
import Billing from "./patientPages/Billing";
import My_Schedule from "./drPages/My_Schedule";
import My_Patients from "./drPages/My_Patients";
import Chats from "./drPages/Chats";
import Logout from "./sharedPages/Logout";

function App() {
  
  return (
    <Router history={history}>
        <Dashboard />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/appointments" exact component={Appointments} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/labresults" exact component={Lab_Results} />
          <Route path="/medrecords" exact component={Medical_Records} />
          <Route path="/prescriptions" exact component={Prescriptions} />
          <Route path="/billing" exact component={Billing} />
          <Route path="/findadoc" exact component={Find_a_Doc} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/patient" exact component={Patient} />
          <Route path="/doctor" exact component={Doctor} />
          <Route path="/myschedule" exact component={My_Schedule} />
          <Route path="/mypatients" exact component={My_Patients} />
          <Route path="/chats" exact component={Chats} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
    </Router>
  );
}

export default App;
