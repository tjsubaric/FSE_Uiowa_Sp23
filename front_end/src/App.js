import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
//import DoctorHome from "./pages/DoctorHome";
//import CreateEventConfirmation from "./pages/CreateEventConfirmation";
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
          <Route path="/patient" exact component={Patient} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
