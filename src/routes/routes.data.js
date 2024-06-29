import Home from '../Home'
import Search from '../components/layout/Header/Search/Search'
import AllMovies from '../components/screens/AllMovies/AllMovies'
import FreshMovies from '../components/screens/FreshMovies'
import AdminPanel from '../components/screens/admin/AdminPanel'
import ActorEdit from '../components/screens/admin/actor/ActorEdit'
import ActorList from '../components/screens/admin/actors/ActorList'
import GenreEdit from '../components/screens/admin/genre/GenreEdit'
import GenreList from '../components/screens/admin/genres/GenresList'
import MovieEdit from '../components/screens/admin/movie/MovieEdit'
import Auth from '../components/screens/auth/Auth'
import Favorites from '../components/screens/favorites/Favorites'
import Genre from '../components/screens/genre/Genre'
import Genres from '../components/screens/genres/Genres'
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
		path: '/fresh',
		component: FreshMovies,
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
		path: '/favorites',
		component: Favorites,
		user: true,
		admin: false,
	},

	{
		path: '/manage/movies',
		component: AdminPanel,
		user: true,
		admin: true,
	},

	{
		path: '/manage/actors',
		component: ActorList,
		user: true,
		admin: true,
	},

	{
		path: '/manage/genres',
		component: GenreList,
		user: true,
		admin: true,
	},

	{
		path: '/manage/movie/edit/:id',
		component: MovieEdit,
		user: true,
		admin: true,
	},

	{
		path: '/manage/genre/edit/:id',
		component: GenreEdit,
		user: true,
		admin: true,
	},

	{
		path: '/manage/actor/edit/:id',
		component: ActorEdit,
		user: true,
		admin: true,
	},
	{
		path: '/genres',
		component: Genres,
		user: false,
		admin: false,
	},
	{
		path: `/genre/:slug`,
		component: Genre,
		user: false,
		admin: false,
	},
	{
		path: `/search`,
		component: Search,
		user: false,
		admin: false,
	},
]
