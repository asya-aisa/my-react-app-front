import { useMediaQuery } from 'react-responsive'
import Button from '../../form-elements/Button'
import SearchField from '../../search-field/SearchField'
import styles from './AdminHeader.module.scss'

const AdminHeader = ({ handleSearch, searchTerm, createAsync }) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<div className={styles.header}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			<Button onClick={createAsync}>{isMobile ? '+' : 'Create new'}</Button>
		</div>
	)
}

export default AdminHeader
