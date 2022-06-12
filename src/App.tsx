import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Factory from "./components/factory/Factory";
import RenderProps from "./components/render-props/RenderPropsToggle";
import { Ul } from "./ui/Ul";
import { PrefetchedState } from "./components/prefetched-state/PrefetchedState";
import PropsCollection from "./components/props-collection/PropCollection";
import ReducerHook from "./components/reducer-hook/ReducerHook";
import StateReducer from "./components/state-reducer/StateReducer";
import { Home } from "./pages/Home";
import { ThunkReducer } from "./components/thunk-reducer";
import { CompoundToggle } from "./components/compound-toggle";
import { ControlProps } from "./components/ControlProps";
import { StateSubscription } from "./components/StateSubscription";
import Decorator from "./components/Decorator/Decorator";
import ImperativeHandler from "./hooks/imperative-handler/imperativeHandler";

const Navigation = () => {
  return (
    <nav>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/utils">Utils</Link>
          <Ul>
            <li>
              <Link to="/utils/prefetched-state">Prefetched State</Link>
            </li>
            <li>
              <Link to="/utils/state-subscription">State Subscription</Link>
            </li>
          </Ul>
        </li>
        <li>
          <Link to="/components">Components</Link>
          <Ul>
            <li>
              <Link to="/components/compound-components">
                Compound Components
              </Link>
            </li>
            <li>
              <Link to="/components/state-reducer">State Reducer</Link>
            </li>
            <li>
              <Link to="/components/props-collection">Props Collection</Link>
            </li>
            <li>
              <Link to="/components/render-props">Render Props</Link>
            </li>
            <li>
              <Link to="/components/factory">Factory</Link>
            </li>
            <li>
              <Link to="/components/control-props">Control Props</Link>
            </li>
            <li>
              <Link to="/components/decorator">Decorator</Link>
            </li>
          </Ul>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
          <Ul>
            <li>
              <Link to="components/thunk-reducer">Thunk Reducer</Link>
            </li>
            <li>
              <Link to="hooks/imperative-handler">Imperative Handler</Link>
            </li>
            <li>
              <Link to="/hooks/use-form">Form</Link>
            </li>
            <li>
              <Link to="/hooks/reducer-hook">Reducer Hook</Link>
            </li>
          </Ul>
        </li>
      </Ul>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="utils/prefetched-state" element={<PrefetchedState />} />
          <Route
            path="utils/state-subscription"
            element={<StateSubscription />}
          />

          <Route path="components" element={<div>hooks</div>} />
          <Route path="components/render-props" element={<RenderProps />} />
          <Route path="components/factory" element={<Factory />} />
          <Route path="components/thunk-reducer" element={<ThunkReducer />} />
          <Route
            path="components/compound-components"
            element={<CompoundToggle />}
          />
          <Route
            path="components/props-collection"
            element={<PropsCollection />}
          />
          <Route path="components/state-reducer" element={<StateReducer />} />
          <Route path="components/control-props" element={<ControlProps />} />
          <Route path="components/decorator" element={<Decorator />} />

          <Route path="hooks" element={<div>hooks</div>} />
          <Route path="hooks/use-form" element={<div>use-form</div>} />
          <Route path="hooks/reducer-hook" element={<ReducerHook />} />
          <Route
            path="hooks/imperative-handler"
            element={<ImperativeHandler />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
