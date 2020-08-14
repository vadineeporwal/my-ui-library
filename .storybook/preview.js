// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// };

import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/stories/shared/global";

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
