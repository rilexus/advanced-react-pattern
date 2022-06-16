const withValueLoggerInput = (Input) => {
  return (props) => {
    const handleChange = (e) => {
      props.onChange(e);
      // other Logger
      console.log(e.target.value);
    };
    return <Input {...props} onChange={handleChange} />;
  };
};

const withCustomData = (Component, getVariantData) => {
  return (props) => {
    // get data from context/store
    const dataSource = {};

    const data = getVariantData(dataSource, props);
    return <Component {...props} {...data} />;
  };
};

const Component = ({ name, price }) => {
  return <div></div>;
};

const WithCustomComponent = withCustomData(Component, (variant, props) => ({
  name: variant.name,
  price: variant.count * variant.basicPrice,
}));
