import cn from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import styles from './AdminNavigation.module.scss'

const AdminNavItem = ({ item: { link, title } }) => {
	const { pathname } = useLocation()

	return (
		<li>
			<Link
				to={link}
				className={cn({
					[styles.active]: pathname === link,
				})}
			>
				{title}
			</Link>
		</li>
	)
}

export default AdminNavItem
