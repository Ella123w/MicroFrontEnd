import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "./containers/login";
import ForgotPassword from "./containers/fogotpassword";
import Checkout from "./containers/registration/registration";

export default function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={SignIn}></Route>
        <Route path="/forgotpassword" component={ForgotPassword}></Route>
        <Route path="/registration" component={Checkout}></Route>
      </Switch>
    </Router>
  );
}
