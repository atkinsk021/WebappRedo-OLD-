import React, { Component } from 'react';
import './bookmarkForm.css';

export default class BookmarkForm extends Component {
    state = {title:'', link:''};


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.title, this.state.author, this.state.link)
        this.setState({ title: '', link: ''})
    }
    handleTitleChange = (e) =>  this.setState({title: e.target.value});
    handleLinkChange = (e) => this.setState({link: e.target.value});

    render() {
        return (
        <form className="form bg-dark text-light">
            <h3>Add a new Bookmark</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Title"
                value={this.state.title}
                onChange={ this.handleTitleChange } />
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Link"
                value={this.state.link}
                onChange={ this.handleLinkChange } />
            </div>
            <button type="submit" className="btn btn-primary"
            onClick={this.handleSubmit}>Create</button>
        </form>
        );
    }
}