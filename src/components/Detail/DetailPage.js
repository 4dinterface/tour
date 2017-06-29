import React, { Component } from 'react';
import Header from '../Header';
import AirSection from "./AirSection"
import BookingSection from "./BookingSection"

class DetailPage extends Component {
  render() {
    return (       
      <div>      
        <Header/>         
        <main style={{marginTop:"100px"}} >    
          <div className="container">                                             
            <div className="row">
             <div className="col-md-12">                       
           
                <div id="carousel-example-1" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-example-1" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-1" data-slide-to="1" className=""></li>
                    <li data-target="#carousel-example-1" data-slide-to="2" className=""></li>
                  </ol>

                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <a href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html#!"><img src="http://lend-tour.ru/upload/iblock/4de/1-_2_.jpg" className="img-fluid" alt=""/></a>
                    </div>                            

                    <div className="carousel-item">
                      <a href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html#!"><img src="http://adventuretravelnow.com/wp-content/uploads/2015/09/amazing-thailand-adventure-trip.jpg" className="img-fluid" alt=""/></a>
                    </div>

                    <div className="carousel-item">
                      <a href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html#!"><img src="http://ryazan-travel.ru/wp-content/uploads/2016/11/phuket.jpg" className="img-fluid" alt=""/></a>
                    </div>
                  </div>

                  <a className="carousel-control-prev"  role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>

                  <a className="carousel-control-next"  role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>

                </div>           
                
                 <h2 className="text-center mt-1 mb-2">Таиланд Провинция Пхукет Патонг</h2>
                <h5 className="text-center text-muted">Вылет наn  27 июня, 2017  <strong>на 5 дней</strong></h5> 

                <br/>  <br/>  <br/>                  

                <p>
                   Proin tempor id mauris vulputate mattis. Vivamus venenatis felis sed libero posuere. A interdum augue porttitor. 
                   Suspendisse eleifend euismod purus vel tempus. Duis fermentum sapien a justo imperdiet cursus. Etiam porta metus odio.
                </p>                
                
                <br/>   
                <AirSection/>                                    
                <br/>              
                <BookingSection/>                
                <br/>            
                
              </div>
            </div>
          </div>  
        </main>
      </div>  
    );
  }
}

export default DetailPage;