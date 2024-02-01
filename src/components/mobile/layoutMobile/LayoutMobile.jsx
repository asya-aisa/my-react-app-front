import HeaderMobile from './headerMobile/HeaderMobile'
import styles from './LayoutMobile.module.scss'

const LayoutMobile = ({ children }) => {
	return (
		<div className={styles.layoutMobileCont}>
			<HeaderMobile />
			<div className={styles.children}>{children}</div>
		</div>
	)
}

export default LayoutMobile
