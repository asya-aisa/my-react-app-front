import { useQuery } from '@tanstack/react-query'
import { MovieService } from '../../../services/movie.service'
import Layout from '../../layout/Layout'
import Gallery from '../../ui/gallery/Gallery'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Heading from '../../ui/heading/Heading'


const AllMovies = () => {
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
		<Layout>
		<Heading title='All Movies' style={{fontSize: '25px'}} />
			{isLoading ? <SkeletonLoader count={1} height={176} /> : <Gallery items={movies} />}
		</Layout>
	</>
	)
}

export default AllMovies