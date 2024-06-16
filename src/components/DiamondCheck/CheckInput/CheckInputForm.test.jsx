import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import DiamondCheckInputForm from "./Form.jsx";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("DiamondCheckInputForm Component", () => {
  test("renders DiamondCheckInputForm component", () => {
    const { getByPlaceholderText } = render(<DiamondCheckInputForm />);

    // Check if certificateId field is present
    const certificateIdInput = getByPlaceholderText("Enter Certificate ID");

    expect(certificateIdInput).toBeInTheDocument();
  });

  test("updates on input change", async () => {
    const { getByPlaceholderText } = render(<DiamondCheckInputForm />);

    const certificateIdInput = getByPlaceholderText("Enter Certificate ID");

    await act(async () => {
      fireEvent.change(certificateIdInput, { target: { value: "123456" } });
    });

    expect(certificateIdInput.value).toBe("123456");
  });

  test("shows error message when certificateId is less than 10 digits", async () => {
    render(<DiamondCheckInputForm />);

    // Check if certificateId field is present
    const certificateIdInput = screen.getByPlaceholderText(
      "Enter Certificate ID",
    );

    // Simulate entering a certificateId that is less than 10 digits
    fireEvent.change(certificateIdInput, { target: { value: "123456" } });

    // Find the button and simulate a click event
    const button = screen.getByText("Run free check");
    fireEvent.click(button);

    // Check if the error message is displayed
    const errorMessage = await screen.findByText(
      "CertificateID must be 10 digits.",
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows error message when certificateId is blank", async () => {
    const { getByPlaceholderText } = render(<DiamondCheckInputForm />);

    // Check if certificateId field is present
    const certificateIdInput = getByPlaceholderText("Enter Certificate ID");

    // Simulate leaving the certificateId field blank and moving to the next field
    await act(async () => {
      fireEvent.change(certificateIdInput, { target: { value: "" } });
      fireEvent.blur(certificateIdInput);
    });

    // Find the button and simulate a click event
    const button = screen.getByText("Run free check");
    fireEvent.click(button);

    // Check if the error message is displayed
    expect(screen.getByText("Certificate ID is required")).toBeInTheDocument();
  });
});
