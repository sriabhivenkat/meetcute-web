import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/pages/Landing'
import Newsroom from './components/pages/Newsroom';
import Investors from './components/pages/Investors';
import Team from './components/pages/Team';
import Partnerships from './components/pages/Partnerships';
import Careers from './components/pages/Careers';
import Marketplace from './components/pages/Marketplace';

function App() {
  return(
    <>
      <Router>
        <div>
          <Route path='/' exact component={Landing} />
          <Route path='/newsroom' exact component={Newsroom} />
          <Route path='/investors' exact component={Investors} />
          <Route path='/team' exact component={Team} />
          <Route path='/advertising' exact component={Partnerships} />
          <Route path='/careers' exact component={Careers} />
          <Route path='/market' exact component={Marketplace} />
        </div>
      </Router>
    </>
  )
}

export default App;
