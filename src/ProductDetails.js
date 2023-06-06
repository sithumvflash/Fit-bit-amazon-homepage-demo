import React from 'react'
import classes from './ProdutDetails.module.css'

const ProductDetails = (props) => {
  
  return(
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
    )


}
      

export default ProductDetails;
