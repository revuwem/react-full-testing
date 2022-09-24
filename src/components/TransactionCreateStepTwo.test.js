import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("the pay button is disabled on the initial render", async () => {
  render(<TransactionCreateStepTwo receiver={{ id: "1" }} sender={{ id: "2" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});
