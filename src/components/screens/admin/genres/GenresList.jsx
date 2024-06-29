import { useMediaQuery } from 'react-responsive'
import Layout from '../../../layout/Layout'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import AdminHeader from '../../../ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '../../../ui/admin-table/AdminTable/AdminTable'
import AdminMobileGenres from '../mobile/AdminMobileGenres'
import { useGenres } from './useGenres'

const GenreList = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useGenres()

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<>
			{isMobile ? (
				<AdminMobileGenres />
			) : (
				<Layout>
					<AdminNavigation />

					<AdminHeader
						handleSearch={handleSearch}
						searchTerm={searchTerm}
						createAsync={createAsync}
					/>
					<AdminTable
						isLoading={isLoading}
						removeHandler={deleteAsync}
						headerItems={['Name', 'Slug']}
						tableItems={data || []}
					/>
				</Layout>
			)}
		</>
	)
}

export default GenreList
