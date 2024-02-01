import Heading from '../../../ui/Heading'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import AdminHeader from '../AdminHeader/AdminHeader'
import AdminTableHeader from '../AdminTable/AdminTableHeader'
import AdminTableItem from '../AdminTable/AdminTableItem'
import styles from './MovieList.module.scss'
import { useMovies } from './useMovies'

const MovieList = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useMovies()

	return (
		<div>
			<Heading title='Movies' style={{fontSize: '25px', opacity: '0.8'}} />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				createAsync={createAsync}
			/>
			<div>
			<AdminTableHeader />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} style={{ marginTop: '16px' }} />
			) : data.length ? (
				data.map(tableItem => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
						removeHandler={deleteAsync}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}

			</div>
		</div>
	)
}

export default MovieList
