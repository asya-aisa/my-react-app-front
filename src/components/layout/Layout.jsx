import { Header } from './Header/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({ children, title, style }) => {
	return (
		<div className={styles.layout}>
		<div>
			<Navigation />
			<Header className={styles.header} title={title} style={style} />
			<div className={styles.center}>{children}</div>
			<Sidebar />
			</div>
		</div>
	)
}

export default Layout
