import Home from '../Home'
import AllMovies from '../components/screens/AllMovies/AllMovies'
import AdminPanel from '../components/screens/admin/AdminPanel'
import MovieEdit from '../components/screens/admin/MovieEdit/MovieEdit'
import Auth from '../components/screens/auth/Auth'
import Popular from '../components/screens/popular/Popular'
import Profile from '../components/screens/profile/Profile'
import SingleMovie from '../components/screens/single-movie/SingleMovie'

export const routes = [
	{
		path: '/',
		component: Home,
		user: false,
		admin: false,
	},

	{
		path: '/all-movies',
		component: AllMovies,
		user: false,
		admin: false,
	},

	{
		path: '/movie/:slug',
		component: SingleMovie,
		user: false,
		admin: false,
	},

	{
		path: '/auth',
		component: Auth,
		user: false,
		admin: false,
	},

	{
		path: '/trending',
		component: Popular,
		user: false,
		admin: false,
	},

	{
		path: '/profile',
		component: Profile,
		user: true,
		admin: false,
	},

	{
		path: '/manage',
		component: AdminPanel,
		user: true,
		admin: true,
	},

	{
		path: '/manage/movie/edit/:id',
		component: MovieEdit,
		user: true,
		admin: true,
	},
]
