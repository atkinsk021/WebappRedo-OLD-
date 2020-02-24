import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    handleTextChange = e => {
        this.handleChange(e, "title", e.target.value);
    };
    handleSortChange = e => {
        this.handleChange(e, "sort", e.target.value);
    };

    render() {
    return (
      <div className="container-fluid">
        <div className="searchBg">
          <div className="col-md-12">
            <h4>
              <span>Search </span>
              <input type="text" 
              placeholder="Bookmark Search" 
              onChange={this.handleTextChange}
              />
              <span> Sort: </span>
              <select id="sort"
              onChange={this.handleSortChange}
              >>
                <option value="all">All</option>
                <option value="ascending">Most Visits First</option>
                <option value="descending">Least Visits First</option>
              </select>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
