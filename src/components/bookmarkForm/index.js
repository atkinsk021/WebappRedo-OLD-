import React, { Component } from 'react';
import './bookmarkForm.css';

export default class BookmarkForm extends Component {
    render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add a new Bookmark</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Title"></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Link"></input>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
        );
    }
}