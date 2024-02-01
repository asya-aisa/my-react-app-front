import { useMutation } from '@tanstack/react-query'
import { MovieService } from '../../../services/movie.service'
import { useEffect } from 'react'

export const useUpdateCountOpened = (slug) => {
	const {mutateAsync} = useMutation({
		mutationKey: ['update movie'],
		mutationFn: () => MovieService.updateCountOpened(slug)
	})

useEffect(() => {
	mutateAsync()

	// eslint-disable-next-line react-hooks/exhaustive-deps
}, [slug])
}