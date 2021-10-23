import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

const context = createContext({});

const useForm = () => {
	const [values, setValues] = useState({});
	
	const api = {
		values,
		setValues,
	}
	
	const Form = useMemo(() => ({children, ...props}) => {
		return <context.Provider value={Form.api}>
			<form {...props}>{children}</form>
		</context.Provider>
	}, []);
	
	Form.api = api;
	
	return {Form, values}
}

const Input = ({name, initialValue, ...props}) => {
	const {values, setValues} = useContext(context);
	
	useEffect(() => {
		setValues((p) => ({...p, [name]: initialValue}))
	}, [])
	
	return <input {...props} value={values[name]} onChange={(e) => {
		const {value} = e.target;
		setValues((p) => ({...p, [name]: value}))
	}}/>
}


export { useForm, Input };
