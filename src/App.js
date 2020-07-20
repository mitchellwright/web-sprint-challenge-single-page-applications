import React from "react";
import { Route, Switch } from 'react-router-dom';
import SiteWrapper from './Components/SiteWrapper';
import Pizza from './Components/Pizza';
import Navigation from './Components/Navigation';
import Home from './Components/Home';

const App = () => {
  return (
    <>

      <Switch>
        <Route exact path="/">
          <SiteWrapper navigation={<Navigation />} page={<Home />} />
        </Route>
        <Route path="/pizza">
          <SiteWrapper navigation={<Navigation />} page={<Pizza />} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
