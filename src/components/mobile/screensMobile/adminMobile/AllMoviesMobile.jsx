import { useQuery } from '@tanstack/react-query'
import LayoutMobile from '../../layoutMobile/LayoutMobile'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Gallery from '../../../ui/gallery/Gallery'
import { MovieService } from '../../../../services/movie.service'


const AllMoviesMobile = () => {
	const { isLoading, data: AllMovies } = useQuery({
		queryKey: ['Home movies'],
		queryFn: () => MovieService.getAll(),
		select: ({ data }) =>
			data.map(m => ({
				name: m.title,
				posterPath: m.poster,
				link: `/movie/${m.slug}`,
			})),
	})

	const movies = AllMovies || []

	return (
		<>
		<LayoutMobile>
			{isLoading ? <SkeletonLoader count={1} height={176} /> : <Gallery items={movies} />}
		</LayoutMobile>
	</>
	)
}

export default AllMoviesMobile