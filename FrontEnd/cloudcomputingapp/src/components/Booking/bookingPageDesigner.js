import React, {Component} from 'react';
import BookingPageTime from "./bookingPageTime"
import "../../styleSheets/bookingPage.css"

class BookingPageDesigner extends Component {
    constructor() {
        super();

        this.state={
            selectedDate: '',
            selectedService: '',
            selectedDesigner: '',
            selectedDesignerId: '',
            allSchedules: []
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
        var availableDesigners = [];
        for (var i = 0; i < this.props.allSchedules.length; i++) {
            // Firstly check whether the designer does the selected service
            if (this.props.allSchedules[i].hairCutTypes.includes(this.props.selectedService)) {
                for (var j = 0; j < this.props.allSchedules[i].workingPeriods.length; j++) {
                    // Secondly check whether the designer works on the selected day
                    if (this.props.allSchedules[i].workingPeriods[j].workingWeek == this.props.selectedDay) {
                        availableDesigners.push(this.props.allSchedules[i].staffName);
                    }
                }
            }
        }
        var staffId;

        return (
            <div>
                <div className="d-flex justify-content-center my-3">
                    <form onSubmit={this.onSubmit.bind(this)} action="create-profile.html">
                        <select className="form-select bg-dark text-white p-2" name="selectedDesigner" onChange={this.onChange}>
                            <option value="designer" selected>DESIGNER</option>
                            {availableDesigners.map(designer => (
                                <option value={designer}>{designer}</option>
                                ))}
                        </select>
                    </form>
                </div>
                {this.state.selectedDesigner != '' ?
                    <div>
                        <BookingPageTime selectedDate={this.props.selectedDate}
                                         selectedYearMonthDate={this.props.selectedYearMonthDate}
                                         selectedDay={this.props.selectedDay}
                                         selectedService={this.props.selectedService}
                                         selectedDesigner={this.state.selectedDesigner}
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

export default BookingPageDesigner;