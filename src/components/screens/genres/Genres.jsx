import { useQuery } from '@tanstack/react-query'
import { GenreService } from '../../../services/genre.service'
import Layout from '../../layout/Layout'
import Heading from '../../ui/heading/Heading'
import GenresItem from './GenresItem'
import styles from './Genres.module.scss'
import Description from '../../ui/heading/Description'

const Genres = () => {
	const { data } = useQuery({
		queryKey: ['Genre collections'],
		queryFn: () => GenreService.getCollections(),
		select: ({ data }) => data,
	})

	const genres = data || []

	return (
		<Layout>
			<Heading title='Genres' style={{fontSize: '25px'}} />
			<Description text='In this section you will find all genres on our site' className={styles.description} />
			<section className={styles.collections}>
				{genres.map(g => (
					<GenresItem key={g._id} genre={g} />
				))}
			</section>
		</Layout>
	)
}

export default Genres
