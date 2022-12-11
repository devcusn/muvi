import { render, screen } from "@testing-library/react";

import Notice from "./Notice";

test("renders notice element", () => {
  render(<Notice text='test-notice' />);
  const comment = screen.getByText("test-notice");
  expect(comment).toBeInTheDocument();
});
