import React, { Component } from "react";
import Bookmark from "../bookmark/";
import './bookmarkList.css';

export default class BookmarkList extends Component {
  render() {
    const bookmarkCards = this.props.bookmarks.map(b => (
      <Bookmark key={b.link} 
      bookmark={b} 
      deleteHandler={this.props.deleteHandler}/>
    ));
    return (
      <div className="container-fluid bookmarks">
        <div className="row">{bookmarkCards}</div>
      </div>
    );
  }
}