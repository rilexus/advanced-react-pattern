import React from 'react';
import {fireEvent, render} from '@testing-library/react'
import InputHandler from "./Input";

describe('InputHandler', () => {
  it('should handle input change events', async function () {
    const inputTestId = 'inputTestId';
    const wrapper = render(
      <InputHandler>
        {({value, setValue})=>(
          <input data-testid={inputTestId} type="text" value={value} onChange={(e)=>setValue(e)}/>
        )}
      </InputHandler>
    );
    const input = await wrapper.findByTestId(inputTestId);
    fireEvent.change(input, {target:{value: 'value1'}});
    expect(input.value).toBe('value1');

    fireEvent.change(input, {target:{value: 'value2'}});
    expect(input.value).toBe('value2');

  });
});