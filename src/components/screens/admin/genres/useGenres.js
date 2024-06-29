import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'
import { getAdminUrl } from '../../../../configs/url'
import { useDebounce } from '../../../../hooks/useDebounce'
import { GenreService } from '../../../../services/genre.service'
import { toastError } from '../../../../utils/toast-error'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const nav = useNavigate()

	const queryData = useQuery({
		queryKey: ['genre list', debouncedSearch],
		queryFn: () => GenreService.getAll(debouncedSearch),
		select: ({ data }) =>
			data.map(genre => ({
				_id: genre._id,
				editUrl: getAdminUrl(`genre/edit/${genre._id}`),
				items: [genre.name, genre.slug],
			})),
	})

	const handleSearch = e => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create genre'],
		mutationFn: () => GenreService.create(),
		onError(error) {
			toastError(error, 'Create genre')
		},
		onSuccess: data => {
			let id = data.data
			toastr.success('Create genre', 'create was successful')
			nav(getAdminUrl(`genre/edit/${id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete genre'],
		mutationFn: genreId => GenreService.delete(genreId),
		onError(error) {
			toastError(error, 'Delete genre')
		},
		onSuccess() {
			toastr.success('Delete genre', 'delete was successful')
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
