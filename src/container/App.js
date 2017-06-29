import React, { Component } from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import TravelsList from '../components/Search/TravelsList';
import TravelsFilter from '../components//Search/TravelsFilter';

import {connect} from 'react-redux';
import {searchTravel, setTravelFilter} from "../actions/index";

class App extends Component {

  onSearchTravel(params){
    alert(params);
  }

  render() {
    return (
      <div>
        <Header onSearch={ param=>this.onSearchTravel(param) }/>

        <main>          
          <div className="container">   
              <Slider/>                                        
              <div className="row">
                  <TravelsList/>
                  <TravelsFilter/>
              </div>            
          </div>          
        </main>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.searchTours
  };
}

connect(mapStateToProps)(App);

export default App;