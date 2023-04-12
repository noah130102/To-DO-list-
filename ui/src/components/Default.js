import React, { useState } from "react";
import Home from "./Home";

const Default = () => {
  const [showHome, setShowHome] = useState(false);

  const handleClick = () => {
    window.location.href = "/Home";
  };

  return (
    <div className="justify-content-center">
      <div className="p-3 text-center text-success ">karan</div>
      <div className="p-3 text-center">
        <button href="/Home" className="btn btn-primary" onClick={handleClick}>
          Click Me ..!!
        </button>
      </div>
      {showHome && <Home/>}
    </div>
  );
};

export default Default;
