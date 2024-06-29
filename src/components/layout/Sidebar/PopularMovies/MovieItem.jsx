import { Link } from 'react-router-dom'

import { getMovieUrl } from '../../../../configs/url'
import { getGenresListEach } from '../../../../utils/movie/getGenresList'
import styles from './PopularMovies.module.scss'
import MaterialIcon from '../../../ui/MaterialIcon'

const MovieItem = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link to={getMovieUrl(movie.slug)}>
				<img
					width={100}
					height={105}
					src={`${import.meta.env.VITE_SERVER_URL}${movie.poster}`}
					alt={movie.title}
				/>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, idx) => (
						<span key={genre._id}>
							{getGenresListEach(idx, movie.genres.length, genre.name)}
						</span>
					))}
				</div>

				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
