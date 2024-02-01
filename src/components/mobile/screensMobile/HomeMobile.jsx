import { useQuery } from '@tanstack/react-query'
import LayoutMobile from '../layoutMobile/LayoutMobile'


import SkeletonLoader from '../../ui/SkeletonLoader'
import Slider from '../../ui/slider/Slider'
import { MovieService } from '../../../services/movie.service'

const HomeMobile = () => {
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
			<LayoutMobile>
				{isLoading ? (
					<SkeletonLoader count={1} height={320} />
				) : (
					<Slider slides={movies} />
				)}
			</LayoutMobile>
		</>
	)
}

export default HomeMobile
