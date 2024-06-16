import { act, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import AppointmentForm from "./Form.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("AppointmentForm Component", () => {
  test("shows error message when quantity is less than or equal to 0", async () => {
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <AppointmentForm />
      </QueryClientProvider>,
    );

    // Check if quantity field is present
    // const quantityInput = getByLabelText(/Quantity/i);

    const quantityInput = getByPlaceholderText("Enter quantity");
    // Simulate entering a quantity less than or equal to 0
    await act(async () => {
      fireEvent.change(quantityInput, { target: { value: 0 } });
    });

    // Check if the error message is displayed
    expect(getByText("Quantity must be greater than 0")).toBeInTheDocument();
  });
});
