import Link from "next/link";
import { Ul } from "../ui/Ul";

const Navigation = () => {
  return (
    <nav>
      <Ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <h4>Utils</h4>
          <Ul>
            <li>
              <Link href="/Prefetch">Prefetched State</Link>
            </li>
            <li>
              <Link href="/StateSubscription">State Subscription</Link>
            </li>
          </Ul>
        </li>
        <li>
          <h4>Components</h4>
          <Ul>
            <li>
              <Link href="/CompoundToggle">Compound Components</Link>
            </li>
            <li>
              <Link href="/StateReducer">State Reducer</Link>
            </li>
            <li>
              <Link href="/PropCollection">Props Collection</Link>
            </li>
            <li>
              <Link href="/RenderPropsToggle">Render Props</Link>
            </li>
            <li>
              <Link href="/Factory">Factory</Link>
            </li>
            <li>
              <Link href="/ControlProps">Control Props</Link>
            </li>
            <li>
              <Link href="/Decorator">Decorator</Link>
            </li>
          </Ul>
        </li>
        <li>
          <h4>Hooks</h4>
          <Ul>
            <li>
              <Link href="/ThunkReducer">Thunk Reducer</Link>
            </li>
            <li>
              <Link href="/ReducerHook">Reducer Hook</Link>
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
      <Navigation />
    </div>
  );
};

export default App;
