import React, {useState} from 'react';
import { hot } from 'react-hot-loader/root';
import Header from "./components/Header";
import {Titles} from "./constants/titles";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import FlexNavigationPanel from "./components/Navigation/FlexNavigationPanel";

const App: React.FC = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const toggleNavMenu = (): void => setIsNavMenuOpened(!isNavMenuOpened);

  return (
    <Wrapper
      header={
        <Header
        title={Titles.title.toUpperCase()}
        subTitle={Titles.subTitle}
        isNavMenuOpened={isNavMenuOpened}
        toggleNavMenu={toggleNavMenu}/>}
      nav={
        <FlexNavigationPanel
        isDisplayed={isNavMenuOpened}
        >
          <div>Profile</div>
          <div>Logout</div>
        </FlexNavigationPanel>}
      main={<div style={{ flex: '1 1 auto'}}/>}
      footer={<Footer c={'Created by LonelyDutchhound'} />}
    />
  )
    ;
}

export default hot(App);