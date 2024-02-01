import MaterialIcon from '../MaterialIcon'
import styles from './SearchField.module.scss'

const SearchField = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name='MdSearch' />
			<input placeholder='Search' value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField
