import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = { activeIndex: -1 }
    
  handleClick = (index) => {
    console.log("handleClick index: " + index)
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const folders = this.props.folders
    const keys = Object.keys(folders);

    const section = (folders, key, index) => {
        return (
            <div key={index}>
                <Accordion.Title
                    active={false}
                    index={index}
                    onClick={() => this.handleClick(index)}>
                    <p className="navbar-title">{key}</p>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                    <ul>
                        {folders[key].sort((a,b) => a[0] > b[0]).map((el) => {
                            const path = `/${el}`
                            el = el.substr(1).replace(/_/g, " ")
                            if(el !== "DS Store")
                                return (
                                    <li key={el}><Link onClick={ () => { if (this.props.isMobile) this.props.showNav() }}
                                        className="link"
                                        to={path}>
                                    {el}</Link></li>
                                )
                            else return null;
                        })}
                    </ul>
                </Accordion.Content>
            </div>
        )
    }

    let navBarList = []
    for(let key in keys) {
        console.log("key: " +  key)
        let tmp = section(folders, keys[key], key)
        navBarList = navBarList.concat(tmp)
    }

    console.log("activeIndex: " + activeIndex)

    return (
        <div className="navbar">
            <Accordion>
                {navBarList}
                <Link  onClick={ () => { if (this.props.isMobile) this.props.showNav() }} to="/Contact"><p className="navbar-title" style={{marginLeft: "-7%", marginTop: "20px"}}>CONTACT</p></Link>
            </Accordion>
        </div>
    )
  }
}

export default Navbar