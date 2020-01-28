import React, { useEffect, useState } from 'react';
import  {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
import axios from 'axios';

import Main from './Main';
import MenuIcon from './Utils/MenuIcon';
import Contact from './Contact';
import Pages from './Pages';
import Navbar from './Navbar'

const App = ()  => {
  const [folders, setFolders] = useState({});
  const [showNav, setShowNav] = useState(window.innerWidth <= 640 ? false : true,)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640 ? true : false,)
  
  useEffect(() => {
    window.addEventListener('resize', handleMobile)
    return () =>
    window.removeEventListener('resize', handleMobile)
  })

  useEffect(() => {
    axios.get('/folderInfos')
        .then(res => setFolders(res.data))
  }, [])

  const handleNav = () => { setShowNav(!showNav) }

  const handleMobile = () => { 
    setIsMobile(window.innerWidth <= 640 ? true : false);
    setShowNav(window.innerWidth <= 640 ? false : true);
  }

  let allPages = []
  Object.keys(folders).forEach(function (key) {
      allPages = allPages.concat(folders[key]);
  });

  return (
    
    <div  style={{overflow: "hidden"}}>
      <Router>

        <div className="Row" style={{position: "fixed", zIndex: "1"}}>
          <MenuIcon showNav={handleNav} isOpened={showNav} isMobile={isMobile}/>
          <Link className="Main_title" to="/" onClick={() => setShowNav(window.innerWidth <= 640 ? false : true)}><h1>LOUISE GIRARDIN</h1></Link>
        </div>

        <div className="Row" >

          <div className="Col1" style={{marginLeft: showNav ? 0 : "-250px", position: "fixed"}}>
            <Navbar showNav={handleNav} isMobile={isMobile} folders={folders}/>
          </div>
          
          <div className="Col2" style={{marginLeft: showNav ? "250px" : 0}}>
            <Switch >
                <Route path="/" exact component={Main}/>
                {
                    allPages.map((el) =>  {
                        let paths= `/${el}`;
                        return (
                        <Route key={el} path={paths} component={() => <Pages folders={folders}  title={el}/> }/>
                    )})
                }
                <Route path="/Contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
