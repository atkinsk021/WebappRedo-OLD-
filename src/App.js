import React, { Component } from "react";
import Header from "./components/header/";
import BookmarkList from "./components/bookmarkList/";
import FilterControls from "./components/filterControls/";
import BookmarkForm from "./components/bookmarkForm/";
import api from "./dataStore/stubAPI";
import _ from "lodash";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./components/pages/About";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//App layout 
class App extends Component {
  state = { search: ""};

  addBookmarkItem = (title, link) => {
    api.add(title, link);
    this.setState({});
  };

  incrementVisit = (id) => {
    api.visit(id) ;
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
    let bookmarks = _.sortBy(api.getAll(), bookmark => -bookmark.bookmarks);
    let filteredBookmarks = bookmarks.filter(b => {
    const title = b.title;
    return title.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });
    filteredBookmarks =
    this.state.sort === "all"
        ? filteredBookmarks
        : filteredBookmarks.filter(b => b.sort === this.state.sort);
    
    return (
      <Router>
        <Container>
          <div className="jumbotron">
            <Header noBookmarks={filteredBookmarks.length} />      
            <Route exact path="/" render= {props => (
              <React.Fragment>
                <Row noGutters>
                  <Col sm={8}>
                    <BookmarkList bookmarks={filteredBookmarks} 
                      visitHandler={this.incrementVisit} deleteHandler={this.deleteBookmark} />
                  </Col>
                  <Col sm={4}>
                    <FilterControls 
                      onUserInput={this.handleChange}
                    />
                  <BookmarkForm handleAdd={this.addBookmarkItem} />
                  </Col>
                </Row>  
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
       </Container>
      </Router>
    );
  }
}

export default App;