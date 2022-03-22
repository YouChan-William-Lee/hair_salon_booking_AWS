import axios from "axios";

export const createBooking = (customer, history) => async dispatch => {
    try {
        const res = await axios.post("https://cors-everywhere.herokuapp.com/http://bookmicroservice-env.eba-vvi3x9cs.ap-southeast-2.elasticbeanstalk.com/api/books/registerBooking", booking);
        history.push("/");
        history.push("/booking");
        dispatch({
            type: UPDATE_ERROR_STATUS,
            payload: { message: customer.customername + " has been successfully booked." }
        });

    } catch (err) {
        dispatch({
            type: ADD_BOOKING_ERROR,
            payload: err.response.data
        });
    }
}