import React from "react";
import { fireEvent, render } from "@testing-library/react";
import RenderPropsInput from "./RenderPropsInput";

describe("InputHandler", () => {
  it("should handle input change events", async function () {
    const inputTestId = "inputTestId";
    const wrapper = render(
      <RenderPropsInput>
        {({ value, setValue }) => (
          <input
            data-testid={inputTestId}
            type="text"
            value={value}
            onChange={(e) => setValue(e)}
          />
        )}
      </RenderPropsInput>
    );
    const input = await wrapper.findByTestId(inputTestId);
    fireEvent.change(input, { target: { value: "value1" } });
    expect(input.value).toBe("value1");

    fireEvent.change(input, { target: { value: "value2" } });
    expect(input.value).toBe("value2");
  });
});
