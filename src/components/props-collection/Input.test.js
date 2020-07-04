import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import PropCollectionInput from "./PropCollectionInput";

describe('Input (props getter)',()=>{
  it('should bind input handlers', function () {
    const {getByTestId} = render(
      <PropCollectionInput>
        {({getProps})=>(
          <input data-testid={'input'} type="text" {...getProps}/>
        )}
      </PropCollectionInput>
    );

    const input = getByTestId('input');

    fireEvent.change(input, {target:{value: 'test'}});
    expect(input.value).toBe("test");
  });
});