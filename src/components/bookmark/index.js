import React, { Component } from "react";
import "./bookmark.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Bookmark extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="card">
          <img
            className="card-img-tag center "
            alt={this.props.bookmark.title}
            src={this.props.bookmark.picture.thumbnail}
          />
          <div className="card-body">
          
            <h2 className="card-title">
            <FontAwesomeIcon icon={["fas", "bookmark"]} />  
            <span> {this.props.bookmark.title}</span>
            </h2>
            <p className="card-link" key="link">
              <FontAwesomeIcon icon={["fas", "angle-right"]} />
              <span> {this.props.bookmark.link}</span>
            </p>
            <h5 className="card-visits" key="visits">
              <FontAwesomeIcon icon={["fas", "eye"]} />
              <span> {this.props.bookmark.visits} </span>
            </h5>
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
            >
              <button type="button" className={"btn btn-dark w-100"}>
                {" Edit "}
              </button>
              <button type="button" className={"btn btn-danger w-100"}>
                {"Delete"}
              </button>
              <button type="button" className={"btn btn-info w-100"}>
                {"Add Logo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookmark;