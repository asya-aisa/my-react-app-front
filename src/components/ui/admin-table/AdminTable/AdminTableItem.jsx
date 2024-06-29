import AdminActions from './AdminActions/AdminActions'
import styles from './AdminTable.module.scss'

const AdminTableItem = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map(value => (
				<div key={value}>
					{value.split(',')[0]}
					{value.split(',').length > 1 ? '...' : ''}
				</div>
			))}

			<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	)
}

export default AdminTableItem
