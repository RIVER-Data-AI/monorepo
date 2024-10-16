import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Page from "@/app/page";

describe("Page", () => {
  it("can click the example button", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
      }),
    );

    render(<Page />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("run health check");

    await userEvent.click(button);
    await screen.findByText("OK");
  });
});
