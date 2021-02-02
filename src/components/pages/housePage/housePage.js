import React, { Component } from "react";
// import { Col, Row } from "reactstrap";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import gotService from "../../../services/service";
import RowBlock from "../../rowBlock/rowBlock";

export default class HousePage extends Component {
  gotService = new gotService();
  state = {
    selectedHouse: null,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id,
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
    const headerOfList = <h2 style={{ backgroundColor: "#fff" }}>Houses</h2>;
    
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        headerOfList={headerOfList}
        renderItem={({ name, region }) => `${name} (${region} region)`}
      />
    );

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}
      >
        <Field field="region" label="Region" />
        <Field field="words" label="Words" />
        <Field field="titles" label="Titles" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={itemDetails} />;
  }
}
