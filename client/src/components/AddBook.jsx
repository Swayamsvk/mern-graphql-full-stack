import React, { Component } from "react";

//  import the query language to make queries to the server
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
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
  render() {
    return (
      <form action="">
        <div className="field">
          <label>Book name: </label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre: </label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author: </label>
          <select>
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
