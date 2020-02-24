import React, { Component } from "react";
import Header from "./components/header/";
import BookmarkList from "./components/bookmarkList/";
import FilterControls from "./components/filterControls/";
import BookmarkForm from "./components/bookmarkForm/";

class App extends Component {
  render() {
    const sample = {
      title: 'Google',
      link: 'www.google.com',
      visits: '112',
      picture: {thumbnail: './sample.png'}
  };

    const bookmarks = [sample, sample, sample, sample, sample];

    return (
      <div className="jumbotron">
        <Header noBookmarks={10} />
        <BookmarkForm />
        <FilterControls />
        <BookmarkList bookmarks={bookmarks} />
      </div>
    );
  }
}

export default App;