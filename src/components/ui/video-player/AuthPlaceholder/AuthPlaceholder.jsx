import { useNavigate } from 'react-router-dom'
import styles from './AuthPlaceholder.module.scss'

const AuthPlaceholder = () => {
	const nav = useNavigate()

	return (
		<div className={styles.placeholder}>
			<div>
				<div>You must be logged in to start watching</div>
				<button onClick={() => nav('/auth')}>Sign in</button>
			</div>
		</div>
	)
}

export default AuthPlaceholder
