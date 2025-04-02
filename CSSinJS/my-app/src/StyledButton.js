import React from "react";
import styled from "styled-components";

// Tworzymy stylowany komponent przycisku
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledButton = () => {
  return <Button>Kliknij mnie</Button>;
};

export default StyledButton;
