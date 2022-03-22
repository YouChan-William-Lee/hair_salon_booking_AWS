import React, {Component} from 'react';

class BookingPage extends Component {
    constructor() {
        super();

        this.state = {
            date: '',
            designer: '',
            service: '',
            fee: '',
            currentDate: new Date()
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        let errors = this.state.errors;
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ errors, name: errors.name });
    }

    onSubmit(e) {
        e.preventDefault();
        const newBooking = {
            date: this.state.date,
            designer: this.state.designer,
            service: this.state.service,
            fee: this.state.fee
        };
        this.props.createNewBooking(newBooking, this.props.historyPath);
    }

    render() {
        const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"]
        var this_month = months[this.state.currentDate.getMonth()]
        var this_date = this.state.currentDate.getDate()
        var this_day = days[this.state.currentDate.getDay()]
        var this_year = this.state.currentDate.getFullYear()
        return (
            <div className="bookingpage">
                <br />
                <div className="display-4 text-center">
                    <h1>Booking</h1>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center my-3">
                    <form onSubmit={this.onSubmit.bind(this)} action="create-profile.html">
                        <select className="form-select bg-dark text-white p-2" name="date" onChange={this.onChange}>
                            <option value="1" selected>
                                {this_date + "/" + this_month + "/" + this_year + " " + this_day}
                            </option>
                            <option value="2" >{}</option>
                        </select>
                    </form>
                </div>
            </div>
        );
    }
}

export default BookingPage;