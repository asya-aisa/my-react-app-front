import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Button from '../../ui/form-elements/Button'
import Heading from '../../ui/heading/Heading'
import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { useAuthRedirect } from './useAuthRedirect'

const Auth = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
		watch,
	} = useForm({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit = data => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Layout>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title='Auth' style={{ fontSize: '20px' }} />

					<AuthFields register={registerInput} formState={formState} watch={watch} />

					<div className={styles.buttons}>
						<Button
							type='submit'
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type='submit'
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Layout>
	)
}

export default Auth
