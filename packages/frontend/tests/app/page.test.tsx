import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "vitest-fetch-mock";

import Page from "@/app/page";

describe("Page", () => {
  test("can click the example button", async () => {
    fetchMock.mockResponseOnce("FAIL");

    render(<Page />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("run health check");

    await userEvent.click(button);
    await screen.findByText("OK");
  });
});
