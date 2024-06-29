import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import styles from './Slider.module.scss'

const SlideItem = ({ slide, buttonTitle = 'Watch', nodeRef }) => {
	const nav = useNavigate()
	const isTablet = useMediaQuery({
		query: '(min-width: 900px)',
	})

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	const img = isMobile ? `${import.meta.env.VITE_SERVER_URL}${slide.poster}` : `${import.meta.env.VITE_SERVER_URL}${slide.bigPoster}`

	return (
		<div ref={nodeRef} className={styles.slide}>
			{slide.bigPoster && (
				<img
					className={styles.image}
					src={img}
					alt={slide.title}
				/>
			)}

			{isTablet && (
				<>
					<div className={styles.content}>
						<div className={styles.heading}>{slide.title}</div>
					</div>
					<button className={styles.button} onClick={() => nav(slide.link)}>
						{buttonTitle}
					</button>
				</>
			)}
		</div>
	)
}

export default SlideItem
