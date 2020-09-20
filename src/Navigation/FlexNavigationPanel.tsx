import React, {ReactNode} from 'react';
import {NavigationBar, NavigationLink} from "../components/Styled/NavigationBar";

type FlexNavigationPanelProps = {
  isDisplayed: boolean;
  children?: ReactNode;
}

const FlexNavigationPanel = ({isDisplayed, children}: FlexNavigationPanelProps) => {
  const isPanelDisplayed = isDisplayed ? null : 'none'
  const links = React.Children.map(
    children,
    (child) =>
      <NavigationLink>
        {child}
      </NavigationLink>
  );

  return (
    <NavigationBar isDisplayed={isPanelDisplayed}>
      {links}
    </NavigationBar>
  );
};

export default FlexNavigationPanel;
