import React, { Component } from 'react';

class TravelsFilter extends Component {
  render() {
    return (
                <div className="col-lg-4 col-md-12">
                    <section className="archive wow fadeIn" data-wow-delay="0.3s" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeIn"}}>                       
                       <form> 
                            <div className="row">                                                        
                                <div className="col-md-12 text-left">
                                    
                                <div className="row">                                                        
                                    <div className="col-md-6 text-center">
                                        <div className="md-form form-sm">
                                            <input type="text" id="form1" className="form-control"/>
                                            <label htmlFor="form1" className="">От</label>
                                        </div>
                                    </div>            
                                    <div className="col-md-6 text-center">
                                        <div className="md-form form-sm">
                                            <input type="text" id="form1" className="form-control"/>
                                            <label htmlFor="form1" className="">До</label>
                                        </div>
                                    </div>            
                                </div>

                                <div className="row" style={{marginBottom:"30px"}}>    
                                    <div className="btn-group" style={{width:"100%"}}>
                                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"100%"}}>Размещение</button>

                                        <div className="dropdown-menu" style={{width:"100%"}}>
                                            <a className="dropdown-item" href="#">Отель</a>
                                            <a className="dropdown-item" href="#">Хостел</a>
                                            <a className="dropdown-item" href="#">мотель</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Любой</a>
                                        </div>
                                    </div>
                                </div>

                                <label>Количество-звёзд</label>

                                <div className="row">                                                        
                                    <div className="col-md-2 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="checkbox1"/>
                                            <label htmlFor="checkbox1">5*</label>
                                        </fieldset>
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="checkbox1"/>
                                            <label htmlFor="checkbox1">4*</label>
                                        </fieldset>
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="checkbox1"/>
                                            <label htmlFor="checkbox1">3*</label>
                                        </fieldset>
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="checkbox1"/>
                                            <label htmlFor="checkbox1">2*</label>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="checkbox1"/>
                                            <label htmlFor="checkbox1">1*</label>
                                        </fieldset>
                                    </div>            
                                </div>

                                <label>Линия</label>

                                <div className="row">                                                        
                                    <div className="col-md-2 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="f-line1"/>
                                            <label htmlFor="checkbox1">1я</label>
                                        </fieldset>
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="f-line2"/>
                                            <label htmlFor="checkbox1">2я</label>
                                        </fieldset>
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="f-line3"/>
                                            <label htmlFor="checkbox1">3я</label>
                                        </fieldset>
                                    </div>
                                </div>
                                
                                <label>Пляж</label>
                                <div className="row">                                                                                            
                                    <div className="col-md-4 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="p-1"/>
                                            <label htmlFor="p-1">песчанный</label>
                                        </fieldset>
                                    </div>

                                    <div className="col-md-4 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="p-2"/>
                                            <label htmlFor="p-2">галечный</label>
                                        </fieldset>
                                    </div>

                                    <div className="col-md-4 text-center">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="p-3"/>
                                            <label htmlFor="p-3">собственный</label>
                                        </fieldset>
                                    </div>
                                </div>
                                
                                <div className="row" style={{marginBottom:"30px"}}>    
                                    <div className="btn-group" style={{width:"100%"}}>
                                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"100%"}}>Питание</button>

                                        <div className="dropdown-menu" style={{width:"100%"}}>
                                            <a className="dropdown-item" href="#">Вс включено</a>
                                            <a className="dropdown-item" href="#">Всё включено ультра</a>
                                            <a className="dropdown-item" href="#">Завтрак</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Любой</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">                                                        
                                    <div className="col-md-12 text-left">
                                        <fieldset className="form-group">
                                            <input type="checkbox" id="wifi"/>
                                            <label htmlFor="wifi">Беспланый WI-FI</label>
                                        </fieldset>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                        
                    </section>
                    
                    <br/><br/>
                    
                    <section className="wow fadeIn" style={{visibility: "visible", animationName: "fadeIn",marginTop:40}}>                    
                        <div className="card author-card">
                            <div className="card-up">
                                <img src="./temp_files/img (31).jpg" className="img-fluid" alt="up"/>
                            </div>

                            <div className="avatar">
                                <img src="./temp_files/img (4).jpg" className="img-fluid img-author" alt="up"/>
                            </div>

                            <div className="card-block">                               
                                <h4 className="card-title"><strong>Марина</strong></h4>
                                <p> Привет. Я с радостью отвечу на ваши любые вопросы.</p>

                                <a className="icons-sm drib-ic"><i className="fa fa-dribbble"> </i></a>                                
                                <a className="icons-sm ins-ic"><i className="fa fa-instagram"> </i></a>
                                <a className="icons-sm pin-ic"><i className="fa fa-pinterest"> </i></a>
                            </div>

                        </div>
                        
                    </section>
                                                                                                                                          
                </div>
    );
  }
}


/*TravelsFilter = reduxForm({
  travelsFilter: 'travelsFilter' // a unique name for this form
})(TravelsFilter);*/

export default TravelsFilter;

/*
 <div class="divider-new wow fadeIn" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;">
                        <h3>Фильтр</h3>
                    </div>-->
*/

