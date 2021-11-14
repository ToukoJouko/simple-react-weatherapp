import React from "react";

const CurrentWeather = (props) => {
  return (
    <div className="flex space-x-8 justify-center items-center animate-fade mb-8">
      <div className="inline-block">
        <div className="flex text-6xl font-semibold">
          <h1>
            {props.city} {props.country}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="inline-block">
            <img alt="" src={props.icon}></img>
          </div>
          <div className="inline-block">
            <h2 className="flex justify-center text-6xl">
              {props.temperature}
            </h2>
            <div className="text-2xl">{props.description}</div>
          </div>
        </div>
      </div>
      <div className="inline-block p-9 space-y-9 text-4xl align-top rounded-lg bg-blue-300 bg-opacity-10">
        <div>{props.humidity}</div>
        <div>{props.windSpeed}</div>
        <div>{props.pressure}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
