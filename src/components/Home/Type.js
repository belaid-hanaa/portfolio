import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analyst",
          "Data Engineer",
          "AI Developer",
          "Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}
export default Type;
