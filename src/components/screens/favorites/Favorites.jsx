import { useMediaQuery } from 'react-responsive'
import MobileLayout from '../../layout/mobile/MobileLayout'

import Layout from '../../layout/Layout'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Heading from '../../ui/heading/Heading'
import FavoriteItem from './FavoriteItem'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites = () => {
	const { favoriteMovies, isLoading } = useFavorites()

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})
	return (
		<>
			{isMobile ? (
				<MobileLayout>
					<div className={styles.blockMobile}>
						<Heading title='Favorites' style={{ fontSize: '25px' }} />
						<section className={styles.favorites}>
							{isLoading ? (
								<SkeletonLoader
									count={3}
									className={styles.SkeletonLoader}
									containerClassName={styles.containerLoader}
								/>
							) : (
								favoriteMovies?.map(movie => (
									<FavoriteItem key={movie._id} movie={movie} />
								))
							)}
						</section>
					</div>
				</MobileLayout>
			) : (
				<Layout>
					<Heading title='Favorites' style={{ fontSize: '18px' }} />
					<section className={styles.favorites}>
						{isLoading ? (
							<SkeletonLoader
								count={3}
								className={styles.SkeletonLoader}
								containerClassName={styles.containerLoader}
							/>
						) : (
							favoriteMovies?.map(movie => (
								<FavoriteItem key={movie._id} movie={movie} />
							))
						)}
					</section>
				</Layout>
			)}
		</>
	)
}

export default Favorites
