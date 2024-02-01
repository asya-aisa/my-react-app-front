import { useNavigate } from 'react-router-dom'
import styles from './Slider.module.scss'

const SlideItem = ({ slide, buttonTitle = 'Watch' }) => {
	const nav = useNavigate()

	return (
		<div className={styles.slide}>

			{slide.bigPoster && (
				<img className={styles.image} src={`${import.meta.env.VITE_SERVER_URL}${slide.bigPoster}`} alt={slide.title} />
			)}

			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
			</div>


			<button className={styles.button} onClick={() => nav(slide.link)}>
				{buttonTitle}
			</button>

		</div>
	)
}

export default SlideItem
