import React from "react";

const About = () => {
  const PrintAmmar = (name) => {
    console.log("I'm " + name);
  };

  return (
    <div>
      About
      <button onClick={() => PrintAmmar("ammar")}> Print </button>
    </div>
  );
};
export default About;
