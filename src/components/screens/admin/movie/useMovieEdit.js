import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate, useParams } from 'react-router-dom'
import { MovieService } from '../../../../services/movie.service'
import { getKeys } from '../../../../utils/object/getKeys'
import { toastError } from '../../../../utils/toast-error'

export const useMovieEdit = setValue => {
	const nav = useNavigate()

	const { id } = useParams()

	const {
		data: queryData,
		isLoading,
		isSuccess,
		error
	} = useQuery({
		queryKey: ['movie', id],
		queryFn: () => MovieService.getById(id),
		select: ({ data }) => data,
		enabled: !!id,
	})

	useEffect(() => {
		if (!isSuccess) return

		if (isSuccess)
			getKeys(queryData).forEach(key => {
				setValue(key, queryData[key])
			})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [queryData, isSuccess])

	useEffect(() => {
		if (error) toastError(error, 'Get movie')
	}, [error])

	const { mutateAsync } = useMutation({
		mutationKey: ['update movie'],
		mutationFn: data => MovieService.update(id, data),
		onError(error) {
			toastError(error, 'Update movie')
		},
		onSuccess() {
			toastr.success('Update movie', 'update was successful')
			nav('/manage/movies')
		},
	})

	const onSubmit = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
