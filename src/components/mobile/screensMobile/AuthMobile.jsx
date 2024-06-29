import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthRedirect } from '../../screens/auth/useAuthRedirect'
import { useAuth } from '../../../hooks/useAuth'
import { useActions } from '../../../hooks/useActions'
import LayoutMobile from '../layoutMobile/LayoutMobile'

import AuthFields from '../../screens/auth/AuthFields'
import Button from '../../ui/form-elements/Button'
import styles from '../../../components/screens/auth/Auth.module.scss'
import Heading from '../../ui/heading/Heading'

const AuthMobile = () => {
	useAuthRedirect()
	
	const { isLoading } = useAuth()

	const [type, setType] = useState('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
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
		<LayoutMobile>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title='Auth' style={{ fontSize: '20px' }} />

					<AuthFields register={registerInput} formState={formState} />

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
		</LayoutMobile>
	)
}

export default AuthMobile
