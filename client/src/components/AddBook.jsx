import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }
  displayAuthors() {
    let data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading Authors.....</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    //  prevent default behavior of refreshing the page on form submit
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <form action="" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Book name: </label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre: </label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author: </label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

//  stores the data coming from getAuthorsQuery in this component's props.
//  so access the data using this.props.
export default graphql(getAuthorsQuery)(AddBook);
