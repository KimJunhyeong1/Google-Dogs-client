import { fireEvent, render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppHeader from "../components/AppHeader";

jest.mock("react-redux");

describe("AppHeader", () => {
  function renderAppHeader(isLogin) {
    return render(<AppHeader isLogin={isLogin} />, { wrapper: MemoryRouter });
  }

  it("If you are not logged in, do not render the logout button.", () => {
    const { container } = renderAppHeader(false);

    expect(container).not.toHaveTextContent("로그아웃");
  });

  it("If you are logged in render logout buttons to Unauthorized", () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { container, getAllByText } = renderAppHeader(true);

    expect(container).toHaveTextContent("로그아웃");

    const buttons = getAllByText("로그아웃");

    expect(dispatch).not.toBeCalled();

    fireEvent.click(buttons[0]);

    expect(dispatch).toBeCalledWith({
      payload: undefined,
      type: "auth/setUnauthorized",
    });
  });
});
