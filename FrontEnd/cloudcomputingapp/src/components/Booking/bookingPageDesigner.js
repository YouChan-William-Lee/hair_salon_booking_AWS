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
    }

    componentDidUpdate() {
        if (this.props.selectedDate) {
            this.state.selectedDesigner = "designer";
        }
    }

    render() {
        var availableDesigners = [];
        for (var i = 0; i < this.props.allSchedules.length; i++) {
            // Firstly check whether the designer does the selected service
            if (this.props.allSchedules[i].hairCutTypes.includes(this.props.selectedService)) {
                for (var j = 0; j < this.props.allSchedules[i].workingPeriods.length; j++) {
                    // Secondly check whether the designer works on the selected day
                    if (this.props.allSchedules[i].workingPeriods[j].workingWeek === this.props.selectedDay) {
                        availableDesigners.push(this.props.allSchedules[i].staffName);
                    }
                }
            }
        }

        return (
            <div>
                <div className="d-flex justify-content-center my-3">
                    <form>
                        <select value={this.state.selectedDesigner} className="form-select bg-dark text-white p-2" name="selectedDesigner" onChange={this.onChange}>
                            <option value="designer">DESIGNER</option>
                            {availableDesigners.map(designer => (
                                <option key={designer} value={designer}>{designer}</option>
                                ))}
                        </select>
                    </form>
                </div>
                {this.state.selectedDesigner !== '' && this.state.selectedDesigner !== "designer"?
                    <div>
                        <BookingPageTime selectedDate={this.props.selectedDate}
                                         selectedYearMonthDate={this.props.selectedYearMonthDate}
                                         selectedDay={this.props.selectedDay}
                                         selectedService={this.props.selectedService}
                                         selectedDesigner={this.state.selectedDesigner}
                                         selectedTime="time"
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