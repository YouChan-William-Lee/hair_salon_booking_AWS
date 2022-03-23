import React, {Component} from 'react';
import BookingPageDesigner from "./bookingPageDesigner"
import "../../styleSheets/bookingPage.css"

class BookingPageService extends Component {
    constructor() {
        super();

        this.state={
            selectedService: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newBooking = {
            date: this.state.date,
            designer: this.state.designer,
            service: this.state.service
        };
        this.props.createNewBooking(newBooking, this.props.historyPath);
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center my-3">
                    <form onSubmit={this.onSubmit.bind(this)} action="create-profile.html">
                        <select className="form-select bg-dark text-white p-2" name="selectedService" onChange={this.onChange}>
                            <option value="service" selected>SERVICE</option>
                            <option value="MENS_HAIR_CUT" >Mens Hair Cut</option>
                            <option value="WOMENS_HAIR_CUT" >Womens Hair Cut</option>
                            <option value="MENS_PERM" >Mens Perm</option>
                            <option value="WOMENS_PERM" >Womens Perm</option>
                            <option value="TREATMENT" >Treatment</option>
                        </select>
                    </form>
                </div>
                {this.state.selectedService != '' ?
                    <div>
                        <BookingPageDesigner selectedDate={this.props.selectedDate}
                                             selectedDay={this.props.selectedDay}
                                             selectedService={this.state.selectedService}
                                             allSchedules={this.props.allSchedules}
                                             historyPath={this.props.history} />
                    </div>
                    :
                    <div></div>
                }
            </div>
        );
    }
}

export default BookingPageService;