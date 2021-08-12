import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/pages/Landing'
import Newsroom from './components/pages/Newsroom';
import Investors from './components/pages/Investors';
import Team from './components/pages/Team';

function App() {
  return(
    <>
      <Router>
        <div>
          <Route path='/' exact component={Landing} />
          <Route path='/newsroom' exact component={Newsroom} />
          <Route path='/investors' exact component={Investors} />
          <Route path='/team' exact component={Team} />
        </div>
      </Router>
    </>
  )
}

export default App;
