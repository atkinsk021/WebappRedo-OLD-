import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="searchBg">
          <div className="col-md-12">
            <h4>
              <span>Search </span>
              <input type="text" placeholder="Bookmark Search" />
              <span> Order: </span>
              <select id="sort">
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
