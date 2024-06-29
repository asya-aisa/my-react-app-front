import { useAuth } from '../../../../hooks/useAuth'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import RateMovie from '../RateMovie/RateMovie'
import styles from './Content.module.scss'

const Content = ({ movie }) => {
	const {user} = useAuth()
	return (
		<div className={styles.main}>
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>{movie.parameters.year} · </span>
				<span>{movie.parameters.country} · </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
		</div>

		{user && <RateMovie id={movie._id} />}

		{user && <FavoriteButton movieId={movie._id}/>}
		</div>
	)
}

export default Content
