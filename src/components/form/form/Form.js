import React, {forwardRef, useEffect} from 'react';
import { useForm } from 'react-hook-form';


const validate = (email) => {
	console.log(email)
	return {
		notEmail: 'Not an Email',
		notNumber: 'Not an Number',
	}
}

const EmailInput = forwardRef((props, ref) => {
	return <input
		placeholder={'Email'}
		ref={(inputRef) => {
		if (typeof ref === "function"){
			ref(inputRef)
		} else {
			ref.current = inputRef;
		}
	}} type="text" {...props}/>
})

const Form = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		defaultValues: {
			phone: 1,
			email: ''
		},
		mode: 'onChange',
	});
	
	console.log(errors)
	
	return (
		<div>
			<div>
				<EmailInput {...register('email', {
					validate: {
						min: (v) => v.length <= 2 ? 'Min Length': true,
					},
				})}/>
			</div>
			<div>
				<div>
					<input type="text" {...register('phone', {
						validate: {
							notTwo: (v) => v !== "2" ? "Not Two":true
						},
					})}/>
				</div>
				<div>{
					errors.phone? 'Phone Errror': null
				}</div>
			</div>
			
		</div>
	);
};

export default Form;
