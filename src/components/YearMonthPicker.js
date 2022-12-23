import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function YearMonthPicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
      <DatePicker
        variant="inline"
        openTo="year"
        views={["year", "month"]}
        InputProps={{ disableUnderline: true }}
        
        value={selectedDate}
        onChange={handleDateChange}
      />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default YearMonthPicker;