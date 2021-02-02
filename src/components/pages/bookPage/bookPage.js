import React, { Component } from "react";
// import { Col, Row } from "reactstrap";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import gotService from "../../../services/service";
import RowBlock from "../../rowBlock/rowBlock";

export default class BookPage extends Component {
  gotService = new gotService();
  state = {
    selectedBook: null,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedBook: id,
    });
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
        
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({ name, released }) => `${name} (${released} released)`}
        headerOfList={headerOfList}
      />
    );
    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}
      >
        <Field field="numberOfPages" label="NumberOfPages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={itemDetails} />;
  }
}
