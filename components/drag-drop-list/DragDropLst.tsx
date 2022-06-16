import { forwardRef, useState } from "react";

import { useDrag } from "./hooks/use-drag/useDrag";

const Some = function Wrapper({ children }) {
  return <span>{children}</span>;
};

const Li = forwardRef(function Wrapper({ children, ...props }: any, _ref: any) {
  return (
    <li
      onClick={(event) => {}}
      ref={_ref}
      style={{
        border: "1px solid grey",
        background: "grey",
        height: "3.5rem",
        width: "50%",
        //userSelect: "none",
      }}
    >
      <Some>{children}</Some>
      <button {...props}>DRAG ME</button>
    </li>
  );
});

const Drop = function Wrapper({ children, setDataSource }) {
  const { ref, dragElement, dragChildren } = useDrag(children, setDataSource);

  return (
    <div ref={ref}>
      {dragElement}
      {dragChildren}
    </div>
  );
};

const DragDropList = function Wrapper() {
  const [event, setEvent] = useState("");

  const [list, setList] = useState(() =>
    Array.from({ length: 10 }, (_, i) => i)
  );

  return (
    <div style={{}}>
      <div>{event}</div>
      <ul>
        <Drop setDataSource={setList}>
          {list.map((n, idx) => {
            return <Li key={`li-${n}`}>{n}</Li>;
          })}
        </Drop>
      </ul>
    </div>
  );
};

export { DragDropList, useDrag };
