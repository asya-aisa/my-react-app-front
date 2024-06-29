import { useState } from 'react'
import MaterialIcon from '../../../ui/MaterialIcon'
import AdminHeader from '../../../ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '../../../ui/admin-table/AdminTable/AdminTable'
import Heading from '../../../ui/heading/Heading'
import { useMovies } from '../Movies/useMovies'
import styles from './AdminMobile.module.scss'
import Hamburger from './hamburger/Hamburger'

const AdminMobileMovies
 = () => {
	const [show, setShow] = useState(false)
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useMovies()

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Heading title='Movies' style={{ fontSize: '25px' }} />
				<button onClick={() => setShow(!show)}>
					<MaterialIcon name={show ? 'MdClose' : 'MdMenu'} />
				</button>
			</div>

			<Hamburger show={show} />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				createAsync={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Genres', 'Rating']}
				tableItems={data || []}
			/>
		</div>
	)
}

export default AdminMobileMovies

