import React from "react";

const ProductPreview = (props) => {
  return (
    <div>
      <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />

      {/* <div className={classes.FeatureData}>
  <p>{`${currentHour}:${currentMinute}`}</p>
</div> */}
      <div className={classes.HeartBeatSection}>
        <i class="fa-solid fa-heart-pulse"></i>
        <p>78</p>
      </div>
    </div>
  );
}

export default ProductPreview;
