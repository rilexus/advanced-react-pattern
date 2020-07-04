import React from 'react';
import {render} from '@testing-library/react'
import RenderPropsToggle from "./RenderPropsToggle";

describe('Toggle (render props)', () => {
  it('should call render function (children) once.',()=>{
    const renderProp = jest.fn(()=><div>MOCK</div>);

    render(
      <RenderPropsToggle>{renderProp}</RenderPropsToggle>
    );

    expect(renderProp).toBeCalledTimes(1);
  });

  it('should pass one object with "on" and "toggle" keys.',()=>{
    const renderProp = jest.fn(({on, toggle})=><div>MOCK</div>);

    render(
      <RenderPropsToggle>{renderProp}</RenderPropsToggle>
    );

    expect(renderProp.mock.calls[0][0]).toHaveProperty('on');
    expect(renderProp.mock.calls[0][0]).toHaveProperty('toggle');
  })

  it('should toggle the "on" property if "toggle function is called"',()=>{
    const renderProp = jest.fn(({on, toggle})=>{
      toggle();
      return <div>MOCK</div>
    });

    const {getByText} = render(
      <RenderPropsToggle>{
        ({on, toggle}) => {
          if (!on){
            toggle();
          }
          return <div>{on ? 'ON' : 'OFF'}</div>
        }
      }</RenderPropsToggle>
    );

    expect(getByText('ON')).toBeDefined();
  })

});