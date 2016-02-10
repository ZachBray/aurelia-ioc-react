import * as React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'file?name=[name].[ext]!./index.html';

render(<App />, document.getElementById('root'));
