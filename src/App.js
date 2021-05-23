import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Home />
          <Login />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
