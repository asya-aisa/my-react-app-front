import { Link } from 'react-router-dom'
import { getMovieUrl } from '../../../configs/url'
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'
import styles from './Favorites.module.scss'
import { useMediaQuery } from 'react-responsive'

const FavoriteItem = ({ movie }) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link to={getMovieUrl(movie.slug)} className={styles.item}>
				<img
					alt={movie.title}
					src={`${import.meta.env.VITE_SERVER_URL}${isMobile ? movie.poster : movie.bigPoster}`}
				/>

				<div className={styles.title}>{movie.title}</div>
			</Link>
		</div>
	)
}

export default FavoriteItem
