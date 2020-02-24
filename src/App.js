import React, { Component } from "react";
import Header from "./components/header/";
import BookmarkList from "./components/bookmarkList/";
import FilterControls from "./components/filterControls/";
import BookmarkForm from "./components/bookmarkForm/";
import api from "./dataStore/stubAPI"; // NEW

class App extends Component {
  state = { search: "", visits: "all" };

  deleteBookmark = (key) => {
    api.delete(key); 
    this.setState({});                          
  };

  render() {
    const sample = {
      title: 'Google',
      link: 'www.google.com',
      visits: '112',
      picture: {thumbnail: './sample.png'}
  };

  let bookmarks = api.getAll();

    return (
      <div className="jumbotron">
        <Header noBookmarks={bookmarks.length} />
        <BookmarkForm />
        <FilterControls />
        <BookmarkList bookmarks={bookmarks} 
          deleteHandler={this.deleteBookmark} />
      </div>
    );
  }
}

export default App;