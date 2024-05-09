import React from "react";

function Days() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date().getDay();
  const dayName = dayNames[day];
  return dayName;
}

export default Days;
