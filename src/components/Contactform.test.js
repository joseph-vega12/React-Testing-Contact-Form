import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("Test label for a value", () => {
  render(<ContactForm/>);
  const firstName = screen.getByText(/First Name/);
  const lastName = screen.getByText(/Last Name/);
  const email = screen.getByText(/Email/);
  const message = screen.getByText(/Message/);

  expect(firstName).toHaveTextContent(/first name/i);
  expect(lastName).toHaveTextContent(/last name/i);
  expect(email).toHaveTextContent(/email/i);
  expect(message).toHaveTextContent(/message/i);
});

test("Test first name input value", () => {
  render(<ContactForm />)

  const firstNameValue = screen.getByLabelText(/first name/i);

  fireEvent.change(firstNameValue, {target:{ value: "jo", name:"firstName"}});

  const button = screen.getByRole("button");
  fireEvent.click(button);

  const newFirstName = screen.getByText(/jo/i);
  expect(newFirstName).toBeTruthy();
})
