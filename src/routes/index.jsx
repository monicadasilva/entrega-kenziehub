import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Signin from "../pages/signin";
import Signup from "../pages/signup";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState([]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route exact path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route exact path="/signin">
        <Signin
          setUserId={setUserId}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          userId={userId}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};
export default Routes;
