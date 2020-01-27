import React, { useEffect, useState } from 'react';
import './App.css';
import  {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import axios from 'axios';

import Main from './Main';
import Contact from './Contact';
import Page from './Page';

function App() {
  const [folders, setFolders] = useState({});

  useEffect(() => {
    axios.get('/folderInfos')
        .then(res => setFolders(res.data))
  }, [])

  let allPages = []
  Object.keys(folders).forEach(function (key) {
      allPages = allPages.concat(folders[key]);
  });

  console.log(allPages)

  return (
    
    <div  style={{overflow: "hidden"}}>
      <Router>
        <Link className="Main_title" to="/"><h1>LOUISE GIRARDINI</h1></Link>
        <Link  to="/Contact"><h2>Contact</h2></Link>
        <Switch >  
          <Route path="/" exact component={Main}/>
          {
            allPages.map((el) =>  {
                let paths= `/${el}`;
                return (
                    <Route key={el} path={paths} component={() => <Page folders={folders}  title={el}/>} />
            )})
          }
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
