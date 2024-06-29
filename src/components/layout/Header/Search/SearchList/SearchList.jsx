import { Link } from 'react-router-dom'

import { getMovieUrl } from '../../../../../configs/url'
import styles from './SearchList.module.scss'

const SearchList = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map(movie => (
					<Link to={getMovieUrl(movie.slug)} key={movie._id}>
						<img
							src={`${import.meta.env.VITE_SERVER_URL}${movie.poster}`}
							width={50}
							height={50}
							alt={movie.title}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className={styles.notFound}>Movie is not found</div>
			)}
		</div>
	)
}

export default SearchList
