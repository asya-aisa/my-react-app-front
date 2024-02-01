import Button from '../../../ui/form-elements/Button'
import SearchField from '../../../ui/search-field/SearchField'
import styles from './AdminHeader.module.scss'

const AdminHeader = ({ handleSearch, searchTerm, createAsync }) => {
	return (
		<div className={styles.header}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			<Button onClick={createAsync}>Create new</Button>
		</div>
	)
}

export default AdminHeader
