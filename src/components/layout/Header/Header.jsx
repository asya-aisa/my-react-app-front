import ReactSwitch from 'react-switch'
import { useTheme } from '../../../hooks/useTheme'

import styles from './Header.module.scss'
import Logo from './Logo'
import Search from './Search/Search'
import Heading from '../../ui/heading/Heading'

export const Header = ({title = 'Kinoteka', style}) => {
	const { theme, setTheme, checked, setChecked } = useTheme()

	const toggleTheme = () => {
		setChecked(checked === 'true' ? 'false' : 'true')
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<div className={styles.header}>
			<div className={styles.contLogoName}>
				<Logo />
				<Heading title={title} style={style} />
			</div>

			<Search />

			<ReactSwitch
				checked={JSON.parse(checked)}
				onChange={toggleTheme}
				checkedIcon={false}
				uncheckedIcon={false}
				onColor='#dc6b92'
				offColor='#2a2628'
			/>
		</div>
	)
}
