import React from "react";
import { Spring, animated } from "react-spring";

export default ({ children, toggle }) => (
  <Spring
    from={{
      transform: "rotate(0deg)",
    }}
    to={{
      transform: `rotate(${toggle ? 0 : 90}deg)`,
    }}
  >
    {(styles) => <div>{children}</div>}
  </Spring>
);
