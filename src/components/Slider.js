import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (                          
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
                                <a href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html#!"><img src="./temp_files/img (70).jpg" className="img-fluid" alt=""/></a>
                            </div>                            

                            <div className="carousel-item">
                                <a href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html#!"><img src="./temp_files/img (103).jpg" className="img-fluid" alt=""/></a>
                            </div>

                            <div className="carousel-item">
                                <a href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html#!"><img src="./temp_files/img (72).jpg" className="img-fluid" alt=""/></a>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html#carousel-example-1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html#carousel-example-1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>                
            </div>    
    );
  }
}

//console.log("header");-
export default Slider;