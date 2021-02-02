import React, { Component } from "react";
// import { Col, Row } from "reactstrap";
import ItemList from "../../itemList";
import ErrorMessage from "../../errorMessage/errorMessage";
import gotService from "../../../services/service";
import {withRouter} from 'react-router-dom'


class BookPage extends Component {
  gotService = new gotService();
  state = {
    error: false
  };



  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const headerOfList = (
      <h2 style={{ backgroundColor: "#fff" }}>Books</h2>
    );
        
    return (
      <ItemList
        onItemSelected={(itemId) => {
            this.props.history.push(`${itemId}`)
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({ name, released }) => `${name} (${released} released)`}
        headerOfList={headerOfList}
      />
    );
  }
}

export default withRouter(BookPage);