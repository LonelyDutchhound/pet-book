import React, {ReactNode} from 'react';
import {MediumIcon} from "../Styled/MediumIcon";
import {HamburgerButton} from "../Styled/HamburgerButton";

export interface ButtonProps {
  toggleButton: () => void;
  children?: ReactNode;
}

const HamburgerNavigationButton: React.FC<ButtonProps> = ({toggleButton, children}) => {
  return (
    <HamburgerButton
      type="button"
      onClick={toggleButton}>
      <MediumIcon>
        {children}
      </MediumIcon>
    </HamburgerButton>
  );
};

export default HamburgerNavigationButton;
