import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import { UserService } from '../../../../services/user.service'
import { toastError } from '../../../../utils/toast-error'
import { useFavorites } from '../../favorites/useFavorites'
import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'

const FavoriteButton = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favoriteMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) return

		const isHasMovie = favoriteMovies.some(f => f._id === movieId)
		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favoriteMovies, isSmashed, movieId])

	const { mutateAsync } = useMutation({
		mutationKey: ['update favorites'],
		mutationFn: () => UserService.toggleFavorite(movieId),
		onError(error) {
			toastError(error, 'Update favorite list')
		},
		onSuccess() {
			setIsSmashed(!isSmashed)
			refetch()
		},
	})

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmashed,
			})}
			style={{ backgroundImage: `url(${HeartImage})` }}
		></button>
	)
}

export default FavoriteButton
