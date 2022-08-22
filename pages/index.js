import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";
import H1 from "../ui/H1/H1";
import { P } from "../ui/P";

const App = () => {
  return (
    <div>
      <Layout
        content={
          <div>
            <H1>Advanced React Pattern</H1>
            <P>
              This website provides an overview of all kinds of react patterns..
            </P>
          </div>
        }
        navigation={<Navigation />}
      />
    </div>
  );
};

export default App;
