import React, { Component } from 'react';
import Header from '../Header';

export default class AirSection extends Component {
  render() {
    return (    
                <section>
                  <h3><strong>Перелет</strong></h3>                                              
                  <table style={{borderTop:"1px solid #444", borderBottom:"1px solid #444", width:"100%"}} >
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
                </section>   
    )
  }
  
}
