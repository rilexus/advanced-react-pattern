import React from 'react';

const TextInput = () => {
  return <input type="text"/>
}

const NumberInput = () => {
  return <input type="number"/>
}

const CheckboxInput = () => {
  return <input type="checkbox"/>
}

const PrymInput = () => {
  return <input type="checkbox"/>
}

const PrymCheckbox = () => {
  return <input type="checkbox"/>
}

const PrymNumberInput = () => {
  return <input type="checkbox"/>
}

const InputFactory = ({ type }) => {
  switch (type) {
    case 'text': return <TextInput/>
    case 'number': return <NumberInput/>
    case 'checkbox': return <CheckboxInput/>
    default: return null
  }
};

// Component Strategy/Factory
const components = {
  ['prym-input']: PrymInput,
  ['prym-checkbox']: PrymCheckbox,
  ['prym-number']: PrymNumberInput
}

const DynamicComponent = ({ name, withProps }) => {
  if (!!components[name]){
    const Component = components[name]
    return <Component {...withProps}/>
  }
  return null
}

const SupportedHTMLTags = {
  div: true,
  span: true,
  li: true
}
const createComponent = (tag) => {
  return tag in SupportedHTMLTags ? React.createElement(tag) : null
}

(function () {
  Object.entries(SupportedHTMLTags).forEach(([tag]) => {
    createComponent[tag] = props => React.createElement(tag, props)
  })
})()


const a = (function (mod) {
  let some = 42

  const fun = () => {
    some++
  }

  return {
    some,
    up: fun
  }
})({some: 2})


// FACTORY
// createComponent('div') ====> <div/>
// createComponent.div(props) ====> <div {...props}/>

export { InputFactory, DynamicComponent };