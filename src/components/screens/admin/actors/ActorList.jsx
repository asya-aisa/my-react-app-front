import { useMediaQuery } from 'react-responsive'
import Layout from '../../../layout/Layout'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import AdminHeader from '../../../ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '../../../ui/admin-table/AdminTable/AdminTable'
import AdminMobileActors from '../mobile/AdminMobileActors'
import { useActors } from './useActors'

const ActorList = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useActors()

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<>
			{isMobile ? (
				<AdminMobileActors />
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
						headerItems={['Name', 'Count Movies']}
						tableItems={data || []}
					/>
				</Layout>
			)}
		</>
	)
}

export default ActorList
