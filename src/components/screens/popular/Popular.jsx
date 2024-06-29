import { useQuery } from '@tanstack/react-query'
import { useMediaQuery } from 'react-responsive'
import { MovieService } from '../../../services/movie.service'
import Layout from '../../layout/Layout'
import MobileLayout from '../../layout/mobile/MobileLayout'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Catalog from '../../ui/catalog-movies/Catalog'

const Popular = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['Popular movies in sidebar'],
		queryFn: () => MovieService.getPopularMovies(),
		select: data => data,
	})

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<>
			{isMobile ? (
				<MobileLayout>
					{isLoading ? (
						<SkeletonLoader count={1} height={30} width={300} />
					) : (
						<div>
							<Catalog
								movies={popularMovies || []}
								title='Trending Now'
								description='Trending movies in excellent quality'
							/>
						</div>
					)}
				</MobileLayout>
			) : (
				<Layout>
					{isLoading ? (
						<SkeletonLoader count={1} height={30} />
					) : (
						<Catalog
							movies={popularMovies || []}
							title='Trending Now'
							description='Trending movies in excellent quality'
						/>
					)}
				</Layout>
			)}
		</>
	)
}

export default Popular
