import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../src/fonts/AmaticSC-Regular.ttf';

import App from './App';
import "./styles.css";

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);