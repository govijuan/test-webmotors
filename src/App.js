import React from 'react';
import './App.css';
import SearchPage from './components/pages/SearchPage';
import Header from './components/organisms/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPage />
    </div>
  );
}

export default App;
