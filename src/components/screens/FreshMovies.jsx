import { useQuery } from '@tanstack/react-query'
import { MovieService } from '../../services/movie.service'
import Layout from '../layout/Layout'
import SkeletonLoader from '../ui/SkeletonLoader'
import Catalog from '../ui/catalog-movies/Catalog'

const FreshMovies = () => {
	const { isLoading, data: AllMovies } = useQuery({
		queryKey: ['Home movies'],
		queryFn: () => MovieService.getAll(),
		select: ({ data }) => data,
	})

	const movies = AllMovies || []
	return (
		<>
			{isLoading ? (
				<Layout>
					<SkeletonLoader count={1} height={30} />
				</Layout>
			) : (
				<Layout>
					<Catalog
						movies={movies}
						title='Fresh movies'
						description='New movies and series in excellent quality: legal, safe, without ads'
					/>
				</Layout>
			)}
		</>
	)
}

export default FreshMovies
