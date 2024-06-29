import { useAuth } from '../../../hooks/useAuth'
import LogoutButton from './LogoutButton'
import MenuItem from './MenuItem'

const AuthItems = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>

					<MenuItem
						item={{
							icon: 'MdFavorite',
							link: '/favorites',
							title: 'Favorites',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: '/manage/movies',
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
