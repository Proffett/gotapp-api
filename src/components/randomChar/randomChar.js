import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../../services/service";
import propTypes from "prop-types";

export default function RandomChar(props) {
  const gotService = new GotService();
  const [char, setChar] = useState([]);
  const [loading, setLoad] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateChar();
    let timerId = setInterval(updateChar, props.interval);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const onCharLoaded = (character) => {
    setChar(character);
    setLoad(!loading);
  };

  const onError = (err) => {
    setError({ error: true });
    setLoad({ loading: false });
  };
  const updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);

    gotService
      .getCharacter(id)
      .then(onCharLoaded)
      .catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = <View char={char} />;

  const Block = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
      margin-bottom: 20px;
      text-align: center;
    }
    .term {
      font-weight: bold;
    }
  `;

  return (
    <Block>
      {errorMessage}
      {spinner}
      {content}
    </Block>
  );
}

RandomChar.defaultProps = {
  interval: 15000,
};

RandomChar.propTypes = {
  interval: propTypes.number,
};

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
