import React from "react";
// tslint:disable-next-line:no-implicit-dependencies
import {shallow, ShallowWrapper} from "enzyme";

import Header, {HeaderProps} from "../Header";

const mockProps: HeaderProps = {
  title: 'Header',
  subTitle: 'SubTitle',
  isNavMenuOpened: false,
  // tslint:disable-next-line:no-empty
  toggleNavMenu: () => {},
}

describe('Header', () => {
  let wrappedComponent: ShallowWrapper;
  beforeEach(() => {
    wrappedComponent = shallow(
      <Header
        title={mockProps.title}
        subTitle={mockProps.subTitle}
        isNavMenuOpened={mockProps.isNavMenuOpened}
        toggleNavMenu={mockProps.toggleNavMenu}/>
    );
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('should render without crashes', () => {
    expect(wrappedComponent).toBeTruthy();
  });
})
