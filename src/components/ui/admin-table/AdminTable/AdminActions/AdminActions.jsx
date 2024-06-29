import { useNavigate } from 'react-router-dom'
import MaterialIcon from '../../../MaterialIcon'
import styles from './AdminActions.module.scss'

const AdminActions = ({ editUrl, removeHandler }) => {
	const nav = useNavigate()

	return (
		<div className={styles.actions}>
			<button onClick={() => nav(editUrl)}>
				<MaterialIcon name='MdEdit' />
			</button>

			<button onClick={removeHandler}>
				<MaterialIcon name='MdClose' />
			</button>
		</div>
	)
}

export default AdminActions
