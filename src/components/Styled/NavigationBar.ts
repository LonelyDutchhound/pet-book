import styled from "styled-components";

type NavBarDisplayProps = {
  isDisplayed: 'none' | null;
}

export const NavigationBar = styled.div`
  flex: 0 0 5vh;
  width: 100vw;
  position: absolute;
  top: 60px;
  right: 0;
  display: ${(props: NavBarDisplayProps) => props.isDisplayed || 'flex'};
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #FFF;
  z-index: 1000;

  @media (min-width: 634px) {
    display: flex;
    flex-flow: row nowrap;
    z-index: 0;
    border-bottom: .5px solid #264653;
  }
`;

export const NavigationLink = styled.div`
  font-family: 'Grandstander', cursive;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  color:  #264653;
  padding: .25em 1em;
  flex: 0 0 100%;
  border-bottom: .5px solid #264653;

  @media (min-width: 634px) {
    flex: 0 0 20%;
    border-bottom: none;
  }
`;