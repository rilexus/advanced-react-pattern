import React, { useState } from "react";
import { connect } from "react-redux";
import { fork, call, put, cancelled, take, cancel } from "redux-saga/effects";

const sleep = async (time = 1000) =>
  new Promise((res) => setTimeout(res, time));

const API = {
  users: async (id) => {
    await sleep();
    if (id === 3) {
      throw new Error("failed");
    }
    return [
      {
        id,
        name: "Stan",
      },
      {
        id,
        name: "Bob",
      },
    ];
  },
};

const ActionTypes = {
  USER_FETCH_STARTED: "USER_FETCH_STARTED",
  USER_FETCH_REQUESTED: "USER_FETCH_REQUESTED",
  USER_FETCH_SUCCEEDED: "USER_FETCH_SUCCEEDED",
  USER_FETCH_FAILED: "USER_FETCH_FAILED",
  USER_FETCH_ABORT: "USER_FETCH_ABORT",
  USER_FETCH_CANCELLED: "USER_FETCH_CANCELLED",
};
function* fetchUserSaga(id) {
  try {
    yield put({ type: ActionTypes.USER_FETCH_STARTED });
    const user = yield call(API.users, id);
    yield put({ type: ActionTypes.USER_FETCH_SUCCEEDED, user: user });
  } catch (e) {
    yield put({ type: ActionTypes.USER_FETCH_FAILED, message: e.message });
  } finally {
    if (yield cancelled()) {
      yield put({ type: ActionTypes.USER_FETCH_CANCELLED });
    }
  }
}

function* fetchUserFlow() {
  while (true) {
    const { id } = yield take(ActionTypes.USER_FETCH_REQUESTED);
    const task = yield fork(fetchUserSaga, id);
    const action = yield take([
      ActionTypes.USER_FETCH_ABORT,
      ActionTypes.USER_FETCH_FAILED,
      ActionTypes.USER_FETCH_SUCCEEDED,
    ]);
    if (action.type === ActionTypes.USER_FETCH_ABORT) {
      yield cancel(task);
    }
  }
}

function* fetchUsersSaga() {
  yield fetchUserFlow();
}

const Saga_ = ({ request, abort }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          request(counter);
          setCounter((c) => c + 1);
        }}
      >
        REQUEST
      </button>
      <button onClick={() => abort()}>ABORT</button>
    </div>
  );
};

const Saga = connect(
  (state) => {
    return {
      users: state.users,
    };
  },
  (dispatch) => {
    return {
      request: (id) => dispatch({ type: ActionTypes.USER_FETCH_REQUESTED, id }),
      abort: () => dispatch({ type: ActionTypes.USER_FETCH_ABORT }),
    };
  }
)(Saga_);

export { fetchUsersSaga };
export default Saga;
