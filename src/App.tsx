import React from "react";
import { Input, useForm } from "./hooks/component-hook/Form";

const App = () => {
  const { Form, values } = useForm();

  console.log(values);
  return (
    <Form>
      <Input initialValue={""} name={"firs_name"} placeholder={"First Name"} />
    </Form>
  );
};

export default App;
