import StarRatingComponent from 'react-star-rating-component'
import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'

const RateMovie = ({ id }) => {
	const { handleClick, isSended, rating } = useRateMovie(id)

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>

			{
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating</div>
					) : (
						<StarRatingComponent
							name='star-rating'
							value={rating}
							onStarClick={handleClick}
							emptyStarColor='#4f4f4f'
						/>
					)}
				</>
			}
		</div>
	)
}

export default RateMovie
