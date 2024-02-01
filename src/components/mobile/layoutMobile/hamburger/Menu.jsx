import cn from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({ isShow, setIsShow }) => {
	const { user } = useAuth()
	const { logout, login } = useActions()
	const nav = useNavigate()

	const logoutHandler = () => {
		logout()
		setIsShow(false)
	}

	const loginHandler = () => {
		nav('/auth')
		setIsShow(false)
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow,
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`} className={styles.li}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					{user ? (
						<button onClick={logoutHandler}>Logout</button>
					) : (
						<button onClick={loginHandler}>Login</button>
					)}
				</li>
			</ul>
		</nav>
	)
}

export default Menu
