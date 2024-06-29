import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import MaterialIcon from '../MaterialIcon'
import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { useSlider } from './useSlider'

const Slider = ({ slides, buttonTitle }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	)

	const isMobile = useMediaQuery({
		query: '(max-width: 630px)',
	})

	const nodeRef = useRef(null)
	const nav = useNavigate()

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				nodeRef={nodeRef}
				classNames='slide-animation'
				timeout={300}
				unmountOnExit
			>
				<SlideItem
					nodeRef={nodeRef}
					slide={slides[index] || []}
					buttonTitle={buttonTitle}
				/>
			</CSSTransition>

			{isMobile && (
				<>
					<div className={styles.content}>
						<div className={styles.rateBlock}>
							<MaterialIcon name='MdStarRate' />
							<div>{slides[index].rate}.0</div>
						</div>

						<div className={styles.heading}>{slides[index].title}</div>

						<div className={styles.genresMobile}>
							{slides[index].genres.map(genre => (
								<span key={genre._id}>{genre.name}</span>
							))}
						</div>

						<button
							className={styles.button}
							onClick={() => nav(slides[index].link)}
						>
							{buttonTitle}
						</button>
					</div>
				</>
			)}

			{isPrev && (
				<SlideArrow variant='left' clickHandler={() => handleClick('prev')} />
			)}

			{isNext && (
				<SlideArrow variant='right' clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
