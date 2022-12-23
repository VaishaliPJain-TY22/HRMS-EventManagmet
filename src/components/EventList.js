import React, {useEffect} from 'react'
import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function EventList( {setToggle, eventDetails, setSelected}) {
    const handleNavigate = (id) => {
        console.log(id,  "clicked")
        setToggle(false)
        setSelected(id)
    }

    useEffect(() => {
      
    console.log(eventDetails, "eventDetails" )
    
      
    }, [eventDetails])
    

  return (
    <div>
        <div className="cal_nav">
              <span className="event_span">Event List</span>
            </div>
        {eventDetails.map((event) => (
           <div>
            <div className="event_container">
              <div className="event">
                <Grid container spacing={1}>
                  <Grid item xs={1} className="sno">
                    <b>{event.eventId}</b>
                  </Grid>
                  <Grid item xs={10} className="event_content">
                    <h5 className="event_title">{event.eventName} </h5>
                    <p className="event_descp">
                      {event.eventDescp}
                    </p>
                  </Grid>
                  <Grid item xs={1} className="button">
                    <ChevronRightIcon  onClick={() => handleNavigate(event.eventId)}/>
                  </Grid>
                </Grid>
              </div>
            </div>
            </div> 
        ))}
            

            
          </div>
  )
}

export default EventList