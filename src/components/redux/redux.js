import React, {
    createContext,
    useCallback,
    useContext,
    useReducer,
    memo,
    useMemo,
} from 'react';

const ReduxStateContext = createContext({});
const ReduxDispatchContext = createContext({});

const useApplicationState = () => useContext(ReduxStateContext);
const useApplicationDispatch = () => useContext(ReduxDispatchContext);

export const useApplicationContext = () => {
    return [useApplicationState(),useApplicationDispatch()]
};

const applicationReducer = (state = {}, action) => {
    const {type, payload}= action;

    if (type === 'fetched-user'){
        return  {
            ...state,
            ...payload
        }
    }

    return state;
};

const Redux = ({children, initState}) => {
    const [applicationState, _dispatch] = useReducer(applicationReducer,initState || {
        foo: 'foo',
        bar: 'bar'
    });

    const dispatch = useCallback((action) => {
        if (typeof action === 'function'){
            action(_dispatch)
        } else {
            _dispatch(action)
        }
    }, [_dispatch]);

    return (
        <ReduxStateContext.Provider value={applicationState}>
            <ReduxDispatchContext.Provider value={dispatch}>
                {children}
            </ReduxDispatchContext.Provider>
        </ReduxStateContext.Provider>
    );
};

export const withApplicationContext = (Component) => {
    return function _Component(props){
        const [applicationState, dispatch] = useApplicationContext();
        return <Component {...props} {...applicationState} dispatch={dispatch}/>
    }
};

export function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function Connected(props){
            const [applicationState, dispatch] = useApplicationContext();

            const selectedState = useMemo(() => mapStateToProps(applicationState), [applicationState]);
            const selectedDispatch = useMemo(() => mapDispatchToProps(dispatch), [dispatch]);

            const connectedValues = useMemo(() => ({
                ...selectedState,
                ...selectedDispatch,
                ...props
            }),[selectedState, selectedDispatch, props]);

            const MemComponent = memo((pr)=> <Component {...pr}/>)
            return <MemComponent {...connectedValues}/>
        }
    }
}

export default Redux;