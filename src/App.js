import React from 'react';
import './App.css';
import Search from './search/Search'

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Search></Search>
    </div>
  );
}

function Banner() {
  return (
    <h1 className="banner">Meteorite Explorer</h1>
  );
}

export default App;
