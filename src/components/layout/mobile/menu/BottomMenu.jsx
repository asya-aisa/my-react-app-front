import styles from './BottomMenu.module.scss'
import BottomMenuItem from './BottomMenuItem'
import { menuItems } from './menu.data'

const BottomMenu = () => {
	return (
		<div className={styles.menu}>
			{menuItems.map(item => (
				<BottomMenuItem key={item.icon} item={item} />
			))}
		</div>
	)
}

export default BottomMenu
