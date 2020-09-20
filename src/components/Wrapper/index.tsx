import React, {ReactNode} from 'react';
import {Page} from "../Styled/Page";

type WrapperProps = {
  header: ReactNode;
  nav?: ReactNode;
  main: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const Wrapper = ({header, nav, main, footer}: WrapperProps) => {
  return (
    <Page>
      {header}
      {nav}
      {main}
      {footer}
    </Page>
  );
};

export default Wrapper;
