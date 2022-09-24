import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// Unit test
// Test user interactions
test("the pay button is disabled on the initial render", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "1" }} sender={{ id: "2" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

// Unit test
// Test conditional rendering
// Arrange - Act - Assert pattern
test("the pay button is enabled if amount and note are entered", async () => {
  // Arrange
  render(<TransactionCreateStepTwo receiver={{ id: "1" }} sender={{ id: "2" }} />);

  // Act
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "note");

  //   Assert
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

// Integration test
test("(integration) the pay button is enabled if amount and note are entered", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "1" }} sender={{ id: "2" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "note");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
