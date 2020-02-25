import React, { Component } from "react";
import Bookmark from "../bookmark/";
import './bookmarkList.css';

export default class BookmarkList extends Component {
  render() {
    let bookmarkCards = this.props.bookmarks.map(
    (bookmark,index) =>
    <Bookmark key={index}
      bookmark={bookmark} 
      deleteHandler={this.props.deleteHandler}/>
    );
    return (
      <div className="container-fluid bookmarks">
        <div className="row">{bookmarkCards}</div>
      </div>
    );
  }
}