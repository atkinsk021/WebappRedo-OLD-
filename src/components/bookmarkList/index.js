import React, { Component } from "react";
import Bookmark from "../bookmark/";
import './bookmarkList.css';

//Class for the List containing bookmarks on the left side of the page
export default class BookmarkList extends Component {
  render() {
    let bookmarkCards = this.props.bookmarks.map(
    (bookmark,index) =>
    <Bookmark key={index}
      bookmark={bookmark} 
      visitHandler ={this.props.visitHandler}
      deleteHandler={this.props.deleteHandler}/>
    );
    
    return (
      <div className="container-fluid bookmarks">
        <div className="row">{bookmarkCards}</div>
      </div>
    );
  }
}