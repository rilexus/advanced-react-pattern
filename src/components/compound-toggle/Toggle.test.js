import React from 'react';
import {fireEvent, render} from '@testing-library/react'
import {CompoundToggle, ToggleContext} from "./CompoundToggle";


const ClickEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
});

test('Toggle.On renders children when gets "on" true prop', () => {
    const { getByText } = render(
        <div>
          <ToggleContext.Provider value={{on: true, toggle: ()=>{}}}>
            <CompoundToggle.On>On</CompoundToggle.On>
          </ToggleContext.Provider>
        </div>
    );
    const a = getByText('On');
    expect(a.innerHTML).toEqual('On');
});

test('Toggle.Off renders children when gets "on" false prop', () => {
    const { getByText } = render(
        <ToggleContext.Provider value={{on: false, toggle: ()=>{}}}>
            <CompoundToggle.Off>Off</CompoundToggle.Off>
        </ToggleContext.Provider>
    );

    const a = getByText('Off');
    expect(a.innerHTML).toEqual('Off');
});

test('Toggle to pass initValue through context', () => {
    const {getByText}= render(
        <CompoundToggle initValue={true}>
            <ToggleContext.Consumer>
                {({on})=> on ? <div>On</div>: null}
            </ToggleContext.Consumer>
        </CompoundToggle>
    );
    const a = getByText('On');
    expect(a.innerHTML).toEqual('On');
});

test('Toggle to pass "on" prop through context.', () => {
    const {getByText}= render(
        <CompoundToggle>
            <ToggleContext.Consumer>
                {(props)=> props.hasOwnProperty('on') ? <div>On</div>: null}
            </ToggleContext.Consumer>
        </CompoundToggle>
    );
    const a = getByText('On');
    expect(a.innerHTML).toEqual('On');
});

test('Toggle to pass "toggle" function in props through context.', () => {
    const {getByText}= render(
        <CompoundToggle>
            <ToggleContext.Consumer>
                {(props)=> props.hasOwnProperty('toggle') ? <div>On</div>: null}
            </ToggleContext.Consumer>
        </CompoundToggle>
    );
    const a = getByText('On');
    expect(a.innerHTML).toEqual('On');
});

test('Toggle.Button to toggle state.', () => {
    const {getByTestId, getByText}= render(
        <CompoundToggle initValue={true}>
            <CompoundToggle.Off>Off</CompoundToggle.Off>
            <CompoundToggle.Button>Toggle</CompoundToggle.Button>
        </CompoundToggle>
    );
    const button = getByTestId('toggle.button');
    fireEvent(button, ClickEvent);
    const a = getByText('Off');
    expect(a.innerHTML).toEqual('Off');
});

