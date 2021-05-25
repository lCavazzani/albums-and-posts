import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navigation } from "./components/Navigation";
import { PostDetails } from "./components/PostDetails";
import { AlbumDetails } from "./components/AlbumDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
      <Router>
        <Navigation />
        <Switch> 
          {/* Add more Routes here if needed */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/albums/:id" component={AlbumDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
