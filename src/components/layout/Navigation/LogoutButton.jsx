import { useActions } from '../../../hooks/useActions'
import MaterialIcon from '../../ui/MaterialIcon'
import styles from './Navigation.module.scss'

const LogoutButton = () => {
	const { logout } = useActions()

	const logoutHandler = e => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={logoutHandler}>
				<MaterialIcon name='MdLogout' />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton
