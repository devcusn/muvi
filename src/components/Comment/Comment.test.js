import { render, screen } from "@testing-library/react";

import Comment from "./Comment";

test("renders comment element", () => {
  render(<Comment message='test-comment' />);
  const comment = screen.getByText("test-comment");
  expect(comment).toBeInTheDocument();
});
