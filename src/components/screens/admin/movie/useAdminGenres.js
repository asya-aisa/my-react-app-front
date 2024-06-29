import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { GenreService } from '../../../../services/genre.service'
import { toastError } from '../../../../utils/toast-error'

export const useAdminGenres = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['List of genre'],
		queryFn: () => GenreService.getAll(),
		select: ({ data }) =>
			data.map(genre => ({
				label: genre.name,
				value: genre._id,
			})),
	})

	useEffect(() => {
		if (error) toastError(error, 'Genre list')
	}, [error])

	return { data, isLoading }
}

