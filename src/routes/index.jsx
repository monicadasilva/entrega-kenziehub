import { Switch, Route } from "react-router";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
export default Routes;
