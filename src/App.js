import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetails from './components/TeamDetails/TeamDetails';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home> 
          </Route>

          <Route path="/team/:teamId">
            <TeamDetails></TeamDetails>

          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NoMatch/>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
