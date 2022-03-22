import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { userRoutes, authRoutes } from "./routes/allRoutes";
import Authmiddleware from "./routes/middleware/authMiddleware";
import Layout from "./components/Layout/index";
import NonAuthLayout from "./components/Layout/NonAuthLayout"
import "./App.css"
function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter basename="/">
        <Switch>
          {authRoutes.map((route, idx) => (

            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              Component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              Component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
