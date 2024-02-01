import { useQuery } from '@tanstack/react-query'
import { MovieService } from '../../../services/movie.service'
import Layout from '../../layout/Layout'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Gallery from '../../ui/gallery/Gallery'

const Popular = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['Popular movies in sidebar'],
		queryFn: () => MovieService.getPopularMovies(),
		select: data =>
			data.map(m => ({
				name: m.title,
				posterPath: m.poster,
				link: `/movie/${m.slug}`,
			})),
	})

	return (
		<Layout>
			{isLoading ? (
				<SkeletonLoader count={1} height={176} />
			) : (
				<Gallery items={popularMovies || []} />
			)}
		</Layout>
	)
}

export default Popular
