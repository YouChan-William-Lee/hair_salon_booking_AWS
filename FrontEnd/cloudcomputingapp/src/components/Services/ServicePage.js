import React, {Component} from 'react';
import MENS_HAIR_CUT from "../../images/MENS_HAIR_CUT.jpg"
import MENS_PERM from "../../images/MENS_PERM.jpg"
import WOMENS_HAIR_CUT from "../../images/WOMENS_HAIR_CUT.jpg"
import WOMENS_PERM from "../../images/WOMENS_PERM.jpg"
import TREATMENT from "../../images/TREATMENT.jpg"
import "../../styleSheets/servicePage.css"

class ServicePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5 mb-5">
                    <div className="ml-5 row mt-5 mb-5">
                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={MENS_HAIR_CUT} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">MENS HAIR CUT</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$40</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={MENS_PERM} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">MENS PERM</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$80</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={WOMENS_HAIR_CUT} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">WOMENS HAIR CUT</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$80</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={WOMENS_PERM} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">WOMENS PERM</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$120</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" style={{width: '22rem'}}>
                                <img className="card-img-top servicePic" src={TREATMENT} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text display-6">TREATMENT</p>
                                    <p className="card-text lead">From</p>
                                    <p className="card-text lead">$100</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ServicePage;