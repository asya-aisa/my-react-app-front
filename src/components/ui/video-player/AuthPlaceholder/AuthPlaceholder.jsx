import { useNavigate } from 'react-router-dom'
import styles from './AuthPlaceholder.module.scss'
import Button from '../../form-elements/Button'

const AuthPlaceholder = () => {
	const nav = useNavigate()

	return (
		<div className={styles.placeholder}>
			<div>
				<div>You must be logged in to start watching</div>
				<Button onClick={() => nav('/auth')}>Sign in</Button>
			</div>
		</div>
	)
}

export default AuthPlaceholder
