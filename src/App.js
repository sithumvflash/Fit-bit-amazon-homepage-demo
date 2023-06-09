import React from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';
import ProductPreview from './ProductPreview';

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
          <ProductPreview />
          {/* <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" /> */}

          {/* <div className={classes.FeatureData}>
            <p>{`${currentHour}:${currentMinute}`}</p>
          </div> */}
          {/* <div className={classes.HeartBeatSection}>
            <i class="fa-solid fa-heart-pulse"></i>
            <p>78</p>
          </div> */}
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
          <div>
            <button className={classes.PrimaryButton}>Buy Now</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

