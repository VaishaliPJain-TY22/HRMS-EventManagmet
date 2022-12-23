import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function EventDetails({
  setToggle,
  eventName,
  eventDescp,
  eventDetails,
  selected,
}) {
  const handleNavigate = () => {
    console.log("back");
    setToggle(true);
  };

  useEffect(() => {
    // console.log(eventDetails.eventId, "eventId");
    // console.log(selected, "selected");

    {
      //   eventDetails.find((id) => console.log(id.eventId, "$$"));
    }

    {
      eventDetails.map((event) => {
        if (event.eventId === selected) {
          console.log(event.eventName, "eventName");
          console.log(event.eventStartTime, "eventName");
        }
      });
    }
  }, [eventDetails]);

  return (
    <div>
      {eventDetails.map((event) => {
        return (
          event.eventId === selected && (
            <div>
              <div className="cal_nav">
                <ChevronRightIcon
                  onClick={() => handleNavigate()}
                  style={{ transform: "rotate(180deg)" }}
                />
                <span className="event_span"> {event.eventName} </span>
              </div>
              <div className="event_container">
                <div className="event">
                  <h4 style={{ marginBottom: "1px" }}>Event Title</h4>
                  <p style={{ marginTop: "0px", fontSize: "15px" }}>
                    {event.eventName}
                  </p>

                  <h4 style={{ marginBottom: "1px" }}>Description</h4>
                  <p style={{ marginTop: "0px", fontSize: "11px" }}>
                    {event.eventDescp}
                  </p>

                  <h4 style={{ marginBottom: "1px" }}>Event Date</h4>
                  <p style={{ marginTop: "0px", fontSize: "15px" }}>
                  {event.eventDate}
                  </p>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <h4 style={{ marginBottom: "1px" }}>Start Time</h4>
                      <p style={{ marginTop: "0px", fontSize: "15px" }}>
                      {event.eventStartTime}
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      <h4 style={{ marginBottom: "1px" }}>End Time</h4>
                      <p style={{ marginTop: "0px", fontSize: "15px" }}>
                      {event.eventEndTime}
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          )
        );
      })}
      
    </div>
  );
}

export default EventDetails;
