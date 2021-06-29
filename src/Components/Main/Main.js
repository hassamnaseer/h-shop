import React, { Fragment, useContext } from "react";
import Login from "../LoginSignup/Login.js"
import Signup from "../LoginSignup/Signup.js"
import { Route } from "react-router-dom";
import Index from '../Index/Index.js'
import { UserContext } from '../../Providers/UserProvider.js';
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './Main.css';

const Main = () => {
  const user = useContext(UserContext);
  return (
    <div>
      {user !== undefined && user === null ? (<div className="loader-wrapper">
        <span className="loader-1">
          <span className="loader-inner-1"></span>
        </span>
      </div>) : 
      (<div>
        {user ? (
          <Index user={user} />
      ) : (
        <Fragment>
          <Route
            exact path="/" render={() => <Login />}
          />
          <Route
            exact path="/signup" render={() => <Signup />}
          />
        </Fragment>
      )}
      </div>)}
    </div>
  );
}

export default Main