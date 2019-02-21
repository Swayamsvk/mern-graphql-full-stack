import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  render() {
    return (
      <div id="book-details">
        <p>Output book details here</p>
      </div>
    );
  }
}

//  stores the data coming from getBookQuery in this component's props.
//  so access the data using this.props.
export default graphql(getBookQuery)(BookDetails);
