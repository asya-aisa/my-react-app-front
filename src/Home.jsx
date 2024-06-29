import { useQuery } from '@tanstack/react-query'
import { useMediaQuery } from 'react-responsive'
import Layout from './components/layout/Layout'
import MobileLayout from './components/layout/mobile/MobileLayout'
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
				poster: m.poster,
				title: m.title,
				rate: m.rating,
				genres: m.genres,
			})),
	})

	const homeMovies = HomeMovies || []

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<>
			{isMobile ? (
				<MobileLayout>
					{isLoading ? (
						<SkeletonLoader count={1} height={420} width={320} />
					) : (
						<Slider slides={homeMovies} buttonTitle='Watch' />
					)}
				</MobileLayout>
			) : (
				<Layout>
					{isLoading ? (
						<SkeletonLoader count={1} height={320} />
					) : (
							<Slider slides={homeMovies} />
					)}
				</Layout>
			)}
		</>
	)
}

export default Home
