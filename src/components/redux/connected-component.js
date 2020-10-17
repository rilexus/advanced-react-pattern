import React, { useMemo } from "react";
import { connect, useDispatch } from "./reduxProvider";

const sleep = async (time) => new Promise((res) => setTimeout(res, time));

const fetchUserById = async (dispatch, id) => {
  // call to API
  const user = { name: `User Name Here ${id}` };
  await sleep(1000);
  dispatch({ type: "fetched-user", payload: { user } });
};

/**
 * Creates a hook of binded action action creators to the redux dispatch function
 * @param {Object<string, function(dispatch: function({type: string}): {type: string}, ...[*]): {type: string}>} actionCreators
 * @return {function(void): Object<string, function(...[*])>}
 */
function createBindedDispatch(actionCreators) {
  return function useBindDispatch() {
    const dispatch = useDispatch();

    const binded = useMemo(() => {
      console.log("here");
      return Object.entries(actionCreators).reduce(
        (acc, [name, actionCreator]) => {
          return {
            ...acc,
            // make the action creator available under the same name,
            // as passed in the actionCreators object but bind the function to the stores dispatch function
            [name]: (...args) => actionCreator(dispatch, ...args),
          };
        },
        {}
      );
    }, [dispatch]);

    return binded;
  };
}

const useUserDispatch = createBindedDispatch({ fetchUserById });

const _User = ({ user, name }) => {
  const { fetchUserById } = useUserDispatch();

  return (
    <div>
      <div>{user.name || "No User"}</div>
      <div>
        <button onClick={() => fetchUserById(name)}>Fetch</button>
      </div>
    </div>
  );
};

export const User = connect(
  (state) => ({
    user: state.user,
  }),
  (dispatch) => ({
    getUserById: (byId) => dispatch(() => fetchUserById(dispatch, byId)),
  })
)(_User);
