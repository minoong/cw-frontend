// src/Button.tsx
import { css } from "@emotion/css";
import { jsx } from "react/jsx-runtime";
var color = "white";
var Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
     color: ${color};
    }
   `,
      style: { backgroundColor },
      ...props,
      children: label
    }
  );
};

export {
  Button
};
