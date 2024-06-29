import { useMediaQuery } from 'react-responsive'
import Layout from '../../layout/Layout'
import MobileLayout from '../../layout/mobile/MobileLayout'
import AdminNavigation from '../../ui/admin-navigation/AdminNavigation'
import MovieList from './Movies/MovieList'
import AdminMobileMovies from './mobile/AdminMobileMovies'

const AdminPanel = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<>
			{isMobile ? (
				<MobileLayout>
					<AdminMobileMovies />
				</MobileLayout>
			) : (
				<Layout>
					<AdminNavigation />
					<MovieList />
				</Layout>
			)}
		</>
	)
}

export default AdminPanel
