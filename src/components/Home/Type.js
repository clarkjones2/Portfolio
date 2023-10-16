import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
<<<<<<< HEAD
          "Clark",
          "Jones",
=======
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
>>>>>>> 5e749e52305057e4a89786ce27be80c6a18698fe
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
