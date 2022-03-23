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
                    console.log(this.props.allSchedules[i].workingPeriods[j].workingWeek == this.props.selectedDay)
                    console.log(this.props.allSchedules[i].workingPeriods[j].workingTimes.length != 0)
                    if (this.props.allSchedules[i].workingPeriods[j].workingWeek == this.props.selectedDay) {
                        console.log(this.props.allSchedules[i].staffId)
                        switch (this.props.allSchedules[i].staffId) {
                            case 1:
                                availableDesigners.push("William");
                                break;
                            case 2:
                                availableDesigners.push("Jane");
                                break;
                            case 3:
                                availableDesigners.push("Mark");
                                break;
                        }
                    }
                }
            }
        }

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