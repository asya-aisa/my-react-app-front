import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate, useParams } from 'react-router-dom'
import { ActorService } from '../../../../services/actor.service'
import { getKeys } from '../../../../utils/object/getKeys'
import { toastError } from '../../../../utils/toast-error'

export const useActorEdit = setValue => {
	const nav = useNavigate()

	const { id } = useParams()

	// const id = String(id)

	const {
		data: queryData,
		isLoading,
		isSuccess,
		error,
	} = useQuery({
		queryKey: ['actor', id],
		queryFn: () => ActorService.getById(id),
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
		if (error) toastError(error, 'Get actor')
	}, [error])

	const { mutateAsync } = useMutation({
		mutationKey: ['update actor'],
		mutationFn: data => ActorService.update(id, data),
		onError(error) {
			toastError(error, 'Update actor')
		},
		onSuccess() {
			toastr.success('Update actor', 'update was successful')
			nav('/manage/actors')
		},
	})

	const onSubmit = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
