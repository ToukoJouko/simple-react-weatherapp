import React from "react";

const Weatherform = (props) => {
  return (
    <div className="flex flex-row justify-center items-center mt-16 mb-8">
      <form onSubmit={props.searchCity}>
        <div>
          <input
            className="w-80 h-12 p-2 border-4 border-indigo-900 outline-none rounded-l-lg font-bold no-underline"
            placeholder="Search by city..."
            value={props.cityName}
            onChange={props.handleChange}
          />
          <button
            className="w-24 h-12 border-4 border-indigo-900 border-l-0 border-top-4 rounded-r-lg bg-white font-bold hover:bg-blue-300 hover:text-white transition duration-500 ease-in-out"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Weatherform;
