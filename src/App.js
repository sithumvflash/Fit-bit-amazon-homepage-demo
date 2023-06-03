import React from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  const curentHour = new Date() . getHours() > 9 ? new Date() . getHours() : '0' + new Date().getHours ();
  const currentMinute = new Date().getMinutes () > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
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
        {/* find a way to upload node modules to github */}
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join('')} src="https://imgur.com/iOeUBV7.png" alt="Black Colour Watch" /> */}
            <img className={classes.ProductImg} src="https://imgur.com/iOeUBV7.png" alt="Black Colour Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colour Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colour Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colour Watch" />

          </div>
          <div>
            <h3 className={classes.SectionHeading}>Features</h3>
          </div>

          <div>
            <button className={classes.FeatureItem}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
