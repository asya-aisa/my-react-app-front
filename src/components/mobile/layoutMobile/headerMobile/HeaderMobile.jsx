import ReactSwitch from 'react-switch'
import { useTheme } from '../../../../hooks/useTheme'
import Logo from '../../../layout/Header/Logo'
import Search from '../../../layout/Header/Search/Search'
import Heading from '../../../ui/Heading'
import Hamburger from '../hamburger/Hamburger'
import styles from './HeaderMobile.module.scss'

const HeaderMobile = ({ title = 'Kinoteka', style }) => {
	const { theme, setTheme, checked, setChecked } = useTheme()

	const toggleTheme = () => {
		setChecked(checked === 'true' ? 'false' : 'true')
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<div className={styles.header}>
			<div className={styles.main}>
				<Logo />
				<Heading title={title} style={style} />

				<div className={styles.themeCont}>
					<span className={styles.span}>dark</span>
					<ReactSwitch
						checked={JSON.parse(checked)}
						onChange={toggleTheme}
						checkedIcon={false}
						uncheckedIcon={false}
						onColor='#dc6b92'
						offColor='#2a2628'
					/>
					<span className={styles.span}>light</span>
				</div>

				<Hamburger />
			</div>
			<Search />
		</div>
	)
}

export default HeaderMobile
