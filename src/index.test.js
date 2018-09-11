import React from "react";
import ReactDOM from "react-dom";
import {
  render as testingRender,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./index";

afterEach(cleanup);

const div = document.createElement("div");
document.body.appendChild(div);

function render(ui) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  return {
    ...testingRender(ui, { container }),
    debug: () => {
      ReactDOM.render(ui, div);
    }
  };
}

test("test", () => {
  const { getByText, debug } = render(<App />);
  expect(getByText("Hello CodeSandbox")).toBeVisible();
});

test("test 2", () => {
  const { getByText, debug } = render(<App>Rener</App>);
  expect(getByText("Rener")).toBeVisible();
});

test("test 3", async () => {
  const { getByText, debug } = render(<App>Vivi</App>);
  fireEvent.click(getByText("Click me"));
  const loading = await waitForElement(() => getByText("Loading"));
  expect(loading).toBeVisible();
  debug();
});
