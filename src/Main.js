import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import routes from "./routes";
import { Switch, Route, withRouter } from "react-router-dom";
import LoginView from "./components/LoginView";
import AppTopBar from "./components/AppTopBar";
import AppFooter from "./components/AppFooter";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: theme.spacing(2),
  },
}));

function Main(props) {
  const classes = useStyles();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("authenticated") === "true") {
      setIsAuthenticated(true);
    } else props.history.replace("/login");
  }, []);

  function authenticate() {
    localStorage.setItem("authenticated", true);
    setIsAuthenticated(true);
  }

  function logout() {
    localStorage.setItem("authenticated", false);
    setIsAuthenticated(false);
    props.history.replace("/login");
  }

  return (
    <>
      <Switch>
        {!isAuthenticated ? (
          <>
            <Route
              path="/login"
              exact
              component={() => <LoginView authenticate={authenticate} />}
            />
          </>
        ) : (
          routes.map((route, id) => (
            <Route
              key={id}
              path={route.path ?? null}
              exact={route.exact ? true : false}
              component={() => (
                <>
                  <AppTopBar logout={logout} />

                  <div className={classes.mainContainer}>
                    <route.component logout={logout} />
                  </div>

                  <AppFooter />
                </>
              )}
            />
          ))
        )}
      </Switch>
    </>
  );
}
export default withRouter(Main);
