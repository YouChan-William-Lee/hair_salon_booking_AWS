import { useState } from 'react';
import DatePicker from 'sassy-datepicker';

export default function Calendar() {
    const [date, setDate] = useState(new Date());
    const onChange = newDate => {
        setDate(newDate);
        selectedDate = newDate
    };
    var today = new Date();
    var this_year = today.getFullYear();
    var this_month = today.getMonth();
    var selectedDate

    return <DatePicker value={selectedDate} onChange={onChange} minDate={today} maxDate={new Date(this_year, this_month+1, 0)} />;
}