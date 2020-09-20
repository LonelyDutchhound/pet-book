import React from 'react';
import {Title, SubTitle} from "../Styled/Titles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCat, faDog, faTimes} from "@fortawesome/free-solid-svg-icons";
import {HeaderWrapper} from "../Styled/HeaderWrapper";
import {MediumIcon} from "../Styled/MediumIcon";
import {
  HeaderColumnLeft,
  HeaderColumnRight,
  HeaderLogo,
  HeaderNavButtonContainer
} from "../Styled/HeaderElements";
import HamburgerNavigationButton from "../Navigation/HamburgerNavigationButton";

export type HeaderProps = {
  title: string;
  subTitle: string;
  isNavMenuOpened: boolean;
  toggleNavMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  isNavMenuOpened,
  toggleNavMenu
  }: HeaderProps): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderColumnLeft>
        <HeaderLogo>
          <MediumIcon>
            <FontAwesomeIcon icon={faDog}/>
          </MediumIcon>
          <Title>
            {title}
          </Title>
          <MediumIcon>
            <FontAwesomeIcon icon={faCat}/>
          </MediumIcon>
        </HeaderLogo>
        <HeaderNavButtonContainer>
          <HamburgerNavigationButton
            toggleButton={toggleNavMenu}>
            {isNavMenuOpened ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
          </HamburgerNavigationButton>
        </HeaderNavButtonContainer>
      </HeaderColumnLeft>
      <HeaderColumnRight>
        <SubTitle>
          {subTitle}
        </SubTitle>
      </HeaderColumnRight>
    </HeaderWrapper>
  );
};

export default Header;
