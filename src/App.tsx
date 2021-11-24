import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ onChange, onBlur, placeholder }) => {
  // comments
  // comment
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

const App = () => {
  const { register } = useForm();

  return (
    <div>
      <Input {...register("name")} placeholder={"Name"} />
    </div>
  );
};

export default App;
