import React from 'react';
import '../App.css';
// imported swiftslider and installed by npm i swift slider
import SwiftSlider from 'react-swift-slider'

// array of data for slider
const data =  [
  {'id':'1','src':'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fun-christmas-products-1570033095.gif'},
  {'id':'2','src':'https://i2-prod.chroniclelive.co.uk/incoming/article17146521.ece/ALTERNATES/s615/0_The-World-of-Christmas.jpg'},
  {'id':'3','src':'https://upload.wikimedia.org/wikipedia/commons/c/c6/Inside_a_christmas_shop.jpg'},
];
// content class
class Homepage extends React.Component {

  render() {
    return (
      <div>
      <SwiftSlider data={data} height={620}  />
      </div>
    );
  }
}

export default Homepage;