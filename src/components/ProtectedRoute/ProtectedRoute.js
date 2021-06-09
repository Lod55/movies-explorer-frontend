import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <>
      {props.isChecking ? (
        <Preloader typeClass={'preloader_type_page'} />
      ) : (
        <Route>{props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />}</Route>
      )}
    </>
  );
};

export default ProtectedRoute;
