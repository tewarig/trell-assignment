import Shedule from './pages/shedule/Shedule';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
          <Route path="/Shedule">
        <Shedule></Shedule>   
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
