import cn from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navigation.module.scss'
import MaterialIcon from '../../ui/MaterialIcon'

const MenuItem = ({ item }) => {
	const { pathname } = useLocation()


	return (
		<li
			className={cn({
				[styles.active]: pathname === item.link,
			})}
		>
			<Link to={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
