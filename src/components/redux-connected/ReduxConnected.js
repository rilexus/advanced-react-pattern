import React from "react";
import { connect } from "react-redux";
import { RootReducerActionTypes } from "../../reducers/rootReducer";

const _ReduxConnected = ({ userName, setName, asyncSetName }) => {
  return (
    <div>
      <div>{userName}</div>
      <div>
        <div>
          <div>
            <label htmlFor="normal">Normal set name</label>
          </div>
          <input
            id={"normal"}
            type="text"
            onChange={({ target: { value } }) => setName(value)}
          />
        </div>

        <div>
          <div>
            <label htmlFor="async">async set name</label>
          </div>
          <input
            id={"async"}
            type="text"
            onChange={({ target: { value } }) => asyncSetName(value)}
          />
        </div>
      </div>
    </div>
  );
};

function setNameActionCreator(name) {
  return { type: RootReducerActionTypes.setName, payload: { name } };
}

// async 1
function asyncSetName(dispatch, name) {
  setTimeout(() => {
    dispatch(setNameActionCreator(name));
  }, 2000);
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userName: state.user.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    asyncSetName: (name) => {
      asyncSetName(dispatch, name);
    },
    setName: (name) => {
      dispatch({ type: RootReducerActionTypes.setName, payload: { name } });
    },
  };
};

export const ReduxConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ReduxConnected);
