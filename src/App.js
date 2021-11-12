
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Explore from "./Pages/Explore/Explore";
import Booking from "./Pages/Home/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
       <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute exact path="/booking/:productId">
            <Booking />
          </PrivateRoute>
          <Route path="/explore">
            <Explore />
          </Route>
          <PrivateRoute  path="/dashboard">
            <Dashboard />
          </PrivateRoute >
          
         
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route  path="*">
            <NotFound />
          </Route>
       </Switch>
     </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
