import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";
import H1 from "../ui/H1/H1";

const App = () => {
  return (
    <Layout
      content={
        <div>
          <H1>Advanced React Pattern</H1>
        </div>
      }
      navigation={<Navigation />}
    />
  );
};

export default App;
