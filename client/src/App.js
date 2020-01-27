import React from 'react';
import './App.css';
import  {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Main from './Main';
import Contact from './Contact'

function App() {
  return (
    <div  style={{overflow: "hidden"}}>
      <Router>
       
        <Link className="Main_title" to="/"><h1>LOUISE GIRARDINI</h1></Link>
        <Link  to="/Contact"><h2>Contact</h2></Link>
        <Switch >  
          <Route path="/" exact component={Main}/>
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
