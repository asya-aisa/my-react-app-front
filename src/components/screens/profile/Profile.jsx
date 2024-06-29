import { useQuery } from '@tanstack/react-query'
import { useMediaQuery } from 'react-responsive'
import { UserService } from '../../../services/user.service'
import Layout from '../../layout/Layout'
import MobileLayout from '../../layout/mobile/MobileLayout'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Heading from '../../ui/heading/Heading'
import styles from './Profile.module.scss'

const Profile = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
	})

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<>
			{isMobile ? (
				<MobileLayout>
					<div className={styles.blockMobile} >
					<Heading title='Profile'/>
					<h3>Your email:</h3>
					{isLoading ? (
						<SkeletonLoader count={1} width={250} />
					) : (
						<span>{data.email}</span>
					)}
					</div>
				</MobileLayout>
			) : (
				<Layout>
					<h3>Your email:</h3>
					{isLoading ? (
						<SkeletonLoader count={1} width={250} />
					) : (
						<h1>{data.email}</h1>
					)}
				</Layout>
			)}
		</>
	)
}

export default Profile
