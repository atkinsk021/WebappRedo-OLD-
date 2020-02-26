import React, { Component } from "react";
import Header from "./components/header/";
import BookmarkList from "./components/bookmarkList/";
import FilterControls from "./components/filterControls/";
import BookmarkForm from "./components/bookmarkForm/";
import api from "./dataStore/stubAPI";
import _ from "lodash";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./components/pages/About";

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

  deleteBookmark = (id) => {
    api.delete(id); 
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
  //let sortedBookmarks = _.sortBy(filteredBookmarks, b => b.title);



    return (
      <Router>
      <div className="jumbotron">
        <Header noBookmarks={filteredBookmarks.length} />
        <Route exact path="/" render= {props => (
          <React.Fragment>
              <BookmarkForm handleAdd={this.addBookmarkItem} />
              <FilterControls 
                onUserInput={this.handleChange}
              />
              <BookmarkList bookmarks={filteredBookmarks} 
                deleteHandler={this.deleteBookmark} />
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        
      </div>
      </Router>
    );
  }
}

export default App;