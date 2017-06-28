import React, { Component } from 'react';
import Header from '../Header';

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
                <section>
                  <h3><strong>Перелет</strong></h3>                                              
                  <hr/>
                  <table style={{width:"100%"}}>
                    <tbody>
                      <tr>
                        <td>
                           <span> 04:20 </span> <br/> 
                          29.06.17, Чт. <br/> 
                          VKO  Москва
                        </td>    

                        <td>
                          <img src="http://lifestylerelief.com/images/travel.png" style={{width:"32px",height:"32px"}}/>
                        </td>   

                        <td>
                          <span>- - - <br/> </span> <br/>  28.06.17, <br/> Ср. AYT  Анталия
                        </td>   

                        
                        
                        <td>
                          <i className="airlineLogo" style={{backgroundImage:"url('//gate.travelata.ru/photos/airlines/295.png')"}}> </i>
                        </td>  

                        <td>
                          <span> 04:20 </span> <br/> 
                          29.06.17, Чт. <br/> 
                          VKO  Москва
                        </td>    

                        <td>
                          <img src="http://lifestylerelief.com/images/travel.png" style={{width:"32px",height:"32px"}}/>
                        </td>  

                        <td>
                        <span>- - - <br/> </span> <br/>  28.06.17, <br/> Ср. AYT  Анталия
                        </td>    
                        
                        <td>
                          <i className="airlineLogo" style={{backgroundImage:"url('//gate.travelata.ru/photos/airlines/295.png')"}}> </i>
                        </td>  

                      </tr>
                    </tbody>
                  </table>  
                  <hr/>    
                </section>                                                  

                <br/>              
                

                <h3><strong>Отель</strong></h3>
                <div className="row">                  
                  <img src="http://www.intrust-tour.ru/images/hotels/kusadasi/1128_image_2.jpg" className="col-md-6" alt="" style={{height:"300px"}}/>
                  <div className="col-md-4">
                    <p>
                      Proin tempor id mauris vulputate mattis. Vivamus venenatis felis sed libero posuere. A interdum augue porttitor. 
                      Suspendisse eleifend euismod purus vel tempus. Duis fermentum sapien a justo imperdiet cursus. Etiam porta metus odio.
                    </p>
                  </div>                  
                </div>  
                
                
                <img src="http://www.intrust-tour.ru/images/hotels/kusadasi/1128_image_2.jpg"  alt="" style={{width:"150px", display:"inline-block"}}/>
                <img src="http://www.intrust-tour.ru/images/hotels/kusadasi/1128_image_2.jpg"  alt="" style={{width:"150px", display:"inline-block"}}/>

                <span style={{opacity:"0"}} >http://travelata.ru/turkey/resorts/alanya/hotels/sunside-beach-ex-blue-moon-beach-hotel-4.html#?fromCity=2&dateFrom=28.06.2017&dateTo=04.07.2017&nightFrom=7&nightTo=8&priceFrom=6000&priceTo=1000000&adults=2&meal=all&hot=true&asyncSearch=false&activeTab=tours</span>              
              </div>
            </div>
          </div>  
        </main>
      </div>  
    );
  }
}

export default DetailPage;