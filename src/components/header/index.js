import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-4">
            <div className="page-header">
              <h1>
                Bookmark Vault <span className="badge badge-pill badge-success">{this.props.noContacts}</span>
              </h1>
              <Link to="/">Vault</Link> | <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;