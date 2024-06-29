
import Heading from '../../ui/heading/Heading'
import PopularMovies from './PopularMovies/PopularMovies'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Heading
				title='Trending Now'
				style={{
					fontSize: '20px',
					marginBottom: '20px',
					textTransform: 'capitalize',
					'marginLeft': '0'
				}}
			/>
			<PopularMovies />
		</div>
	)
}

export default Sidebar
