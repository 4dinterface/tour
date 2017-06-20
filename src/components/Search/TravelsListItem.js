import React, { Component } from 'react';

class TravelsListItem extends Component {
  render() {
    return (       
        <div className="row">

            <div className="col-md-5 mb-r">
                <div className="view overlay hm-white-slight">
                    <img src="./temp_files/img (56).jpg"/>
                    <a>
                        <div className="mask"></div>
                    </a>
                </div>
            </div>

            <div className="col-md-7 mb-r">                                
                <a href="https://mdbootstrap.com/live/_MDB/templates/Blog/Blog-Category-Page-1.html" className="light-blue-text"><h5><i className="fa fa-plane"></i>Travels</h5></a>
                <h4>This is a title of the news</h4>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est</p>
                <p>by <a><strong>Jessica Clark</strong></a>, 26/08/2016</p>
                <a className="btn btn-primary btn-rounded waves-effect waves-light">Read more</a>
            </div>
            
        </div>
    );
  }
}

export default TravelsListItem;