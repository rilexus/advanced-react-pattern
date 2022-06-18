import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import H1 from "../ui/H1/H1";
import useToggle from "../hooks/useToggle/useToggle";
import { P } from "../ui/P";
import { Code } from "../ui/Code";
import assetPrefix from "../utils/assetPrefix";
const sleep = async (time = 200) => new Promise((res) => setTimeout(res, time));

const lazy = (factory) => {
  let Component = () => null;
  let status = "pending";

  // return a React component function
  return function LazyWrapper(props) {
    useEffect(() => {
      // load JS module right away, LazyWrapper lazy is called
      let promise = factory()
        // wait for the JS module to be resolved
        .then((module) => {
          status = "resolved";
          // get the default export from a file
          Component = module.default;
        })
        .catch((e) => {
          // handle error
          status = "error";
        });

      // if still pending, throw to by catched by Suspense
      if (status === "pending") {
        throw promise;
      }
    }, []);

    return <Component {...props} />;
  };
};

class Suspense extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  componentDidCatch(promiseOrError, errorInfo) {
    // do nothing, if not a promise
    if (typeof promiseOrError.then !== "function") return;
    const promise = promiseOrError;
    this.setState({
      // if catched, show fallback
      isLoading: true,
    });

    promise
      .then(() => {
        // promise is resolved, render children
        this.setState({
          isLoading: false,
        });
      })
      .catch((e) => {
        // handle error
      });
  }

  render() {
    if (this.state.isLoading) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const LazyComponent = lazy(async function Wrapper() {
  await sleep(2000); // simulate a long request
  return import(/* webpackChunkName: "Square" */ "../components/Square/Square");
});

// const Backlog = await import(/* webpackChunkName: "Backlog" */ "../Backlog");
// const Board = await  import(/* webpackChunkName: "Board" */"../Board");
// const Reports = await import(/* webpackChunkName: "Report" */"../Reports");
// const Releases = await import(/* webpackChunkName: "Releases" */"../Releases");

// const Component = () => {
//   const [, rerender] = useToggle();
//
//   const backlogRef = useRef(null);
//
//   const loadSidebar = async () => {
//     //if backlog already loaded, do nothing
//     if (backlogRef.current) return;
//
//     const { default: Component } = await import("../Backlog");
//     backlogRef.current = Component;
//
//     rerender();
//   };
//
//   const Backlog = backlogRef.current;
//   return (
//     <div>
//       <div>
//         {/*sidebar*/}
//         <button onClick={loadSidebar}>Backlog</button>
//       </div>
//       <div>
//         {/*view*/}
//         {Backlog && <Backlog />}
//       </div>
//     </div>
//   );
// };

// const Backlog = (props) => {
//   const [, rerender] = useToggle();
//   const ref = useRef(null);
//
//   useEffect(() => {
//     import("../Backlog").then(({ default: Component }) => {
//       ref.current = Component;
//
//       rerender();
//     });
//   }, []);
//
//   const Component = ref.current;
//   return Component && <Component {...props} />;
// };

// const Lazy = ({ factory, ...props }) => {
//   const [, rerender] = useToggle();
//   const ref = useRef(null);
//
//   useEffect(() => {
//     factory().then(({ default: Component }) => {
//       ref.current = Component;
//
//       rerender();
//     });
//   }, []);
//
//   const Component = ref.current;
//   return Component && <Component {...props} />;
// };
//
// const Component = () => {
//   return <LazyComponent factory={() => import("../Backlog")} />;
// };

// const lazy = (factory) => {
//   // return a React component function
//   return function LazyWrapper(props) {
//     const [, rerender] = useToggle();
//     const ref = useRef(() => null);
//     useEffect(() => {
//       // load JS module right away, LazyWrapper lazy is called
//       factory()
//         // wait for the JS module to be resolved
//         .then(({ default: Component }) => {
//           ref.current = Component;
//
//           rerender();
//         })
//         .catch((e) => {
//           // handle error
//         });
//     }, []);
//
//     const Component = ref.current;
//     return <Component {...props} />;
//   };
// };

// const BackLog = lazy(() => import("../Backlog"));

const Sus = () => {
  const [visible, toggle] = useToggle();
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <main>
          <article>
            <H1>Suspense</H1>
            <P>
              Imagine you have a big Single Page Application with a sidebar like
              this one.
            </P>
            <img
              width={"500px"}
              height={"auto"}
              src={assetPrefix("/application_sidebar.png")}
            />
            <P>
              Every button lead to a different page. I think the word
              &quot;view&quot; would be more appropriate, since its not a page.
              So every view is separate and independent from each other. It has
              its own purpose, its own code.
            </P>
            <P>
              The user is interested in one view at a time and probably he is
              not interested in all the views of the application. Just think how
              often you visit the &quot;setting&quot; view of any application. I
              bet, you go there one time a month, if at all.
            </P>
            <P>
              Now the thing is, if we as a developer do not pay attention, we
              would bundle the whole application to one single file. We will
              have one HTML file with a single div in it, where the application
              is going to be mounted.
            </P>
            <P>
              This has an effect on the user experience. Just think about it!
              How much code does the application in total has? How many css
              lines, images, svg`s etc. We ship a lot of code and in our current
              case, we shit a lot of code at once.
            </P>
            <P>
              Luckily we can improve this by utilising{" "}
              <a href="https://webpack.js.org/guides/lazy-loading/">
                webpack and the import function.
              </a>
            </P>
            <Code>
              {'const Backlog = await import(/* webpackChunkName: "Backlog" */ "../Backlog");\n' +
                'const Board = await  import(/* webpackChunkName: "Board" */"../Board");\n' +
                'const Reports = await import(/* webpackChunkName: "Report" */"../Reports");\n' +
                'const Releases = await import(/* webpackChunkName: "Releases" */"../Releases");'}
            </Code>
            <P>
              By doing this, webpack will split our application during the build
              time in small chunks. We will not get one single, heavy file, but
              multiple small once. One file for every component.
            </P>
            <P>
              There is one thing left to do for us. That is to load this js
              files and to display those components only when we need them.
            </P>
            <P>One obvious implementation for this could be this one.</P>
            <Code>
              {"const Component = () => {\n" +
                "  const [, rerender] = useToggle();\n" +
                "\n" +
                "  const backlogRef = useRef(null);\n" +
                "\n" +
                "  const loadSidebar = async () => {\n" +
                "    //if backlog already loaded, do nothing\n" +
                "    if (backlogRef.current) return;\n" +
                "\n" +
                '    const { default: Component } = await import(/* webpackChunkName: "Backlog" */ "../Backlog");\n' +
                "    backlogRef.current = Component;\n" +
                "\n" +
                "    rerender();\n" +
                "  };\n" +
                "\n" +
                "  const Backlog = backlogRef.current;\n" +
                "  return (\n" +
                "    <div>\n" +
                "      <div>\n" +
                "        {/*sidebar*/}\n" +
                "        <button onClick={loadSidebar}>Backlog</button>\n" +
                "      </div>\n" +
                "      <div>\n" +
                "        {/*view*/}\n" +
                "        {Backlog && <Backlog />}\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  );\n" +
                "};"}
            </Code>
            <P>
              We import the component on click, await the data, save it in a
              ref, rerender and were done.
            </P>
            <P>
              That works great! Although it is manuel work and very verbose. For
              every view, we would need to write the same logic again and again.
              I personally would prefer not to think about the implementation at
              all. I would like to simply use it. I would like to have it more
              like: &quot;Here is a component. Please load and display it only
              as soon as I need it.&quot;
            </P>
            <Code>
              {"const Backlog = (props) => {\n" +
                "  const [, rerender] = useToggle();\n" +
                "  const ref = useRef(() => null);\n" +
                "  \n" +
                "  useEffect(() => {\n" +
                "    import('../Backlog').then(({default: Component}) => {\n" +
                "      ref.current = Component;\n" +
                "      \n" +
                "      rerender()\n" +
                "    });\n" +
                "  }, []);\n" +
                "  \n" +
                "  const Component = ref.current;\n" +
                "  return <Component {...props}/>\n" +
                "}"}
            </Code>
            <P>
              This is much better! Every component is isolated. I can simply
              import it and use it. I personally would not prefer to write this
              for every component tho.
            </P>
            <P>Lets move out the import state.</P>
            <Code>
              {"const Lazy = ({ factory,...props }) => {\n" +
                "  const [, rerender] = useToggle();\n" +
                "  const ref = useRef(null);\n" +
                "\n" +
                "  useEffect(() => {\n" +
                "    factory().then(({ default: Component }) => {\n" +
                "      ref.current = Component;\n" +
                "\n" +
                "      rerender();\n" +
                "    });\n" +
                "  }, []);\n" +
                "\n" +
                "  const Component = ref.current;\n" +
                "  return Component && <Component {...props} />;\n" +
                "};\n" +
                "\n" +
                "\n" +
                "const Backlog = (props) => {\n" +
                "  return <Lazy factory={() => import('../Backlog')} {...props}/>\n" +
                "}"}
            </Code>
            <P>
              Instead of hard code the import, we delegate the import call to a
              function. Now I do not need to reimplement the same logic multiple
              times. This solution is definitely better then the thing we have
              started with. Still to much work to. I do not like to worry about
              the props spreading, passing the import statement in to a
              component, wrap it in another component. Hustle! All this should
              be automated even further.
            </P>
            <P>Something like this would be awesome!</P>
            <Code>{'const BackLog = lazy(() => import("../Backlog"));'}</Code>
            <P>
              I get a component back, the import is delegated and I should not
              worry about props.
            </P>
            <Code>
              {"const lazy = (factory) => {\n" +
                "  // return a React component function\n" +
                "  return function LazyWrapper(props) {\n" +
                "    const [, rerender] = useToggle();\n" +
                "    const ref = useRef(() => null);\n" +
                "    useEffect(() => {\n" +
                "      // load JS module right away, LazyWrapper lazy is called\n" +
                "      factory()\n" +
                "        // wait for the JS module to be resolved\n" +
                "        .then(({ default: Component }) => {\n" +
                "          ref.current = Component;\n" +
                "\n" +
                "          rerender();\n" +
                "        })\n" +
                "        .catch((e) => {\n" +
                "          // handle error\n" +
                "        });\n" +
                "    }, []);\n" +
                "\n" +
                "    const Component = ref.current;\n" +
                "    return <Component {...props} />;\n" +
                "  };\n" +
                "};"}
            </Code>
            <P>By importing </P>
            <div>
              <div>
                <button onClick={toggle}>Load</button>
              </div>
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  {visible && <LazyComponent />}
                </Suspense>
              </div>
            </div>
          </article>
        </main>
      }
    ></Layout>
  );
};

export default Sus;
