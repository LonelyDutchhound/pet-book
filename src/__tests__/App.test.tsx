import React from "react";
// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";

import App from '../App';

it('should render without crashes', () => {
    const wrappedComponent = shallow(<App />);

    expect(wrappedComponent).toBeTruthy();
});