import { useMediaQuery } from 'react-responsive'
import { getMovieUrl } from '../../../configs/url'
import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'
import styles from './Catalog.module.scss'

const Catalog = ({ movies, title, description }) => {

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	return (
		<>
			<Heading title={title} className={styles.heading} />

			{description && (
				<Description text={description} className={styles.description} />
			)}
			<section className={styles.movies}>
				{movies.map(movie => (
					<GalleryItem
						key={movie._id}
						item={{
							name: movie.title,
							link: getMovieUrl(movie.slug),
							posterPath: isMobile ? movie.poster : movie.bigPoster,
						}}
						variant='horizontal'
					/>
				))}
			</section>
		</>
	)
}

export default Catalog
