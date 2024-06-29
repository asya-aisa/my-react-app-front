import { useLocation } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useAuth } from '../../hooks/useAuth'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const Layout = ({ children, title, style }) => {
	const { user } = useAuth()

	const { checkAuth, logout } = useActions()

	const { pathname } = useLocation()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

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
