import React, {useCallback, useEffect, useState} from 'react';
import {createFetchedState} from "../../utils/createPrefetchedState";

const fetchUsers = () => new Promise((resolve,reject) => setTimeout(() => {
  // return data after 1 sec
  resolve({data: [{name: 1}, {name: 2}]})
},2000))

const useFetchedUsers = createFetchedState(fetchUsers() /* start fetching users before react kicks in */)

const Users = () => {
  const [users, error] = useFetchedUsers()
  const hasUsers = !!users
  return (
    <div>
      {
        !hasUsers ? (
          <div>Fetching Users ...</div>
        ): (
          <div>
            Data:
            {JSON.stringify(users)}
          </div>
        )
      }
      {/*<div>*/}
      {/*  Error:*/}
      {/*  {JSON.stringify(error)}*/}
      {/*</div>*/}
    </div>
  )
}


const PrefetchedState = () => {
  return (
    <div>
      <Users/>
    </div>
  );
};

export {PrefetchedState};