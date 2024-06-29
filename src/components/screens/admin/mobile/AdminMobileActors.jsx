import { useState } from 'react'
import MobileLayout from '../../../layout/mobile/MobileLayout'
import MaterialIcon from '../../../ui/MaterialIcon'
import AdminHeader from '../../../ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '../../../ui/admin-table/AdminTable/AdminTable'
import Heading from '../../../ui/heading/Heading'
import { useActors } from '../actors/useActors'
import styles from './AdminMobile.module.scss'
import Hamburger from './hamburger/Hamburger'

const AdminMobileActors = () => {
	const [show, setShow] = useState(false)
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useActors()

	return (
		<MobileLayout>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<Heading title='Actors' style={{ fontSize: '25px' }} />
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
					headerItems={['Title', 'Actors', 'Rating']}
					tableItems={data || []}
				/>
			</div>
		</MobileLayout>
	)
}

export default AdminMobileActors
