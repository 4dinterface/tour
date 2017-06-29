import React, { Component } from 'react';
import Header from '../Header';
import AirSection from "./AirSection"

//http://travelata.ru/turkey/resorts/alanya/hotels/sunside-beach-ex-blue-moon-beach-hotel-4.html#?fromCity=2&dateFrom=28.06.2017&dateTo=04.07.2017&nightFrom=7&nightTo=8&priceFrom=6000&priceTo=1000000&adults=2&meal=all&hot=true&asyncSearch=false&activeTab=tours

export default class BookingSection extends Component {  
  constructor(){
      super();
      this.state={
          selectImages:0
      }
  }

  onImageClick  (i){
    this.setState({
        selectImages:i
    })  
  }

  render() {
    var style = {width:"150px", height:"150", display:"inline-block"};    

    var images=[
        "http://www.intrust-tour.ru/images/hotels/kusadasi/1128_image_2.jpg",
        "http://toursfera.com/wp-content/uploads/2016/06/6948894_127_z.jpg",
        "https://hotels.sletat.ru/i/f/1863_7.jpg"
    ];

    return (       
        <section>
            <h3><strong>Отель</strong></h3>
            <div className="row">                  
                <img src={images[this.state.selectImages]} className="col-md-6" alt="" style={{height:"300px"}} ref="MainImg"/>
                <div className="col-md-4">
                    <p>
                        Proin tempor id mauris vulputate mattis. Vivamus venenatis felis sed libero posuere. A interdum augue porttitor. 
                        Suspendisse eleifend euismod purus vel tempus. Duis fermentum sapien a justo imperdiet cursus. Etiam porta metus odio.
                    </p>
                </div>                  
            </div>  
             <div>
                 {images.map((e,i)=><img src={e}  alt="" style={style}  onClick={this.onImageClick.bind(this,i)}/>)}            
            </div>
        </section>
    )
  }
}   
