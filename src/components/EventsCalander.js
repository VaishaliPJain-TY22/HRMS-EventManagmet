import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./EventCalander.css";
// import YearMonthPicker from "./YearMonthPicker";
import moment, { months } from "moment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EventList from "./EventList";
import EventDetails from "./EventDetails";
import ModalComponent from "./ModalComponent";

function EventsCalander() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [changeMonth, setChangeMonth] = useState(false);
  const [changeYear, setChangeYear] = useState(false);
  const [toggle, setToggle] = useState(true);
  // const [currentDay, setCurrentDay] = useState("");
  const [sun, setSun] = useState(false);
  let initial = moment.weekdaysShort();
  initial.push(initial.shift());
  let weekdayshort = initial;

  //   const [dateObject, setDateObject] = useState(() => () => moment())
  const [dateObject, setDateObject] = useState(moment());
  const allmonths = moment.months();
  const [daysinmonth, setDaysInMonth] = useState([]);

  const eventDetails = [
    {
      eventId: 1,
      eventName: "Christmas",
      eventDescp: `Christians celebrate Christmas Day as the anniversary of the 
      birth of Jesus of Nazareth, a spiritual leader whose teachings form the 
      basis of their religion.`,
      eventDate: "25th December 2022",
      eventStartTime:"9:30AM",
      eventEndTime:"6:30PM"
    },
    {
      eventId: 2,
      eventName: "New Year",
      eventDescp: `New Year is the time or day currently at which a new calendar
       year begins and the calendar's year count increments by one. Many cultures
        celebrate the event `,
      eventDate: "1st Jan 2023",
      eventStartTime:"12:00AM",
      eventEndTime:"11:59PM"
    },
    {
      eventId: 3,
      eventName: "Ugadi",
      eventDescp: `Ugadi or Yugadi, also known as Samvatsarādi is New Year's Day 
      according to the Hindu calendar and is celebrated in the states of Andhra 
      Pradesh, Telangana, `,
      eventDate: "22st Jan 2023",
      eventStartTime:"9:00AM",
      eventEndTime:"8:00PM"
    },
  ];

  const [selected, setSelected] = useState("")

  const eventName = "Event Name";
  const eventDescp = `Skype is software that enables the world's conversations. Millions of 
  individuals and businesses use Skype to make free video and voice one-to-one 
  and group calls, send instant messages and share files with other people on Skype. 
  You can use Skype on whatever works best for you – on your mobile, computer or tablet.`;

  //   let [month, setMonth] = useState(() => {});
  const firstDayOfMonth = () => {
    let firstDay = moment(dateObject).startOf("month").format("d");
    let dt = new Date(`${month()} 1, ${year()}`);
    let sun = dt.getDay();
    if (sun === 0) {
      setSun(true);
    }
    // console.log(weekdayshort, "weekdayshort");
    return firstDay;
  };

  let weekdayshortname = weekdayshort.map((day) => {
    return (
      <th key={`${day}day`} className="week-day">
        {day}
      </th>
    );
  });

  useEffect(() => {
    let blanks = [];
    if (sun === true) {
      for (let i = 0; i < firstDayOfMonth() + 6; i++) {
        blanks.push(<td className="calendar-day empty">{""}</td>);
      }
    } else
      for (let i = 0; i < firstDayOfMonth() - 1; i++) {
        blanks.push(<td className="calendar-day empty">{""}</td>);
      }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows
        cells = []; // empty container
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) {
        // when end loop we add remain date
        rows.push(cells);
      }
    });
    const daysinmonth1 = rows.map((d, i) => {
      return <tr key={`${i}tr2`}>{d}</tr>;
    });
    setDaysInMonth(daysinmonth1);
  }, [dateObject]);

  const month = () => {
    return dateObject.format("MMMM");
  };

  const year = () => {
    return dateObject.format("Y");
  };

  const currentDay = () => {
    return dateObject.format("D");
  };

  let daysInMonth = [];

  // console.log(today, "kkkk")
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  if (
    dateObject.month() === currentMonth &&
    dateObject.year() === currentYear
  ) {
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
      let today = d == currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={`${d} td`} className={`calendar-day ${today}`}>
          {d}
        </td>
      );
    }
  } else {
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
      console.log(dateObject, "eeeeeeeeee");
      // let today = d == currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={`${d} td`} className={`calendar-day`}>
          {d}
        </td>
      );
    }
  }

  const MonthList = (props) => {
    let months = [];
    props.data.map((data) => {
      months.push(
        <td
          key={data}
          onClick={(e) => {
            // console.log(data, "data");
            setMonth(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        // except zero index
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells); // add last row

    let monthlist = rows.map((d, i) => {
      return <tr key={`${i}tr1`}>{d}</tr>;
    });

    return (
      <div>
        <table>
          <thead>
            <tr key="tr-head">
              <th colSpan="4">Select a Month</th>
            </tr>
          </thead>
          <tbody>{monthlist}</tbody>
        </table>
      </div>
    );
  };

  const YearTable = (props) => {
    let months = [];
    let nextten = moment().set("year", props).add("year", 12).format("Y");

    const getDates = (startDate, stopDate) => {
      var dateArray = [];
      var currentDate = moment(startDate);
      var stopDate = moment(stopDate);
      while (currentDate <= stopDate) {
        dateArray.push(moment(currentDate).format("YYYY"));
        currentDate = moment(currentDate).add(1, "year");
      }
      return dateArray;
    };

    let twelveyears = getDates(props, nextten);

    twelveyears.map((data) => {
      months.push(
        <td
          key={`${data}data1`}
          className="calendar-month"
          onClick={(e) => {
            setYear(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return (
        <tr
          onClick={(e) => {
            e.stopPropagation();
            setChangeMonth(true);
            setChangeYear(false);
          }}
        >
          {d}
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th colSpan="4">Select a Year</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );
  };

  const setMonth = (month) => {
    let monthNo = allmonths.indexOf(month); // get month number
    let dateObject1 = Object.assign({}, dateObject);
    dateObject1 = moment(dateObject1).set("month", monthNo); // change month value
    setDateObject(dateObject1);
  };

  const setYear = (year) => {
    // let monthNo = allmonths.indexOf(month); // get month number
    let dateObject1 = Object.assign({}, dateObject);
    dateObject1 = moment(dateObject1).set("year", year); // change month value
    setDateObject(dateObject1);
  };

  return (
    <div
      className="calander_container"
      onClick={() => {
        setChangeMonth(false);
        setChangeYear(false);
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={8}
          className="calander_grid"
          style={{ marginTop: "15px" }}
        >
          <div className="cal_nav">
            <img src="./assets/Group48.svg" />
            <span className="event_span">Event Calendar</span>
            <div style={{ float: "right" }}>
              <span className="monthPicker">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setChangeMonth(true);
                    setChangeYear(false);
                  }}
                  style={{ fontSize: "30px", fontWeight: "500" }}
                >
                  {month()}
                </span>
                <div
                  id={
                    changeMonth !== true
                      ? "month_picker_box_hide"
                      : "month_picker_box_show"
                  }
                >
                  <MonthList data={allmonths} />
                </div>
              </span>

              <span className="yearPicker">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setChangeYear(true);
                    setChangeMonth(false);
                  }}
                  style={{ fontSize: "30px", fontWeight: "500" }}
                >
                  {year()}
                </span>
                <div
                  id={
                    changeYear !== true
                      ? "month_picker_box_hide"
                      : "month_picker_box_show"
                  }
                  style={{ marginLeft: "85px" }}
                >
                  <YearTable props={year()} />
                  {/* {showMonthTable && (
                    <MonthList data={moment.months()} />
                  )} */}
                </div>
              </span>
              <img
                src="./assets/arrow.svg"
                style={{
                  transform: "rotate(90deg)",
                  width: "20px",
                  height: "20px",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setChangeYear(true);
                  setChangeMonth(false);
                }}
              />
            </div>
          </div>
          <div>
            <button className="newEvent_btn" onClick={handleClickOpen}> +New Event</button>
            
          </div>
          <br />
          <br />
          <br />

          <div className="calander" style={{ style: "overflow-x:auto" }}>
            <table className="calendar-day">
              <thead>
                <tr>{weekdayshortname}</tr>
              </thead>
              <tbody>{daysinmonth.map((i) => i)}</tbody>
            </table>
          </div>
        </Grid>
        
        <Grid item xs={4} style={{ marginTop: "15px" }}>
          {toggle == true ? (
            <EventList
              setToggle={setToggle}
              setSelected={setSelected}
              eventDetails={eventDetails}
            />
          ) : (
            <EventDetails
              setToggle={setToggle}
              selected = {selected}
              eventName={eventName}
              eventDescp={eventDescp}
              eventDetails={eventDetails}
            />
          )}
        </Grid>
      </Grid>
       <ModalComponent  open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} />

    </div>
  );
}

export default EventsCalander;
