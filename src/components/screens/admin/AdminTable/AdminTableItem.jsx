import { useNavigate } from 'react-router-dom'
import MaterialIcon from '../../../ui/MaterialIcon'
import styles from './AdminTable.module.scss'

const AdminTableItem = ({ tableItem, removeHandler }) => {
	const nav = useNavigate()

	return (
		<div className={styles.item}>
			<div>{tableItem.title}</div>

			<div className={styles.actions}>
				<button onClick={() => nav(tableItem.editUrl)}>
					<MaterialIcon name='MdEdit' />
				</button>
				
				<button onClick={() => removeHandler(tableItem._id)}>
					<MaterialIcon name='MdClose' />
				</button>
			</div>
		</div>
	)
}

export default AdminTableItem
