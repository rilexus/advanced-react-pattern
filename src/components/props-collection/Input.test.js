import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Input from "./Input";

describe('Input (props getter)',()=>{
  it('should bind input handlers', function () {
    const {getByTestId} = render(
      <Input>
        {({getProps})=>(
          <input data-testid={'input'} type="text" {...getProps}/>
        )}
      </Input>
    );

    const input = getByTestId('input');

    fireEvent.change(input, {target:{value: 'test'}});
    expect(input.value).toBe("test");
  });
});