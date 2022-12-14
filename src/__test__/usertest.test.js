import { render, screen, fireEvent } from "@testing-library/react";
import GetUserInfo from "./GetUserInfo";

describe("User name component", () => {
  test("Should allow a user to enter the github name that they want to search.", () => {
    render(<GetUserInfo />);

    const nameInput = screen.getByTestId("gitUser");

    fireEvent.change(nameInput, {
      target: {
        value: "Peter",
      },
    });
    expect(nameInput.value).toBe("Peter");
  });
});
