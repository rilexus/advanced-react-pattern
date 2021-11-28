import React, { useEffect, useRef, useState } from "react";
import {
  skipUntil,
  mapTo,
  takeUntil,
  scan,
  switchMap,
  tap,
  exhaustMap,
  mergeMap,
  map,
} from "../../utils/observable/operators";
import {
  fromEvent,
  fromFetch,
  interval,
  merge,
  NEVER,
  of,
} from "../../utils/observable";

const fromClickEvent = (element) => {
  return fromEvent(element, "click");
};

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const stopButtonRef = useRef<any>();
  const startButtonRef = useRef<any>();

  useEffect(() => {
    const start$ = fromClickEvent(startButtonRef.current).pipe(mapTo(true));
    const stop$ = fromClickEvent(stopButtonRef.current).pipe(mapTo(false));

    const clicks$ = merge(start$, stop$).pipe(
      switchMap((run) => (run ? interval(1000) : NEVER)),
      scan((t) => t + 1, 0),
      tap(setCounter)
    );

    clicks$.subscribe({
      next: (v) => {
        console.log(v);
      },
    });
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <div>
        <h3>{counter}</h3>
      </div>
      <div>
        <button ref={startButtonRef}>Start</button>
        <button ref={stopButtonRef}>Stop</button>
      </div>
    </div>
  );
};

const Fetch = () => {
  const fetchButtonRef = useRef<any>();

  useEffect(() => {
    const s = fromClickEvent(fetchButtonRef.current)
      .pipe(
        exhaustMap(() => {
          // wait till prev fetch resolves, before fetch again
          return fromFetch("/api").pipe(mergeMap((res) => res.json()));
        })
      )
      .subscribe({
        next: (v) => {
          console.log(v);
        },
      });
    return () => {
      s.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Fetch</h2>
      <button ref={fetchButtonRef}>Fetch</button>
    </div>
  );
};

const ObservableComponent = () => {
  return (
    <div>
      <h1>Observables</h1>
      <div>
        <Timer />
      </div>
      <div>
        <Fetch />
      </div>
    </div>
  );
};

export { ObservableComponent };
