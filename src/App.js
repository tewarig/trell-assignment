import Shedule from './pages/shedule/Shedule';
import Medal from "./pages/medal/Medal";
import Cheers from "./pages/cheers/Cheers" ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/Home';
function App() {
  return (
    <Router>
    <Switch>
          <Route path="/Shedule">
        <Shedule></Shedule>   
          </Route>
          <Route path="/Medal">
               <Medal></Medal>
          </Route>
          <Route path="/Cheers">
            <Cheers></Cheers>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
