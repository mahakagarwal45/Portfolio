import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Software Developer",
          "Frontend Developer",
          "Backend Developer",
          "Machine Learning Enthusiast",
          "MERN Stack Developer",
          "Competitive Programmer",
          "AI & DL Explorer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
