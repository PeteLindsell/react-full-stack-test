import { render, screen } from "@testing-library/react";
import Card from "./index";

test("Card displays title", () => {
  const title = "Test title";
  render(<Card title={title} />);

  expect(screen.getByRole("heading")).toHaveTextContent(title);
});

test("Card displays description", () => {
  const description = "Test description";
  render(<Card description={description} />);

  expect(screen.getByText(description)).toBeInTheDocument();
});

test("Card displays image", () => {
  const image = "image.jpg";
  render(<Card image={image} />);
  const displayedImage = document.querySelector("img");

  expect(displayedImage.src).toContain(image);
});
