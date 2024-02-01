import { useQuery } from '@tanstack/react-query'
import { UserService } from '../../../services/user.service'
import Layout from '../../layout/Layout'
import SkeletonLoader from '../../ui/SkeletonLoader'

const Profile = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
	})

	return (
		<Layout>
			<h3>Your email:</h3>
			{isLoading ? (
				<SkeletonLoader count={1} width={250} />
			) : (
				<h1>{data.email}</h1>
			)}
		</Layout>
	)
}

export default Profile
