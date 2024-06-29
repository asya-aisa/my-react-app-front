import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'
import { getAdminUrl } from '../../../../configs/url'
import { useDebounce } from '../../../../hooks/useDebounce'
import { ActorService } from '../../../../services/actor.service'
import { toastError } from '../../../../utils/toast-error'


export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const nav = useNavigate()

	const queryData = useQuery({
		queryKey: ['actor list', debouncedSearch],
		queryFn: () => ActorService.getAll(debouncedSearch),
		select: ({ data }) =>
			data.map(actor => ({
				_id: actor._id,
				editUrl: getAdminUrl(`actor/edit/${actor._id}`),
				items: [actor.name, String(actor.countMovies)],
			})),
	})

	const handleSearch = e => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create actor'],
		mutationFn: () => ActorService.create(),
		onError(error) {
			toastError(error, 'Create actor')
		},
		onSuccess: data => {
			let id = data.data
			toastr.success('Create actor', 'create was successful')
			nav(`/manage/actor/edit/${id}`)
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete actor'],
		mutationFn: actorId => ActorService.delete(actorId),
		onError(error) {
			toastError(error, 'Delete actor')
		},
		onSuccess() {
			toastr.success('Delete actor', 'delete was successful')
			queryData.refetch()
		},
	})

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
