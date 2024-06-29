import styles from './Genres.module.scss'

const GenresImage = ({ genres: { image, title } }) => {
	return <img className={styles.img} alt={title} src={`${import.meta.env.VITE_SERVER_URL}${image}`} />
}
export default GenresImage
