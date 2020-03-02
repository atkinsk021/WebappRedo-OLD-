import React, { Component } from "react";
import { Link , BrowserRouter as Router} from 'react-router-dom';

//Class for the grey header component at the top of the page
class Header extends Component {
  render() {
    return (
      
      //Storybook complains about the usage of no Router here for the Link below
      //However when the Router is used, the Header links stop working correctly
      //I still do not know how to fic this so I will leave it as is for now
      //The upside is the Header routes still work
      //The downside is that the the Dtorybook page for the Header contains an error.

      //<Router>
      <div style={headerStyle}>
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="page-header">
              <h1>
                Bookmark Vault 
              </h1>
              <Link style={linkStyle} to="/">Vault</Link> ----- <Link style={linkStyle} to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
      //</Router>
    );
  }
}

//Styles for header contents
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: 'white'
}

export default Header;