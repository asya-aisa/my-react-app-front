import Field from '../../ui/form-elements/Field'

const AuthFields = ({ register, watch,  formState: { errors } }) => {
	const mail = watch('email')
	console.log(mail)
	return (
		<>
			<Field
				register={register}
				name='email'
				options={{
					required: 'Email is required',
					pattern: {
						value:
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

						message: 'Please enter a valid email address',
					},
				}}
				placeholder='E-mail'
				error={errors.email}
				type='text'
			/>

			<Field
				register={register}
				name='password'
				options={{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Min length should more 6 symbols',
					},
				}}
				placeholder='Password'
				error={errors.password}
				type='password'
			/>
		</>
	)
}

export default AuthFields
