import React from "react";
import { Route, Switch } from 'react-router-dom';
import SiteWrapper from './Components/SiteWrapper';
import Pizza from './Components/Pizza';

const App = () => {
  return (
    <>

      <Switch>
        <Route exact path="/">
          <SiteWrapper />
        </Route>
        <Route path="/pizza">
          <Pizza />
        </Route>
      </Switch>
    </>
  );
};
export default App;
