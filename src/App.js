import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://cutewallpaper.org/24/amazon-logo-png-transparent/amazon-91770-logo-1c662-png-41c0b-images-07b9e-free-1f572-download.png" alt="Amazon Logo" />

        </nav>

      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
        </div>

      </div>
    </div>
  );
}

export default App;
