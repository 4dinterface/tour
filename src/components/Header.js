import React, { Component } from 'react';

class Header extends Component {  
  constructor(){
    super();
    this.state={
        search:""
    }
  }  

  onSearch(){      
    this.props.onFilter(this.state);
  }  

  onChangeSearch(e){
    this.setState({
        search: e.target.value
    })  
    console.log(e.target.value);
  }

  render() {
    return (          
        <header>   
            <nav className="navbar fixed-top navbar-toggleable-md navbar-dark scrolling-navbar double-nav">            

                <div className="float-left">               
                    <form>    
                        <div className="row" style={{height:60}}>                        
                            <div className="col-md-4">
                                <div className="md-form">
                                    <input type="text" id="form41" className="form-control" onChange={this.onChangeSearch.bind(this)} value={this.state.search}/>
                                    <label htmlFor ="form41" className="">Example label</label>                    
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="md-form">
                                    <input placeholder="Дата вылета" type="date" className="form-control"/>                                
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="md-form">                                                     
                                    <div style={{padding:7, background:"green"}} onClick={_=>this.onSearch()}> SEARCH </div>
                                </div>
                            </div>                           

                        </div>                    
                    </form>
                </div>

                <ul className="nav navbar-nav nav-flex-icons ml-auto">                                        
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light" data-toggle="modal" data-target="#modal-contact"><i className="fa fa-envelope"></i><span className="hidden-sm-down"> Contact</span></a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light"><i className="fa fa-linkedin"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light"><i className="fa fa-snapchat-ghost"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light"><i className="fa fa-instagram"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light"><i className="fa fa-google-plus"></i></a>
                    </li>
                </ul>

            </nav>            
        </header>
    );
  }
}

//console.log("header");-
export default Header;