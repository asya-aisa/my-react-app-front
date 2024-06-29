import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'
import { getAdminUrl } from '../../../../configs/url'
import { useDebounce } from '../../../../hooks/useDebounce'
import { MovieService } from '../../../../services/movie.service'
import { getGenresList } from '../../../../utils/movie/getGenresList'
import { toastError } from '../../../../utils/toast-error'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const nav = useNavigate()

	const queryData = useQuery({
		queryKey: ['movie list', debouncedSearch],
		queryFn: () => MovieService.getAll(debouncedSearch),
		select: ({ data }) =>
			data.map(movie => ({
				_id: movie._id,
				editUrl: getAdminUrl(`movie/edit/${movie._id}`),
				items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
			})),
	})

	const handleSearch = e => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create movie'],
		mutationFn: () => MovieService.create(),
		onError(error) {
			toastError(error, 'Create movie')
		},
		onSuccess: data => {
			let id = data.data
			toastr.success('Create movie', 'create was successful')
			nav(`/manage/movie/edit/${id}`)
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete movie'],
		mutationFn: movieId => MovieService.delete(movieId),
		onError(error) {
			toastError(error, 'Delete movie')
		},
		onSuccess() {
			toastr.success('Delete movie', 'delete was successful')
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
