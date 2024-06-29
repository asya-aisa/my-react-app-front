import cn from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import MaterialIcon from '../../../ui/MaterialIcon'
import styles from './BottomMenu.module.scss'

const BottomMenuItem = ({ item }) => {
	const { pathname } = useLocation()
	return (
		<Link
			to={item.link}
			className={cn({
				[styles.active]: pathname === item.link,
			})}
		>
			<MaterialIcon name={item.icon} />
			<span>{item.title}</span>
		</Link>
	)
}

export default BottomMenuItem
