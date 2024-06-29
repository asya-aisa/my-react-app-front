import { Link } from 'react-router-dom'
import MaterialIcon from '../../ui/MaterialIcon'
import styles from './MobileLayout.module.scss'

const AdminBottom = () => {
	return (
		<Link className={styles.adminBottom} to='/manage/movies'>
			<MaterialIcon name='MdOutlineLock' />
		</Link>
	)
}

export default AdminBottom
