import styled from "styled-components";

export const HamburgerButton = styled.button`
  border: none;
  background-color: #264653;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  @media (min-width: 634px) {
    display: none;
  }
`;
