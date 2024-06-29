import AdminBottom from './AdminBottom'
import styles from './MobileLayout.module.scss'
import BottomMenu from './menu/BottomMenu'

const MobileLayout = ({ children }) => {
	return (
		<div className={styles.mobileLayout}>
			<div>
				<div className={styles.childrenBlock}>{children}</div>
				<AdminBottom />
				<BottomMenu />
			</div>
		</div>
	)
}

export default MobileLayout
