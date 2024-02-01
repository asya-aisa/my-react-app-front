import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { MovieService } from '../../../../services/movie.service'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import MovieItem from './MovieItem'
import styles from './PopularMovies.module.scss'

const PopularMovies = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['Popular movies in sidebar'],
		queryFn: () => MovieService.getPopularMovies(),
		select: data => data.slice(0, 3),
	})

	const nav = useNavigate()

	const movies = popularMovies || []

	return (
		<div className={styles.list}>
			{isLoading ? (
				<div style={{ marginTop: '0px' }}>
					<SkeletonLoader
						count={3}
						style={{ height: '105px', width: '100px', marginBottom: '16px' }}
					/>
				</div>
			) : (
				movies.map(movie => <MovieItem key={movie._id} movie={movie} />)
			)}

			<button className={styles.button} onClick={() => nav('/trending')}>
				See more
			</button>
		</div>
	)
}

export default PopularMovies
