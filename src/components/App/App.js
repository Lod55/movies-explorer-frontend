import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/movies">
        <Movies />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/sign-in">
        <Login />
      </Route>

      <Route path="/sign-up">
        <Register />
      </Route>

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
