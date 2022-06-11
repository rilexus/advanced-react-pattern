import React from "react";

const withErrorMessage = (Input) => {
  const DecoratedInput = (props) => {
    return (
      <div>
        <Input {...props} />
        {props.hasError ? <div>Error occurred!</div> : null}
      </div>
    );
  };

  return DecoratedInput;
};
