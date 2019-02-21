import React, { Component } from "react";

//  import the query language to make queries to the server
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Books.....</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

//  stores the data coming from getBooksQuery in this component's props.
//  so access the data using this.props.
export default graphql(getBooksQuery)(BookList);
