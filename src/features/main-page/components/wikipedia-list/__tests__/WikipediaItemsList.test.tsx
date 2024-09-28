import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../redux/store";
import WikipediaItemsList from "../index";

describe("WikipediaItemsList Component", () => {
  it("renders the component and dispatches event on button click", () => {
    render(
      <Provider store={store}>
        <WikipediaItemsList month={9} day={28} />
      </Provider>,
    );

    expect(screen.getByText(/Events on 9\/28/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Get list of today's Wikipedia/i));
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
