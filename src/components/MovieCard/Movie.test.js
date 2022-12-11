import { render, screen } from "@testing-library/react";

import MovieCard from "./MovieCard";

test("renders title element", () => {
  render(
    <MovieCard
      title='test-title'
      url='test-url'
      onClick={() => {
        console.log("test");
      }}
    />
  );
  const title = screen.getByText("test-title");
  expect(title).toBeInTheDocument();
});
