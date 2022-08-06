import { Ul } from "../../ui/Ul";
import Link from "next/link";
import Li from "../../ui/Li/Li";

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
              <Link href="/Prefetch">
                <a>Prefetched State</a>
              </Link>
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
          </Ul>
        </Li>
        <Li>
          <h4>Hooks</h4>
          <Ul>
            <Li>
              <Link href="/ReducerHook">Reducer Hook</Link>
            </Li>
            <Li>
              <Link href="/ThunkReducer">Thunk Reducer</Link>
            </Li>
          </Ul>
        </Li>
      </Ul>
    </nav>
  );
};

export default Navigation;
