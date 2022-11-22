import React, {
  useEffect,
  useReducer,
  useRef,
  useState,
  createElement,
} from "react";
import Layout from "../../components/Layout/Layout";
import useToggle from "../../hooks/useToggle/useToggle";
import Navigation from "../../components/Navigation/Navigation";
import H1 from "../../ui/H1/H1";
import { P } from "../../ui/P";
import prefixBasePath from "../../utils/prefixBasePath";
import { Code } from "../../ui/Code";
import ApplicationDemoWithoutSuspense from "./components/ApplicationDemoWithoutSuspense/ApplicationDemoWithoutSuspense";

const sleep = async (time = 200) => new Promise((res) => setTimeout(res, time));

const createLazy = (endpoint) => {
  return (name) => {
    if (typeof window === "object") {
      /**
       * Provide other dependencies, if needed.
       */
      window.createElement = createElement;
    }

    /**
     * Return HOC Component
     */
    return (props) => {
      const [, rerender] = useReducer(() => ({}), {});
      const ref = useRef(() => null);

      useEffect(() => {
        if (window[name]) {
          /**
           * Look in to the cache. Prevent Fetching multiple times.
           */
          ref.current = window[name];
          return;
        }
        fetch(`${endpoint}/manifest.json`)
          .then((res) => res.json())
          .then((manifest) => {
            // Get path
            const path = manifest.components[name];

            const script = document.createElement("script");
            script.type = "application/javascript";
            script.src = `${endpoint}${path}`;
            script.onload = () => {
              ref.current = window[name];
              rerender();
            };

            const head = document.head;
            head.appendChild(script);
          });
      }, []);

      const Component = ref.current;
      return <Component {...props} />;
    };
  };
};

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
        throw () => {
          console.log("some");
        };
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
    const { isLoading } = this.state;
    const { fallback, children } = this.props;

    if (isLoading) {
      return fallback;
    }

    return children;
  }
}

const LazyComponent = lazy(async function Wrapper() {
  await sleep(2000); // simulate a long request
  return import(
    /* webpackChunkName: "Square" */ "../../components/Square/Square"
  );
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

// const Application = () => {
//   const [currentComponent, setComponent] = useState("Backlog");
//
//   return (
//     <div>
//       <div>
//         <button onClick={() => setComponent("Backlog")}>Backlog</button>
//         <button onClick={() => setComponent("Board")}>Board</button>
//         <button onClick={() => setComponent("Report")}>Report</button>
//       </div>
//       <div>
//         {currentComponent === "Backlog" && <Backlog />}
//         {currentComponent === "Board" && <Board />}
//         {currentComponent === "Report" && <Report />}
//       </div>
//     </div>
//   );
// };

// const BackLog = lazy(() => import("../Backlog"));
// const Component = () => {
//   return <BackLog fallback={<div>Loading</div>}/>
// }

const la = createLazy("");

const Comp = la("Lazy");

const Sus = () => {
  const [visible, toggle] = useToggle();
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <main>
          <article>
            <header>
              <H1>Suspense</H1>
              <div>
                <address>
                  By{" "}
                  <a rel="author" href="https://github.com/rilexus">
                    Stanislav Panchenko
                  </a>
                </address>
                on{" "}
                <time pubdate dateTime="2022-06-19" title="Jun 19th, 2022">
                  6/19/22
                </time>
              </div>
            </header>
            <P>
              <i>
                After this article you should be able to understand what lazy
                loading is, why it maters and how it is implemented under the
                hood.
              </i>
            </P>
            <P>
              Imagine you have a big Single Page Application with a sidebar like
              this one.
            </P>
            <figure>
              <img
                width={"500px"}
                height={"auto"}
                src={prefixBasePath("/application_sidebar.png")}
              />
              <figcaption>Screenshot of the JIRA application.</figcaption>
            </figure>
            <P>
              Every button leads to a different page. I think the word
              &quot;view&quot; would be more appropriate, since its not a page.
              So every view is separate and independent from each other. It has
              its own purpose, its own code.
            </P>
            <P>
              The user is interested in one view at a time and probably not in
              all the views of the application. Just think how often you visit
              the &quot;setting&quot; view of any application. Ill bet, you go
              there one time a month, if at all.
            </P>
            <P>
              Now the thing is, if we as a developer do not pay attention, we
              would bundle the whole application to one big file.
            </P>
            <P>
              This has an effect on the loading time ouf the application and the
              user experience. All the javascript code, css, images, svg`s etc.
              We ship a lot of code at once.
            </P>
            <P>
              We can split our application in to smaller chunks and load the
              needed modules dynamically.
            </P>
            <P>The core idea is the code snippet below.</P>
            <Code>
              {'const script = document.createElement("script");\n' +
                'script.type = "application/javascript";\n' +
                "script.src = `https://our-server/LazyComponent.js`;\n" +
                "script.onload = () => {\n" +
                "  ref.current = window['Lazy'];\n" +
                "  const head = document.head;\n" +
                "  head.appendChild(script);\n" +
                "  rerender();\n" +
                "};"}
            </Code>
            <P>
              We create a script element and point its src prop to the component
              we want to include in to our application. The only agreement we
              need to follow is that in the end of our LazyComponent, we need to
              attach ourself to the window or any other global:
            </P>
            <Code>
              {"const Lazy = ({ value }) => {\n" +
                '  return createElement("div", null, [`Lazy Loaded Component: ${value}`]);\n' +
                "};\n" +
                "\n" +
                "window.Lazy = Lazy;"}
            </Code>
            <P>More specifically its this piece of code:</P>
            <Code>
              {"const Lazy = (props) => {\n" +
                "      const [, rerender] = useReducer(() => ({}), {});\n" +
                "      const ref = useRef(() => null);\n" +
                "\n" +
                "      useEffect(() => {\n" +
                '        const script = document.createElement("script");\n' +
                '        script.type = "application/javascript";\n' +
                "        script.src = `https://our-server/LazyComponnet.js`;\n" +
                "        script.onload = () => {\n" +
                "          ref.current = window['Lazy'];\n" +
                "          rerender();\n" +
                "        };\n" +
                "\n" +
                "        const head = document.head;\n" +
                "        head.appendChild(script);\n" +
                "      }, []);\n" +
                "\n" +
                "      const Component = ref.current;\n" +
                "      return <Component {...props} />;\n" +
                "    };"}
            </Code>
            <P>
              There is a lot more potential for improvement. We do not need to
              hard code the server url and the file name of the lazy component.
              We could make use of the manifest.json file on the server and
              specify the url path to the lazy component there. We would access
              the path by the component name only.
            </P>
            <Code>
              {"// manifest.json\n" +
                "{\n" +
                ' "Lazy": "/repo/LazyComponent.js" \n' +
                "}"}
            </Code>
            <P>
              Now we would need to fetch the manifest.json, get the url of the
              component and do the script trick again.
            </P>
            <Code>
              {"const Lazy = (props) => {\n" +
                "      const [, rerender] = useReducer(() => ({}), {});\n" +
                "      const ref = useRef(() => null);\n" +
                "\n" +
                "      useEffect(() => {\n" +
                "        if (window['Lazy']) {\n" +
                "          /**\n" +
                "           * Look in to the cache. Prevent Fetching multiple times.\n" +
                "           */\n" +
                "          ref.current = window['Lazy'];\n" +
                "          return;\n" +
                "        }\n" +
                "        fetch(`${endpoint}/manifest.json`)\n" +
                "          .then((res) => res.json())\n" +
                "          .then((manifest) => {\n" +
                "            // Get path\n" +
                "            const path = manifest[name];\n" +
                "\n" +
                '            const script = document.createElement("script");\n' +
                '            script.type = "application/javascript";\n' +
                "            script.src = `https://our-server${path}`;\n" +
                "            script.onload = () => {\n" +
                "              ref.current = window['Lazy'];\n" +
                "              rerender();\n" +
                "            };\n" +
                "\n" +
                "            const head = document.head;\n" +
                "            head.appendChild(script);\n" +
                "          });\n" +
                "      }, []);\n" +
                "\n" +
                "      const Component = ref.current;\n" +
                "      return <Component {...props} />;\n" +
                "    };"}
            </Code>
            <P>
              Luckily we do not need to do all this ourself. We simply utilise{" "}
              <a
                href="https://webpack.js.org/guides/lazy-loading/"
                style={{
                  marginRight: ".3rem",
                }}
              >
                webpack and the import function.
              </a>
              which does exactly the same things for us.
            </P>
            <Code>
              {'const Backlog = await import(/* webpackChunkName: "Backlog" */ "../Backlog");\n' +
                'const Board = await  import(/* webpackChunkName: "Board" */"../Board");\n' +
                'const Reports = await import(/* webpackChunkName: "Report" */"../Reports");\n' +
                'const Releases = await import(/* webpackChunkName: "Releases" */"../Releases");'}
            </Code>
            <P>
              By doing this, webpack will split our application during the
              bundle time in small chunks. We will not get one single, heavy
              file, but multiple small once. One file for every component.
            </P>
            <P>
              There is one thing left to do for us. That is to load this js
              files and to display those components only when we need them.
            </P>
            <P>One obvious implementation could be like this.</P>
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
              This is much better! Every component would be isolated. I can
              simply import it and use it. Personally, I would not prefer to
              write this for every component tho.
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
              started with. Still to much work for me tho. I do not like to
              worry about the props spreading, passing the import statement in
              to a component, wrap it in another component. Hustle! All this
              should be automated even further.
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
            <P>That is much better!</P>
            <P>
              I would import all needed components at the top of the file and
              not worry about re-rendering, refs props and so on.
            </P>
            <Code>
              {'const Backlog = lazy(() => import(/* webpackChunkName: "Backlog" */ "../Backlog"));\n' +
                'const Board = lazy(() => import(/* webpackChunkName: "Board" */"../Board"));\n' +
                'const Reports = lazy(() => import(/* webpackChunkName: "Report" */"../Reports"));'}
            </Code>
            <P>The application would look this now.</P>
            <Code>
              {"const Application = () => {\n" +
                '  const [currentComponent, setComponent] = useState("Backlog");\n' +
                "\n" +
                "  return (\n" +
                "    <div>\n" +
                "      <div>\n" +
                '        <button onClick={() => setComponent("Backlog")}>Backlog</button>\n' +
                '        <button onClick={() => setComponent("Board")}>Board</button>\n' +
                '        <button onClick={() => setComponent("Report")}>Report</button>\n' +
                "      </div>\n" +
                "      <div>\n" +
                "        {currentComponent === 'Backlog' && <Backlog/>}\n" +
                "        {currentComponent === 'Board' && <Board/>}\n" +
                "        {currentComponent === 'Report' && <Report/>}\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  );\n" +
                "};"}
            </Code>
            <small>You could you the react-router when you prefer that.</small>
            <P>
              This is nice and neat! And the best part is, that the application
              will be served to the user much faster.
            </P>

            <P>The behavior of the application would be now like this:</P>
            <div>
              <ApplicationDemoWithoutSuspense />
            </div>
            <P>
              If you open the network tab in the browser, every time you click
              on the sidebar button, you will see that the component file is
              being loaded. The application is not served as a whole initially,
              but piece by piece.
            </P>
            <figure>
              <img
                src={prefixBasePath("/watterfall.png")}
                alt=""
                width={"600px"}
              />
              <figcaption>Browsers network tab.</figcaption>
            </figure>
            <P>
              Currently we have an UX issue. When you click the sidebar button,
              the current view disappears and the user sees nothing for one
              second. In the real life application it might be longer or shorter
              depending on the size of the component file and the internet
              connect of the user. In the current example its 1000ms exactly,
              because I have delayed the response time to illustrate the issue.
            </P>
            <P>
              Leaving the user with a blank page is disorienting. Lets fix that.
              We could do something like this:
            </P>
            <Code>
              {'const BackLog = lazy(() => import("../Backlog"));\n' +
                "const Component = () => {\n" +
                "  return <BackLog fallback={<div>Loading...</div>}/>\n" +
                "}"}
            </Code>
            <P>
              We pass a fallback UI element. While the component is being
              served, a fallback should be displayed. <br />
              We could implement that, but Im not a fan of this solution. It
              would suggest that the Backlog component itself accepts a
              fallback. But it does not! The fallback is not an implementation
              detail for the Backlog.
            </P>
            <P>I would be nice to do something like this instead:</P>
            <Code>
              {'const BackLog = lazy(() => import("../Backlog"));\n' +
                "const Component = () => {\n" +
                "  return (\n" +
                "    <Suspence fallback={<div>Loading...</div>}>\n" +
                "      <BackLog />\n" +
                "    </Suspence>\n" +
                "  );\n" +
                "};"}
            </Code>
            <P>
              Currently there is no way I could do that. The Suspense component
              does not communicate with the Backlog in any way. We could solve
              it with the -as I call it-{" "}
              <a href={prefixBasePath("/Decorator")}>Decorator</a> pattern. I
              would pass a callback to the Backlog and as soon as the component
              finishes loading call it and rerender the Suspense component.
            </P>
            <P>There is another way tho! This will conclude this article.</P>
            <P>Lets adjust the lazy function:</P>
            <Code>
              {"const lazy = (factory) => {\n" +
                "  let Component = () => null;\n" +
                '  let status = "pending";\n' +
                "\n" +
                "  // return a React component function\n" +
                "  return function LazyWrapper(props) {\n" +
                "    useEffect(() => {\n" +
                "      // load JS module right away, LazyWrapper lazy is called\n" +
                "      let promise = factory()\n" +
                "        // wait for the JS module to be resolved\n" +
                "        .then((module) => {\n" +
                '          status = "resolved";\n' +
                "          // get the default export from a file\n" +
                "          Component = module.default;\n" +
                "        })\n" +
                "        .catch((e) => {\n" +
                "          // handle error\n" +
                '          status = "error";\n' +
                "        });\n" +
                "\n" +
                "      // if still pending, throw to by catched by Suspense\n" +
                '      if (status === "pending") {\n' +
                "        throw promise;\n" +
                "      }\n" +
                "    }, []);\n" +
                "\n" +
                "    return <Component {...props} />;\n" +
                "  };\n" +
                "};"}
            </Code>
            <P>
              As soon as the LazyWrapper renders, the factory is called and as
              long as the promise is pending, we throw it. Yes, we can throw a
              promise. We can throw not only error instances, we can throw
              anything. String, numbers, you name it! You can throw even
              functions.
            </P>
            <figure>
              <img
                src="https://media.giphy.com/media/l4FGCfEWJ7ztMzZao/giphy.gif"
                alt="Facial expression emphasizing confusion."
              />
            </figure>
            <P>The implementation of the Suspense looks like this:</P>
            <Code>
              {"class Suspense extends React.Component {\n" +
                "  constructor(props) {\n" +
                "    super(props);\n" +
                "    this.state = { isLoading: false };\n" +
                "  }\n" +
                "\n" +
                "  componentDidCatch(promiseOrError, errorInfo) {\n" +
                "    // do nothing, if not a promise\n" +
                '    if (typeof promiseOrError.then !== "function") return;\n' +
                "    const promise = promiseOrError;\n" +
                "    this.setState({\n" +
                "      // if catched, show fallback\n" +
                "      isLoading: true,\n" +
                "    });\n" +
                "\n" +
                "    promise\n" +
                "      .then(() => {\n" +
                "        // promise is resolved, render children\n" +
                "        this.setState({\n" +
                "          isLoading: false,\n" +
                "        });\n" +
                "      })\n" +
                "      .catch((e) => {\n" +
                "        // handle error\n" +
                "      });\n" +
                "  }\n" +
                "\n" +
                "  render() {\n" +
                "    const { isLoading } = this.state;\n" +
                "    const { fallback, children } = this.props;\n" +
                "\n" +
                "    if (isLoading) {\n" +
                "      return fallback;\n" +
                "    }\n" +
                "\n" +
                "    return children;\n" +
                "  }\n" +
                "}"}
            </Code>
            <P>
              The steps of the execution are as follows: Suspense renders
              children, the LazyWrapper from the lazy functions renders and
              throws the promise, Suspense catches it in the componentDidCatch
              function, it sets the internal state to isLoading, re-renders and
              shows the fallback UI. As soon as the promise resolves, Suspense
              sets the isLoading state to false and renders children again. This
              time the LazyWrapper does not call the factory but renders the
              fetched component.
            </P>
          </article>
        </main>
      }
    />
  );
};

export default Sus;
