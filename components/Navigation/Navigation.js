import { Ul } from "../../ui/Ul";

import Li from "../../ui/Li/Li";
import Link from "../../ui/Link/Link";

const Navigation = () => {
  return (
    <nav>
      <Ul>
        <Li>
          <Link href="/">Home</Link>
        </Li>
        <Li>
          <h4>Utils</h4>
          <Ul>
            <Li>
              <Link href="/Prefetch">Prefetched State</Link>
            </Li>
            <Li>
              <Link href="/StateSubscription">State Subscription</Link>
            </Li>
          </Ul>
        </Li>
        <Li>
          <h4>Components</h4>
          <Ul>
            <Li>
              <Link href="/suspense">Suspense</Link>
            </Li>
            <Li>
              <Link href="/CompoundToggle">Compound Components</Link>
            </Li>
            <Li>
              <Link href="/StateReducer">State Reducer</Link>
            </Li>
            <Li>
              <Link href="/PropCollection">Props Collection</Link>
            </Li>
            <Li>
              <Link href="/RenderPropsToggle">Render Props</Link>
            </Li>
            <Li>
              <Link href="/Factory">Factory</Link>
            </Li>
            <Li>
              <Link href="/ControlProps">Control Props</Link>
            </Li>
            <Li>
              <Link href="/Decorator">Decorator</Link>
            </Li>
            <Li>
              <Link href="/Roles">Roles</Link>
            </Li>
          </Ul>
        </Li>
        <Li>
          <h4>Hooks</h4>
          <Ul>
            <Li>
              <Link href="/ReducerHook">Reducer Hook</Link>
            </Li>
            <Li>
              <Link href="/UndoState">Undo State</Link>
            </Li>
            <Li>
              <Link href="/ThunkReducer">Thunk Reducer</Link>
            </Li>
            <Li>
              <Link href="/FetchHook">Fetch Hook</Link>
            </Li>
          </Ul>
        </Li>
        <Li>
          <h4>Patterns</h4>
          <Ul>
            <Li>
              <Link href="/mvc">MVC</Link>
            </Li>
          </Ul>
        </Li>
      </Ul>
    </nav>
  );
};

export default Navigation;
