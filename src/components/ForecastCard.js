import React from "react";

const ForecastCard = (props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-300 bg-opacity-40 rounded-lg animate-fade">
      <div>{props.day}</div>
      <div>{props.time}</div>
      <div>
        <img alt="" src={props.icon}></img>
      </div>
      <div>{props.temperature}</div>
    </div>
  );
};

export default ForecastCard;
