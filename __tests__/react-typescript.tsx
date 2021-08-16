import React, { FC } from "react";

import fs from "fs";

import parser from "@typescript-eslint/eslint-plugin";

const MyComponent: FC = () => {
  console.log("parser", parser);
  console.log("fs", fs);
  return (
    <div>
      <a href="/" onClick={() => {}}>
        Perform action
      </a>
    </div>
  );
};

export default MyComponent;
