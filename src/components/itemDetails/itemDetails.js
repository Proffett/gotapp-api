import React from "react";
import styled from "styled-components";
import {useState, useEffect} from 'react'
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


export default function ItemDetails(props) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (!props.itemId) {
      return;
    }

    props.getData(props.itemId).then((res) => {
      setItem(res);
    });
  }, [props.itemId]);

  const Div = styled.div`
    background-color: #fff;
    padding: 5px;
  `;

  if (!props.itemId) {
    return (
      <Div>
        <span className="select-error" style={{ color: "red" }}>
          Please select item in the list
        </span>
      </Div>
    );
  }

  const { name } = item;

  return (
    <Div className="char-details rounded">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, { item }, <h1>dssdfdsfsdfsdfsdfsf</h1>);
        })}
      </ul>
    </Div>
  );
}
