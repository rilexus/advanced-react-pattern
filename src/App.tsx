import React from "react";
import { useForm } from "react-hook-form";
import { ObservableComponent } from "./components/observables";

const App = () => {
  const { register } = useForm();

  return (
    <div>
      <ObservableComponent />
    </div>
  );
};

export default App;
