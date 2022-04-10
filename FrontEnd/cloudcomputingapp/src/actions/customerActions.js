import axios from "axios";
import { CREATE_CUSTOMER, CUSTOMER_ERROR } from "./types";

export const createCustomer = (customer) => async dispatch => {
    try {
        const res = await axios.post("http://ec2-54-162-125-71.compute-1.amazonaws.com:8080/customer/save", customer);
        dispatch({
            type: CREATE_CUSTOMER,
            payload: { message: customer.customerName + " has been successfully saved." }
        });
    } catch (err) {
        dispatch({
            type: CUSTOMER_ERROR,
            payload: err.response.data
        });
    }
}