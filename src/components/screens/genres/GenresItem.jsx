import cn from 'clsx'
import { Link } from 'react-router-dom'
import { getGenreUrl } from '../../../configs/url'
import styles from './Genres.module.scss'
import GenresImage from './GenresImage'

const GenresItem = ({ genre }) => {
	return (
		<Link to={getGenreUrl(genre.slug)} className={styles.collection}>
			<GenresImage genres={genre} />
			<div className={styles.content}>{genre.title}</div>

			<div className={cn(styles.behind, styles.second)}>
				<GenresImage genres={genre} />
			</div>

			<div className={cn(styles.behind, styles.third)}>
				<GenresImage genres={genre} />
			</div>
		</Link>
	)
}

export default GenresItem
