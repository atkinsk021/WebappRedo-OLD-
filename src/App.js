import React, { Component } from "react";
import Header from "./components/header/";
import BookmarkList from "./components/bookmarkList/";
import FilterControls from "./components/filterControls/";
import BookmarkForm from "./components/bookmarkForm/";
import api from "./dataStore/stubAPI";
import _ from "lodash";

class App extends Component {
  state = { search: "", visits: "all" };

  addBookmarkItem = (title, link) => {
    api.add(title, link);
    this.setState({});
  };

  handleChange = (type, value) => {
    type === "title"
    ? this.setState({ search: value })
    : this.setState({ sort: value });
};

  deleteBookmark = (key) => {
    api.delete(key); 
    this.setState({});                          
  };

  render() {

  let bookmarks = api.getAll();
  let filteredBookmarks = bookmarks.filter(b => {
  const title = b.title;
  return title.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
  });
  filteredBookmarks =
  this.state.sort === "all"
      ? filteredBookmarks
      : filteredBookmarks.filter(b => b.sort === this.state.sort);
  let sortedBookmarks = _.sortBy(filteredBookmarks, b => b.title);



    return (
      <div className="jumbotron">
        <Header noBookmarks={sortedBookmarks.length} />
        <BookmarkForm handleAdd={this.addBookmarkItem} />
        <FilterControls 
          onUserInput={this.handleChange}
        />
        <BookmarkList bookmarks={sortedBookmarks} 
          deleteHandler={this.deleteBookmark} />
      </div>
    );
  }
}

export default App;