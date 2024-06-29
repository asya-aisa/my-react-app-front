import { useMediaQuery } from 'react-responsive'
import Heading from '../../../ui/heading/Heading'
import SearchField from '../../../ui/search-field/SearchField'
import MobileLayout from '../../mobile/MobileLayout'
import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearch'

const Search = () => {
	const { isSuccess, handleSearch, data, searchTerm } = useSearch()

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<>
			{isMobile ? (
				<MobileLayout>
					<div className={styles.mobileBlock}>
						<Heading title='Search' />
						<div className={styles.wrapper}>
							<SearchField
								searchTerm={searchTerm}
								handleSearch={handleSearch}
							/>
							{isSuccess && <SearchList movies={data || []} />}
						</div>
					</div>
				</MobileLayout>
			) : (
				<div className={styles.wrapper}>
					<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
					{isSuccess && <SearchList movies={data || []} />}
				</div>
			)}
		</>
	)
}

export default Search
