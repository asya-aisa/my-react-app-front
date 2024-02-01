import { useQuery } from '@tanstack/react-query'
import Layout from './components/layout/Layout'
import SkeletonLoader from './components/ui/SkeletonLoader'
import Slider from './components/ui/slider/Slider'
import { MovieService } from './services/movie.service'

const Home = () => {
	const { isLoading, data: HomeMovies } = useQuery({
		queryKey: ['Home movies'],
		queryFn: () => MovieService.getAll(),
		select: ({ data }) =>
			data.slice(0, 3).map(m => ({
				_id: m._id,
				link: `/movie/${m.slug}`,
				bigPoster: m.bigPoster,
				title: m.title,
			})),
	})

	const movies = HomeMovies || []

	return (
		<>
			<Layout>
				{isLoading ? <SkeletonLoader count={1} height={320} /> : <Slider slides={movies} />}
			</Layout>
		</>
	)
}

export default Home
