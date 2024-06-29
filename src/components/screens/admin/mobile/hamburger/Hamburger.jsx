import cn from 'clsx'
import styles from './Hamburger.module.scss'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'

const Hamburger = ({ show }) => {
	return (
		<div
			className={cn(styles.hamburger, {
				[styles.show]: show,
			})}
		>
			<AdminNavigation />
		</div>
	)
}

export default Hamburger
