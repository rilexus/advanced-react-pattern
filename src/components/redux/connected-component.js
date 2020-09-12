import React from 'react';
import {connect} from "./redux";

const _User = (props) => {
    const {getUserById,user,name} = props;
    return (
        <div>
            <div>{user.name || 'No User'}</div>
            <div>
                <button onClick={()=>getUserById(name)}>Fetch</button>
            </div>
        </div>
    );
};


const fetchUserById = async (id,dispatch) => {
    // call to API
    const user = {name: `User Name Here ${id}`};
    setTimeout(()=>{
        dispatch({type: 'fetched-user', payload:{user}});
    },1000)
};

export const User = connect(
    (state) => ({
        user: state.user
    }),
    (dispatch) => ({
        getUserById: (byId) => dispatch(() => fetchUserById(dispatch, byId))
    }),
    )(_User);