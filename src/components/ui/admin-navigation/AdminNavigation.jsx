import AdminNavItem from './AdminNavItem'
import styles from './AdminNavigation.module.scss'
import { navItems } from './admin-navigation.data'

const AdminNavigation = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map(item => <AdminNavItem key={item.link} item={item} />)}
			</ul>
		</nav>
	)
}

export default AdminNavigation