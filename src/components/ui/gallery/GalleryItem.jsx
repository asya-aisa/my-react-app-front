import cn from 'clsx'
import { Link } from 'react-router-dom'
import styles from './Gallery.module.scss'

const GalleryItem = ({ item, variant }) => {
	return (
		<Link
			to={item.link}
			className={cn(styles.item, styles.text, {
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>

			<img
				alt={item.title}
				src={`${import.meta.env.VITE_SERVER_URL}${item.posterPath}`}
				className={styles.img}
			/>

			<div className={styles.content}>
				<div className={styles.title}>{item.name}</div>
			</div>
		</Link>
	)
}

export default GalleryItem
