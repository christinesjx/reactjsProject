import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import {SkiArea} from './view/skiarea/SkiArea';
import {Home} from './view/home/Home';
import {Gears} from './view/gears/Gears';

import MediaQuery from 'react-responsive';


const breakpoints = {
  desktop: '(min-width: 1025px)',
  tablet: '(min-width: 768px) and (max-width: 1024px)',
  mobile: '(max-width: 767px)'
};

class App extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query={breakpoints.mobile}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gears" component={Gears} />
              <Route path="/SkiArea" component={SkiArea} />
            </Switch>
          </BrowserRouter>
        </MediaQuery>

        <MediaQuery query={breakpoints.tablet}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gears" component={Gears} />
              <Route path="/SkiArea" component={SkiArea} />
            </Switch>
          </BrowserRouter>
        </MediaQuery>

        <MediaQuery query={breakpoints.desktop}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gears" component={Gears} />
            <Route path="/SkiArea" component={SkiArea} />
          </Switch>
        </BrowserRouter>
      </MediaQuery>
    </div>
    );
  }
}

export default App;


