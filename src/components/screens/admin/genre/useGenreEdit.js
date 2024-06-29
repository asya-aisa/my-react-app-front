import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate, useParams } from 'react-router-dom'
import { GenreService } from '../../../../services/genre.service'
import { getKeys } from '../../../../utils/object/getKeys'
import { toastError } from '../../../../utils/toast-error'

export const useGenreEdit = setValue => {
	const nav = useNavigate()

	const { id } = useParams()

	// const id = String(id)

	const {
		data: queryData,
		isLoading,
		isSuccess,
		error,
	} = useQuery({
		queryKey: ['genre', id],
		queryFn: () => GenreService.getById(id),
		select: ({ data }) => data,
		enabled: !!id,
	})

	useEffect(() => {
		if (!isSuccess) return

		// if (isSuccess)
			getKeys(queryData).forEach(key => {
				setValue(key, queryData[key])
			})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [queryData, isSuccess])

	useEffect(() => {
		if (error) toastError(error, 'Get genre')
	}, [error])

	const { mutateAsync } = useMutation({
		mutationKey: ['update genre'],
		mutationFn: data => GenreService.update(id, data),
		onError(error) {
			toastError(error, 'Update genre')
		},
		onSuccess() {
			toastr.success('Update genre', 'update was successful')
			nav('/manage/genres')
		},
	})

	const onSubmit = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
