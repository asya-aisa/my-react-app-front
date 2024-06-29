import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'
import { RatingService } from '../../../../services/rating.service'
import { toastError } from '../../../../utils/toast-error'

export const useRateMovie = movieId => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)

	const { data, isSuccess, error,  refetch } = useQuery({
		queryKey: ['your movie rating', movieId],
		queryFn: () => RatingService.getByUserMovie(movieId),
		select: ({ data }) => data,
		enabled: !!movieId,
	})

	useEffect(() => {
		if (isSuccess) {
			return setRating(data)
		}

		if (error) toastError(error, 'Get rating')
	}, [isSuccess, data, error])



	const { mutateAsync } = useMutation({
		mutationKey: ['set rating movie'],
		mutationFn: value => RatingService.setRating(movieId, value),
		onError: error => {
			toastError(error, 'Rate movie')
		},
		onSuccess() {
			toastr.success('Rate movie', 'You have successfully rated')

			setIsSended(true)
			refetch()

			setTimeout(() => {
				setIsSended(false)
			}, 2400)
		},
	})

	const handleClick = useCallback(async (nextValue) => {
		setRating(nextValue)
		await mutateAsync(nextValue)
	}, [mutateAsync])


	return useMemo(() => (
		{
			isSended,
			rating,
			handleClick,
		}),
	[handleClick, isSended, rating])
}
