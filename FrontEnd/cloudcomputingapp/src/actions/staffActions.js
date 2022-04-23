import axios from "axios";
import { CREATE_STAFF_AND_SALON_SCHEDULE, STAFF_AND_SALON_SCHEDULE_ERROR } from "./types";

export const createStaffAndSalonSchedule = (staffAndSalonSchedule) => async dispatch => {
    try {
        const res = await axios.post("http://52.206.86.192:8080/staff/save", staffAndSalonSchedule);
        dispatch({
            type: CREATE_STAFF_AND_SALON_SCHEDULE,
            payload: { message: staffAndSalonSchedule.staffName + " has been successfully saved." }
        });
    } catch (err) {
        dispatch({
            type: STAFF_AND_SALON_SCHEDULE_ERROR,
            payload: err.response.data
        });
    }
}