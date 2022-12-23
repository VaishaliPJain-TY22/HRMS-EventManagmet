import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./modalStyles.css";
import NewEventForm from "./NewEventForm";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import Alert from "@mui/material/Alert";
import { ToastContainer, toast } from "react-toastify";
import { el } from "date-fns/locale";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "500px",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  //   boxShadow: 24,
  boxShadow: "0px 0px 5px 5px #9fcce0",
  //   backgroundColor: "#9FCCE066",
  //   p: 4,
  padding: "5px",
};

export default function ModalComponent({ open, setOpen }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handleReset();
  };
  const [newEventDetails, setNewEventDetails] = useState({
    eventName: "",
    eventDescp: "",
    dept: [],
    emps: [],
    eventDate: null,
    eventVisibleTime: "",
    eventStartTime: null,
    eventEndTime: null,
  });

  const [error, setError] = useState({
    eventName: "",
    eventDescp: "",
    dept: "",
    emps: "",
    eventDate: "",
    eventVisibleTime: "",
    eventStartTime: "",
    eventEndTime: "",
  });

  const handleReset = () => {
    setNewEventDetails({
      eventName: "",
      eventDescp: "",
      dept: [],
      emps: [],
      eventDate: null,
      eventVisibleTime: "",
      eventStartTime: null,
      eventEndTime: null,
    });

    setError({
      eventName: "",
      eventDescp: "",
      dept: "",
      emps: "",
      eventDate: "",
      eventVisibleTime: "",
      eventStartTime: "",
      eventEndTime: "",
    });
  };

  const [timeError, setTimeError] = useState(false);

  useEffect(() => {
    console.log(newEventDetails.eventStartTime, "start time");
    console.log(newEventDetails.eventEndTime, "end time");
  }, [newEventDetails.eventStartTime, newEventDetails.eventEndTime]);

  // const handleSubmit = () => {
  //   const valid = Object.values(newEventDetails);
  //   let isValid = true;
  //   for (let i = 0; i < valid.length; i++) {
  //     if (valid[i] === "") {
  //       isValid = false;
  //       break
  //     }
  //     console.log(isValid, "error");
  //   }
  // };

  const handleSubmit = () => {
    const errorValid = Object.values(error);
    const dataValid = Object.values(newEventDetails);
    let isValid = true;

    console.log(newEventDetails.eventName, "newEventDetails.eventName")
    console.log(newEventDetails.eventDescp, "newEventDetails.eventDescp")
    console.log(newEventDetails.dept, "newEventDetails.dept")
    console.log(newEventDetails.emps, "newEventDetails.emps")
    console.log(newEventDetails.eventDate, "newEventDetails.eventDate")
    console.log(newEventDetails.eventVisibleTime, "newEventDetails.eventVisibleTime")
    console.log(newEventDetails.eventStartTime, "newEventDetails.eventStartTime")
    console.log(newEventDetails.eventEndTime, "newEventDetails.eventEndTime")


    for (let i = 0; i < errorValid.length; i++) {
      if (errorValid[i] !== "") {
        isValid = false;
        console.log("error", isValid);
        break;
      }
    }

    if (newEventDetails.eventName === "") {
      setError({...error , eventName : "empty name" })
      error.eventName = "empty name";
      // toast.error("error");
      isValid = false;
    }

    if (newEventDetails.eventDescp === "") {
      setError({...error , eventDescp : "empty description" })

      error.eventDescp = "empty description";
      isValid = false;
    } 
    
    if (newEventDetails.dept?.length === 0) {
      setError({...error , dept : "empty departmanent" })

      error.dept = "empty dept";
      // toast.error("department is empty");
      isValid = false;
    } 
    
    if (newEventDetails.emps?.length === 0) {
      setError({...error , emps : "empty employuees" })

      error.emps = "empty employees";
      // toast.error("employees is empty");
      isValid = false;
    } 
    
    if (newEventDetails.eventDate === null) {
      setError({...error , eventDate : "empty date" })

      error.eventDate = "empty date";
      // toast.error("event date is empty");
      isValid = false;
    } 
    
    if (newEventDetails.eventVisibleTime === "") {
      setError({...error , eventVisibleTime : "empty event visible time" })

      error.eventVisibleTime = "empty visible time";
      // toast.error("event visible time is empty");
      isValid = false;
    } 
    
    if (newEventDetails.eventStartTime === null) {
      setError({...error , eventStartTime : "empty event start time" })

      error.eventStartTime = "start time is empty";
      // toast.error("event start time is empty");
      isValid = false;
    } 
    
    if (newEventDetails.eventEndTime === null) {
      setError({...error , eventEndTime : "empty event end time" })

      error.eventEndTime = "end time is empty";
      // toast.error("event end time is empty");
      isValid = false;
    } else if (
      newEventDetails.eventEndTime.isBefore(newEventDetails.eventStartTime)
    ) {
      setError({...error , eventEndTime : "endtime cannot be before starttime " })

      error.eventEndTime = "endtime cannot be before starttime ";
      // toast.error("endtime cannot be before starttime ");
      isValid = false;
    } else {
      isValid = true;
    }


    for (let i = 0; i < dataValid.length; i++) {
      if (dataValid[i] === "" || null) {
        isValid = false;
        console.log("dataerror", isValid);
        break;
      }
    }
    //   else if(newEventDetails.eventEndTime.isBefore(newEventDetails.eventStartTime)){
    //     error.eventEndTime = "endtime cannot be before starttime "
    //   }else{
    //     error.eventEndTime = ""
    //   }
    // }

    if (isValid) {
      console.log(newEventDetails.eventStartTime, "start time");
      console.log(newEventDetails.eventEndTime, "end time");

      // if(newEventDetails.eventStartTime  < newEventDetails.eventEndTime){
      //   console.log(`${newEventDetails.eventStartTime} is less than ${newEventDetails.eventEndTime}`)
      //   console.log("time error");
      // }
      console.log("no error", isValid);
      toast.success("Successfully entered data ");
      handleClose();
      handleReset();
    } else {
      // toast.error("some field(s) might be empty");
    }
  };

  // useEffect(() => {
  //   if(alert === true){
  //     setTimeout(() => {
  //       setAlert(false)
  //     }, 2000);
  //   }

  // }, [])

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            // Set 'open' to false, however you would do that with your particular code.
            setOpen(false);
          }
        }}
      >
        <Box sx={style}>
          <div className="box">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="title">
                New Event
                <span className="closeButton" onClick={handleClose}>
                  <CloseTwoToneIcon />
                </span>
              </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="modal_container">
                <NewEventForm
                  newEventDetails={newEventDetails}
                  setNewEventDetails={setNewEventDetails}
                  error={error}
                  setError={setError}
                />
              </div>
            </Typography>
            <Typography id="modal-actions" sx={{ mt: 2 }}>
              <div className="modal_actions">
                <Button
                  variant="outlined"
                  sx={{ marginRight: "15px" }}
                  onClick={handleReset}
                >
                  Clear Form
                </Button>
                <Button
                  variant="outlined"
                  sx={{ marginRight: "15px" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Typography>
          </div>
        </Box>
      </Modal>
      {/* {alert === true ? (<Alert variant="filled" severity="success">
                  Successfully Entered Data
                </Alert>) : null} */}
    </div>
  );
}
