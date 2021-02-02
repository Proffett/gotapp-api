import React from "react";
import styled from 'styled-components'
import img from './error.jpg'

const ErrorMessage = () => {
    const Img = styled.img`width: 100%;`;
  return (
    <>
      <Img src={img} alt='error'></Img>
      <span>Something went wrong</span>
    </>
  );
};

export default ErrorMessage;
