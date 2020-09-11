import React from 'react';
import {Nav} from './Layout/Nav'
import {Home} from './Pages/Home'
import {RSVP } from './Pages/Rsvp'
import {Gallery} from './Pages/Gallery'
import {Footer} from './Layout/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
     <Switch>
       <Route path='/rsvp'><RSVP /></Route>
      <Route path='/gallery'><Gallery /></Route>
       <Route path='/'><Home /></Route>
     </Switch>
     <Footer />
      </Router>
     
    </div>
  );
}

export default App;
