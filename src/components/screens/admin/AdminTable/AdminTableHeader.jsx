import styles from './AdminTable.module.scss'

const AdminTableHeader = () => {
	return (
		<div className={styles.itemHeader}>
			<div>Title</div>
			<div>Actions</div>
		</div>
	)
}

export default AdminTableHeader
