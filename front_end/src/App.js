import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Events from "./pages/Events";
import MyTicketsPage from "./pages/MyTicketsPage";
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
          <Route path="/patient" exact component={Events} />
          <Route path="/doctor" exact component={MyTicketsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
