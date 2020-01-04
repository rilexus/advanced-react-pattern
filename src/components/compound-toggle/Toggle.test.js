import React from 'react';
import {fireEvent, render} from '@testing-library/react'
import { Toggle, ToggleContext } from "./Toggle";


const ClickEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
});

test('Toggle.On renders children when gets "on" true prop', () => {
    const { getByText } = render(
        <ToggleContext.Provider value={{on: true, toggle: ()=>{}}}>
            <Toggle.On>On</Toggle.On>
        </ToggleContext.Provider>
    );
    const a = getByText('On');
    expect(a.innerHTML).toEqual('On');
});

test('Toggle.Off renders children when gets "on" false prop', () => {
    const { getByText } = render(
        <ToggleContext.Provider value={{on: false, toggle: ()=>{}}}>
            <Toggle.Off>Off</Toggle.Off>
        </ToggleContext.Provider>
    );

    const a = getByText('Off');
    expect(a.innerHTML).toEqual('Off');
});

test('Toggle to pass initValue through context', () => {
    const {getByText}= render(
        <Toggle initValue={true}>
            <ToggleContext.Consumer>
                {({on})=> on ? <div>On</div>: null}
            </ToggleContext.Consumer>
        </Toggle>
    );
    const a = getByText('On');
    expect(a.innerHTML).toEqual('On');
});

test('Toggle to pass "on" prop through context.', () => {
    const {getByText}= render(
        <Toggle>
            <ToggleContext.Consumer>
                {(props)=> props.hasOwnProperty('on') ? <div>On</div>: null}
            </ToggleContext.Consumer>
        </Toggle>
    );
    const a = getByText('On');
    expect(a.innerHTML).toEqual('On');
});

test('Toggle to pass "toggle" function in props through context.', () => {
    const {getByText}= render(
        <Toggle>
            <ToggleContext.Consumer>
                {(props)=> props.hasOwnProperty('toggle') ? <div>On</div>: null}
            </ToggleContext.Consumer>
        </Toggle>
    );
    const a = getByText('On');
    expect(a.innerHTML).toEqual('On');
});

test('Toggle.Button to toggle state.', () => {
    const {getByTestId, getByText}= render(
        <Toggle initValue={true}>
            <Toggle.Off>Off</Toggle.Off>
            <Toggle.Button>Toggle</Toggle.Button>
        </Toggle>
    );
    const button = getByTestId('toggle.button');
    fireEvent(button, ClickEvent);
    const a = getByText('Off');
    expect(a.innerHTML).toEqual('Off');
});

