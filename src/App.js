import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Component/List.js';
import { StateProvider } from './Context/StateProvider.js';


function App() {
  return (
    <StateProvider>
      <List/>
    </StateProvider>

  );
}

export default App;
