import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Custom render function that includes common providers if needed
const customRender = (ui, options = {}) => {
  return render(ui, { ...options });
};

// Re-export everything
export * from "@testing-library/react";
export { customRender as render };
export { userEvent };
