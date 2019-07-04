import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Profile from './components/users/Profile';
import Posts from './components/posts/Posts';
import './App.css';

function App() {
  return (
  <Router>
      <div className="App">
        <Navbar />
          <div className="container">
            <Switch> 
              <Route exact path="/" component={Users}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/users/:login" component={Profile}/>
              <Route exact path="/posts" component={Posts}/>
            </Switch> 
          </div>
      </div>
  </Router>
  );
}

export default App;
