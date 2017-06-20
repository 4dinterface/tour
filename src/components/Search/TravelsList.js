import React, { Component } from 'react';
import TravelsListItem from './TravelsListItem';

class TravelsList extends Component {  
  render() {
    var data=[1,2,3,4,5,6,7,8,9,10];
    
    var listItems = data.map(item=><TravelsListItem item={item}/>)  ;
    console.log(listItems);

    return (       
            <div className="col-lg-8 col-md-12">                   
                <h2 className="main-heading">Browsing: <strong>Travels</strong></h2>                    
                    <section className="section extra-margins">
                        {listItems}
                    </section>

                    <nav className="wow fadeIn" data-wow-delay="0.3s" style={{visibility: "visible", animationDelay: "0.3s", animationName:"fadeIn"}} >
                        <ul className="pagination pg-darkgrey flex-center pb-3">
                            <li className="page-item">
                                <a className="page-link waves-effect waves-effect" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>

                            <li className="page-item active"><a className="page-link waves-effect waves-effect">1</a></li>
                            <li className="page-item"><a className="page-link waves-effect waves-effect">2</a></li>
                            <li className="page-item"><a className="page-link waves-effect waves-effect">3</a></li>
                            <li className="page-item"><a className="page-link waves-effect waves-effect">4</a></li>
                            <li className="page-item"><a className="page-link waves-effect waves-effect">5</a></li>

                          
                            <li className="page-item">
                                <a className="page-link waves-effect waves-effect" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
               
    );
  }
}

export default TravelsList;