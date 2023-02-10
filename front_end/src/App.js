import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Patient from "./components/PatientDash";
import Doctor from "./components/DoctorDash";
import Register from "./patientPages/Register";
//import LoginConfirmation from "./pages/LoginConfirmation";
import { createBrowserHistory as history } from "history";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Dashboard />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/patient" exact component={Patient} />
          <Route path="/doctor" exact component={Doctor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
