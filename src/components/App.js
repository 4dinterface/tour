import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import TravelsList from './Search/TravelsList';
import TravelsFilter from './Search/TravelsFilter';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
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

export default App;