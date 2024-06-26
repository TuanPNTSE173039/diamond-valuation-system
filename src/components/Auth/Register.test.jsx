import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Register from "./Register.jsx";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";

// Mock the login function
jest.mock("../../redux/authSlice.js", () => ({
  register: jest.fn(),
}));

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("RegistrationForm Component", () => {
  test("renders Register component", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    // Check if username field is present
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const phoneInput = screen.getByLabelText(/Phone/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const identityDocumentInput = screen.getByLabelText(/Identity Document/i);

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(identityDocumentInput).toBeInTheDocument();
  });

  test("shows error message when firstname is blank", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const firstNameInput = screen.getByLabelText(/First Name/i);

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "" } });
      fireEvent.blur(firstNameInput);
    });

    expect(screen.getByText("First name is required!")).toBeInTheDocument();
  });

  test("shows error message when firstname is too short", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const firstNameInput = screen.getByLabelText(/First Name/i);

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "a" } });
      fireEvent.blur(firstNameInput);
    });

    expect(
      screen.getByText("The first name must be between 2 and 30 characters."),
    ).toBeInTheDocument();
  });

  test("shows error message when firstname is too long", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const firstNameInput = screen.getByLabelText(/First Name/i);

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "A".repeat(31) } });
      fireEvent.blur(firstNameInput);
    });
    expect(
      screen.getByText("The first name must be between 2 and 30 characters."),
    ).toBeInTheDocument();
  });

  test("does not show error message when firstname length is exactly 2 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const firstNameInput = screen.getByLabelText(/First Name/i);

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "Jo" } });
      fireEvent.blur(firstNameInput);
    });

    expect(
      screen.queryByText("The first name must be between 2 and 30 characters."),
    ).not.toBeInTheDocument();
  });

  test("does not show error message when firstname length is exactly 30 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const firstNameInput = screen.getByLabelText(/First Name/i);

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "A".repeat(30) } });
      fireEvent.blur(firstNameInput);
    });

    expect(
      screen.queryByText("The first name must be between 2 and 30 characters."),
    ).not.toBeInTheDocument();
  });

  test("shows error message when first name is not alphabetic", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const firstNameInput = screen.getByLabelText(/First Name/i);

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "1234" } });
      fireEvent.blur(firstNameInput);
    });

    expect(
      screen.getByText("The first name must be alphabetic."),
    ).toBeInTheDocument();
  });

  test("shows error message when lastname is blank", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const lastNameInput = screen.getByLabelText(/Last Name/i);

    await act(async () => {
      fireEvent.change(lastNameInput, { target: { value: "" } });
      fireEvent.blur(lastNameInput);
    });

    expect(screen.getByText("Last name is required!")).toBeInTheDocument();
  });

  test("shows error message when lastname is too short", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const lastNameInput = screen.getByLabelText(/Last Name/i);

    await act(async () => {
      fireEvent.change(lastNameInput, { target: { value: "a" } });
      fireEvent.blur(lastNameInput);
    });
    expect(
      screen.getByText("The last name must be between 2 and 30 characters."),
    ).toBeInTheDocument();
  });

  test("shows error message when lastname is too long", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const lastNameInput = screen.getByLabelText(/Last Name/i);

    await act(async () => {
      fireEvent.change(lastNameInput, { target: { value: "A".repeat(31) } });
      fireEvent.blur(lastNameInput);
    });

    expect(
      screen.getByText("The last name must be between 2 and 30 characters."),
    ).toBeInTheDocument();
  });

  test("does not show error message when lastname length is exactly 2 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const lastNameInput = screen.getByLabelText(/Last Name/i);

    await act(async () => {
      fireEvent.change(lastNameInput, { target: { value: "Li" } });
      fireEvent.blur(lastNameInput);
    });

    expect(
      screen.queryByText("The last name must be between 2 and 30 characters."),
    ).not.toBeInTheDocument();
  });

  test("does not show error message when lastname length is exactly 30 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const lastNameInput = screen.getByLabelText(/Last Name/i);

    await act(async () => {
      fireEvent.change(lastNameInput, { target: { value: "B".repeat(30) } });
      fireEvent.blur(lastNameInput);
    });

    expect(
      screen.queryByText("The last name must be between 2 and 30 characters."),
    ).not.toBeInTheDocument();
  });

  test("shows error message when last name is not alphabetic", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const lastNameInput = screen.getByLabelText(/Last Name/i);

    await act(async () => {
      fireEvent.change(lastNameInput, { target: { value: "1234" } });
      fireEvent.blur(lastNameInput);
    });

    expect(
      screen.getByText("The last name must be alphabetic."),
    ).toBeInTheDocument();
  });

  test("shows error message when username is blank", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const usernameInput = screen.getByLabelText(/Username/i);

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "" } });
      fireEvent.blur(usernameInput);
    });

    expect(screen.getByText("Username is required!")).toBeInTheDocument();
  });

  test("shows error message when username is too short", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const usernameInput = screen.getByLabelText(/Username/i);

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "A".repeat(5) } });
      fireEvent.blur(usernameInput);
    });

    expect(
      screen.getByText("The username must be between 6 and 24 characters."),
    ).toBeInTheDocument();
  });

  test("shows error message when username is too long", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const usernameInput = screen.getByLabelText(/Username/i);

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "A".repeat(25) } });
      fireEvent.blur(usernameInput);
    });

    expect(
      screen.getByText("The username must be between 6 and 24 characters."),
    ).toBeInTheDocument();
  });

  test("does not show error message when username length is exactly 6 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const usernameInput = screen.getByLabelText(/Username/i);

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "A".repeat(6) } });
      fireEvent.blur(usernameInput);
    });

    expect(
      screen.queryByText("The username must be between 6 and 24 characters."),
    ).not.toBeInTheDocument();
  });

  test("does not show error message when username length is exactly 24 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const usernameInput = screen.getByLabelText(/Username/i);

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "A".repeat(24) } });
      fireEvent.blur(usernameInput);
    });

    expect(
      screen.queryByText("The username must be between 6 and 24 characters."),
    ).not.toBeInTheDocument();
  });

  test("shows error message when username is not alphanumeric", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const usernameInput = screen.getByLabelText(/Username/i);

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "1234" } });
      fireEvent.blur(usernameInput);
    });

    expect(
      screen.getByText("The username must be alphabetic."),
    ).toBeInTheDocument();
  });

  test("shows error message when email is blank", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const emailInput = screen.getByLabelText(/Email/i);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "" } });
      fireEvent.blur(emailInput);
    });

    expect(screen.getByText("Email is required!")).toBeInTheDocument();
  });

  test("shows error message when password is blank", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const passwordInput = screen.getByLabelText(/Password/i);

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "" } });
      fireEvent.blur(passwordInput);
    });

    expect(screen.getByText("Password is required!")).toBeInTheDocument();
  });

  test("shows error message when password is too short", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const passwordInput = screen.getByLabelText(/Password/i);

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "abc" } });
      fireEvent.blur(passwordInput);
    });

    expect(
      screen.getByText("The password must be between 6 and 20 characters."),
    ).toBeInTheDocument();
  });

  test("shows error message when password is too long", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const passwordInput = screen.getByLabelText(/Password/i);

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "a".repeat(21) } });
      fireEvent.blur(passwordInput);
    });

    expect(
      screen.getByText("The password must be between 6 and 20 characters."),
    ).toBeInTheDocument();
  });

  test("does not show error message when password length is exactly 6 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const passwordInput = screen.getByLabelText(/Password/i);

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "abc123" } });
      fireEvent.blur(passwordInput);
    });

    expect(
      screen.queryByText("The password must be between 6 and 20 characters."),
    ).not.toBeInTheDocument();
  });

  test("does not show error message when password length is exactly 20 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const passwordInput = screen.getByLabelText(/Password/i);

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "a".repeat(20) } });
      fireEvent.blur(passwordInput);
    });

    expect(
      screen.queryByText("The password must be between 6 and 20 characters."),
    ).not.toBeInTheDocument();
  });

  test("shows error message when password does not contain a number", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const passwordInput = screen.getByLabelText(/Password/i);

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "abcdef" } });
      fireEvent.blur(passwordInput);
    });

    expect(
      screen.getByText("The password must contain at least 1 number."),
    ).toBeInTheDocument();
  });

  test("shows error message when phone is blank", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const phoneInput = screen.getByLabelText(/Phone/i);

    await act(async () => {
      fireEvent.change(phoneInput, { target: { value: "" } });
      fireEvent.blur(phoneInput);
    });

    expect(screen.getByText("Phone number is required!")).toBeInTheDocument();
  });

  test("shows error message when phone number is too short", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const phoneInput = screen.getByLabelText(/Phone/i);

    await act(async () => {
      fireEvent.change(phoneInput, { target: { value: "123456789" } });
      fireEvent.blur(phoneInput);
    });

    expect(
      screen.getByText("The phone number must be 10 characters."),
    ).toBeInTheDocument();
  });

  test("shows error message when phone number is too long", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const phoneInput = screen.getByLabelText(/Phone/i);

    await act(async () => {
      fireEvent.change(phoneInput, { target: { value: "12345678901" } });
      fireEvent.blur(phoneInput);
    });

    expect(
      screen.getByText("The phone number must be 10 characters."),
    ).toBeInTheDocument();
  });

  test("does not show error message when phone number is exactly 10 characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const phoneInput = screen.getByLabelText(/Phone/i);

    await act(async () => {
      fireEvent.change(phoneInput, { target: { value: "1234567890" } });
      fireEvent.blur(phoneInput);
    });

    expect(
      screen.queryByText("The phone number must be 10 characters."),
    ).not.toBeInTheDocument();
  });

  test("shows error message when phone number contains characters", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const phoneInput = screen.getByLabelText(/Phone/i);

    await act(async () => {
      fireEvent.change(phoneInput, { target: { value: "12345abcde" } });
      fireEvent.blur(phoneInput);
    });

    expect(
      screen.getByText("Phone number must only contain numbers."),
    ).toBeInTheDocument();
  });

  test("shows error message when address is blank", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const addressInput = screen.getByLabelText(/Address/i);

    await act(async () => {
      fireEvent.change(addressInput, { target: { value: "" } });
      fireEvent.blur(addressInput);
    });

    expect(screen.getByText("Address is required!")).toBeInTheDocument();
  });

  test("shows error message when address is too short", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const addressInput = screen.getByLabelText(/Address/i);

    await act(async () => {
      fireEvent.change(addressInput, { target: { value: "12" } });
      fireEvent.blur(addressInput);
    });

    expect(
      screen.getByText("The address must be between 3 and 40 characters."),
    ).toBeInTheDocument();
  });

  test("shows error message when address is too long", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const addressInput = screen.getByLabelText(/Address/i);

    await act(async () => {
      fireEvent.change(addressInput, {
        target: {
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      });
      fireEvent.blur(addressInput);
    });

    expect(
      screen.getByText("The address must be between 3 and 40 characters."),
    ).toBeInTheDocument();
  });

  test("does not show error message when address is exactly the required length", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const addressInput = screen.getByLabelText(/Address/i);

    await act(async () => {
      fireEvent.change(addressInput, { target: { value: "123 Main St" } });
      fireEvent.blur(addressInput);
    });

    expect(
      screen.queryByText("The address must be between 3 and 40 characters."),
    ).not.toBeInTheDocument();
  });

  test("shows error message when identity document is blank", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const identityDocumentInput = screen.getByLabelText(/Identity Document/i);

    await act(async () => {
      fireEvent.change(identityDocumentInput, { target: { value: "" } });
      fireEvent.blur(identityDocumentInput);
    });

    expect(
      screen.getByText("Identity document is required!"),
    ).toBeInTheDocument();
  });

  test("shows error message when identity document is too short", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const identityDocumentInput = screen.getByLabelText(/Identity Document/i);

    await act(async () => {
      fireEvent.change(identityDocumentInput, {
        target: { value: "1234567890" },
      });
      fireEvent.blur(identityDocumentInput);
    });

    expect(
      screen.getByText("The identity document must be 12 characters."),
    ).toBeInTheDocument();
  });

  test("shows error message when identity document is too long", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const identityDocumentInput = screen.getByLabelText(/Identity Document/i);

    await act(async () => {
      fireEvent.change(identityDocumentInput, {
        target: { value: "1234567890123" },
      });
      fireEvent.blur(identityDocumentInput);
    });

    expect(
      screen.getByText("The identity document must be 12 characters."),
    ).toBeInTheDocument();
  });

  test("does not show error message when identity document has correct length", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    );
    const identityDocumentInput = screen.getByLabelText(/Identity Document/i);

    await act(async () => {
      fireEvent.change(identityDocumentInput, {
        target: { value: "123456789012" },
      });
      fireEvent.blur(identityDocumentInput);
    });

    expect(
      screen.queryByText("The identity document must be 12 characters."),
    ).not.toBeInTheDocument();
  });
});
