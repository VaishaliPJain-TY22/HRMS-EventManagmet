import React from 'react'

function CalendarDays() {
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

  return (
    <div className="table-content">

    </div>
  )
}

export default CalendarDays