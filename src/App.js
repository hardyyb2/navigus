
import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'

import Root from './Root'


const App = props => {
  return (
    <div className="App" style={{ overflow: 'hidden', background: '#1f1f1f', minHeight: '100vh' }}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  );
}

export default App;