import AuthMobile from '../components/mobile/screensMobile/AuthMobile'
import HomeMobile from '../components/mobile/screensMobile/HomeMobile'
import SingleMovieMobile from '../components/mobile/screensMobile/SingleMovieMobile'
import AllMoviesMobile from '../components/mobile/screensMobile/adminMobile/AllMoviesMobile'
import AdminPanel from '../components/screens/admin/AdminPanel'
import MovieEdit from '../components/screens/admin/movie/MovieEdit'
import Auth from '../components/screens/auth/Auth'
import Popular from '../components/screens/popular/Popular'
import Profile from '../components/screens/profile/Profile'
import SingleMovie from '../components/screens/single-movie/SingleMovie'

export const routesMobile = [
	{
		path: '/',
		component: HomeMobile,
		user: false,
		admin: false,
	},

	{
		path: '/all-movies',
		component: AllMoviesMobile,
		user: false,
		admin: false,
	},

	{
		path: '/movie/:slug',
		component: SingleMovieMobile,
		user: false,
		admin: false,
	},

	{
		path: '/auth',
		component: AuthMobile,
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
