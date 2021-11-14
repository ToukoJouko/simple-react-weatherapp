import React from "react";

const ErrorMessage = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className="flex justify-center items-center text-4xl font-bold text-red-700 animate-fade">
      {message}
    </div>
  );
};

export default ErrorMessage;
