import React, { Component } from "react";
import styled from "styled-components";
// import Spinner from "../spinner";
// import ErrorMessage from "../errorMessage/errorMessage";

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Field };

export default class ItemDetails extends Component {
  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({ item });
    });
    // console.log(this.state.item);
  }

  render() {
    const Div = styled.div`
      background-color: #fff;
      padding: 5px;
    `;

    if (!this.state.item) {
      return (
        <Div>
          <span className="select-error">Please select item in the list</span>
        </Div>
      );
    }

    const { item } = this.state;
    const { name } = item;

    return (
      <Div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </Div>
    );
  }
}
