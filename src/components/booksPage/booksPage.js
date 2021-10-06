import React, { Component } from "react";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";
import { withRouter } from "react-router";

class BooksPage extends Component {
  gotService = new gotService();

  state = {
    error: false
  };

  componentDidCatch() {
    this.state({
      error: true,
    });
  }



  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return(
      <ItemList
        onCharSelected={(itemId) => {
          this.props.history.push(`/books/${itemId}`)
        } }
        getData={this.gotService.getAllBooks}
        renderItems={(item) => item.name}
      />
      )
    
  }
}

export default withRouter(BooksPage);