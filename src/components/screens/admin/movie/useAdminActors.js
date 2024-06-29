import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { ActorService } from '../../../../services/actor.service'
import { toastError } from '../../../../utils/toast-error'

export const useAdminActors = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['List of actor'],
		queryFn: () => ActorService.getAll(),
		select: ({ data }) =>
			data.map(actor => ({
				label: actor.name,
				value: actor._id,
			})),
	})

	useEffect(() => {
		if (error) toastError(error, 'Actor list')
	}, [error])

	return { data, isLoading }
}

