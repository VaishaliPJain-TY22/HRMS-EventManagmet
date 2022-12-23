import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./modalStyles.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

function NewEventForm({
  newEventDetails,
  setNewEventDetails,
  error,
  setError,
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(newEventDetails, "mmmmmmm");
    console.log(error);
    console.log(newEventDetails.dept?.length , "&&&&&&&&")
  }, [newEventDetails, error]);

  const Today = new Date();
  const [value, setValue] = React.useState(dayjs(null));

  const handleDateChange = (newValue) => {
    setValue(newValue);
    error.eventDate = "";
    setNewEventDetails({ ...newEventDetails, eventDate: newValue });
  };

  const handleStartTimeChange = (newValue) => {
    setValue(newValue);
    error.eventStartTime = ""
    setNewEventDetails({ ...newEventDetails, eventStartTime: newValue });
  };

  const handleEndTimeChange = (newValue) => {
    setValue(newValue);
    // if(error.eventEndTime === ""){
      error.eventEndTime = ""
    // }
    setNewEventDetails({ ...newEventDetails, eventEndTime: newValue });

    // if(newValue === ""){
    //   error.eventEndTime = "empty error"
    // } else if(newEventDetails.eventEndTime.isBefore(newEventDetails.eventStartTime)){
    //   error.eventEndTime = "end time is before start time"
    // }else {
    //   error.eventEndTime = ""
    // }

  };

  const handleChange = (e) => {
    setNewEventDetails({ ...newEventDetails, [e.target.name]: e.target.value });
    // console.log(newEventDetails, "neweventdetails");
  };

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  const validate = (e) => {
    const temp = { ...error };
    if (e.target.name === "eventDescp") {
      if (newEventDetails.eventDescp === "") {
        // temp.name = true;
        temp.eventDescp = "description cannot be blank";
      } else {
        temp.eventDescp = "";
      }
    }

    if (e.target.name === "eventName") {
      if (newEventDetails.eventName === "") {
        // temp.name = true;
        temp.eventName = "Name cannot be blank";
      } else {
        temp.eventName = "";
      }
    }

    if (e.target.name === "dept") {
      // debugger
      if (newEventDetails.dept?.length === 0) {
        
        // temp.name = true;
        temp.dept = "Department cannot be blank";
      } else {
        temp.dept = "";
      }
    }

    if (e.target.name === "emps") {
      if (newEventDetails.emps?.length === 0) {
        console.log("validate funct entered");
        // temp.name = true;
        temp.emps = "Employees cannot be blank";
      } else {
        temp.emps = "";
      }
    }

    if (e.target.name === "eventDate") {
      // console.log("date error");

      if (newEventDetails.eventDate === null) {
        // temp.name = true;
        temp.eventDate = "date cannot be blank";
      } else {
        temp.eventDate = "";
      }
    }

    // if (e.target.name === "eventDate") {
    //   // console.log("date error");

    //   if (newEventDetails.eventDate === null) {
    //     // temp.name = true;
    //     temp.eventDate = "date cannot be blank";
    //   } else {
    //     temp.eventDate = "";
    //   }
    // }

    if (e.target.name === "eventVisibleTime") {
      if (newEventDetails.eventVisibleTime === "") {
        // temp.name = true;
        temp.eventVisibleTime = "Time cannot be blank";
      } else {
        temp.eventVisibleTime = "";
      }
    }

    if (e.target.name === "eventStartTime") {
      if (newEventDetails.eventStartTime === null) {
        // temp.name = true;
        temp.eventStartTime = "start time cannot be blank";
      } else {
        temp.eventStartTime = "";
      }
    }

    if (e.target.name === "eventEndTime") {
      if (newEventDetails.eventEndTime === null) {
        // temp.name = true;
        temp.eventEndTime = "end time cannot be blank";
      } 
      // else if((newEventDetails.eventEndTime.isBefore(newEventDetails.eventStartTime))){
      //     temp.eventEndTime = "end time is before start time ";
      //   }
       else {
        temp.eventEndTime = "";
      }
    }

      // if (newEventDetails.eventEndTime !== null && newEventDetails.eventStartTime !== null) {
      //   // temp.name = true;
      //   if(newEventDetails.eventEndTime.isBefore(newEventDetails.eventStartTime)){

      //     temp.eventEndTime = "end time is before start time ";
          
      //   }
      // } else {
      //   temp.eventEndTime = "";
      // }
    

    setError(temp);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <label>
            <span id="required">*</span> Event Name
          </label>
          <TextField
            error={Boolean(error.eventName)}
            id="eventName"
            name="eventName"
            value={newEventDetails.eventName}
            helperText={error.eventName}
            variant="outlined"
            placeholder="Enter the name of the event"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={validate}
            InputLabelProps={{ shrink: true }}
            fullWidth={true}
            className="textField"
            size="small"
          />
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid item xs={12}>
          <label>Event Description</label>
          <TextField
            error={Boolean(error.eventDescp)}
            id="eventDescp"
            name="eventDescp"
            value={newEventDetails.eventDescp}
            helperText={error.eventDescp}
            variant="outlined"
            placeholder="Enter the description of the event"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={validate}
            InputLabelProps={{ shrink: true }}
            fullWidth={true}
            className="textField"
            size="small"
          />
        </Grid>
<br/><br/><br/><br/>
        <Grid item xs={6}>
          <label>
            <span id="required">*</span>Department
          </label>

          <Autocomplete
          multiple
            value={newEventDetails.dept}
            onChange={(event, newValue) => {
              setNewEventDetails({ ...newEventDetails, dept: newValue });
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={top100Films}
            getOptionLabel={(option) => option.label ?? ""}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="--select--"
                size="small"
                onBlur={validate}
                helperText={error.dept}
                error={Boolean(error.dept)}
                name="dept"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                fullWidth={true}
              />
            )}
            // isOptionEqualToValue={(option, value) => option.code === value}
          />
        </Grid>
        <Grid item xs={6}>
          <label>
            <span id="required">*</span>Select Employees
          </label>
          <Autocomplete
          multiple
            value={newEventDetails.emps}
            onChange={(event, newValue) => {
              setNewEventDetails({ ...newEventDetails, emps: newValue });
            }}
            id="controllable-states-demo"
            options={top100Films}
            getOptionLabel={(option) => option.label ?? ""}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="--select--"
                size="small"
                onBlur={validate}
                helperText={error.emps}
                error={Boolean(error.emps)}
                name="emps"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                fullWidth={true}
                // value={newEventDetails.emps}
              />
            )}
            // isOptionEqualToValue={(option, value) => option.code === value}
          />
          {/* <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            onChange={(e, val) => {
              setNewEventDetails({ ...newEventDetails, emps: val.title });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                name="emps"
                variant="outlined"
                placeholder="--select--"
                InputLabelProps={{ shrink: true }}
                fullWidth={true}
                error={Boolean(error.emps)}
                value={newEventDetails.emps}
                helperText={error.emps}
                onBlur={validate}
                
              />
            )}
          /> */}
        </Grid>
        <Grid item xs={6}>
          <label>
            <span id="required">*</span>Date
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              inputFormat="DD/MM/YYYY"
              variant="outlined"
              // placeholder="--select--"
              InputLabelProps={{ shrink: true }}
              // fullWidth={true}
              onChange={handleDateChange}
              value={newEventDetails.eventDate}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  name="eventDate"
                  error={Boolean(error.eventDate)}
                  helperText={error.eventDate}
                  onBlur={validate}
                />
              )}
              InputAdornmentProps={{
                position: "end",
                sx: { borderLeft: "1px solid gray", height: "auto" },
              }}
              className="border"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <label>
            <span id="required">*</span> Event Visible Time
          </label>
          <TextField
            error={Boolean(error.eventVisibleTime)}
            id="eventVisibleTime"
            name="eventVisibleTime"
            value={newEventDetails.eventVisibleTime}
            helperText={error.eventVisibleTime}
            variant="outlined"
            placeholder="Type in hours"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={validate}
            InputLabelProps={{ shrink: true }}
            fullWidth={true}
            className="textField"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <label>
            <span id="required">*</span> Start Time
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              value={newEventDetails.eventStartTime}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  error={Boolean(error.eventStartTime)}
                  helperText={error.eventStartTime}
                  onBlur={validate}
                  name="eventStartTime"
                />
              )}
              variant="outlined"
              // placeholder="--select--"
              InputLabelProps={{ shrink: true }}
              // fullWidth={true}

              onChange={handleStartTimeChange}
              InputAdornmentProps={{
                position: "end",
                sx: { borderLeft: "1px solid gray", height: "auto" },
              }}
              className="border"
              size="small"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <label>
            <span id="required">*</span> End Time
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              value={newEventDetails.eventEndTime}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  error={Boolean(error.eventEndTime)}
                  helperText={error.eventEndTime}
                  onBlur={validate}
                  name="eventEndTime"
                />
              )}
              variant="outlined"
              // placeholder="--select--"
              InputLabelProps={{ shrink: true }}
              // fullWidth={true}

              onChange={handleEndTimeChange}
              InputAdornmentProps={{
                position: "end",
                sx: { borderLeft: "1px solid gray", height: "auto" },
              }}
              className="border"
              sx={{ width: "100%" }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <span>
            Automated Mail to Selected Employees:
            <Switch />
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

const top100Films = [
  { id: "1", label: "The Shawshank Redemption", year: 1994 },
  { id: "2", label: "ABC", year: 1994 },
  { id: "3", label: "XYZ", year: 1994 },
  { id: "4", label: "LMN", year: 1994 },
  { id: "5", label: "PQR", year: 1994 },
  { id: "6", label: "NOP", year: 1994 },
];

export default NewEventForm;
