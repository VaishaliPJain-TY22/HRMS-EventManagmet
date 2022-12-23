import React, { useState } from 'react'

function Calendar() {

    const [weekdays, setWeekday] = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
    const [months, setMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'])
    const currentDay = new Date()

  return (
    <div>
        <div className="calendar">
      <div className="calendar-header">
        <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}
        </h2>
      </div>
      <div className="calendar-body">
        <div className="table-header">
          {
            weekdays.map((weekday) => {
              return <div className="weekday"><p>{weekday}</p></div>
            })
          }
        </div>
        <div className="table">
        </div>
      </div>
    </div>
    </div>
  )
}

export default Calendar