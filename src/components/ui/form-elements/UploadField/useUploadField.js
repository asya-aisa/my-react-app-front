import { useMutation } from '@tanstack/react-query'
import { useCallback, useMemo, useState } from 'react'
import { FileService } from '../../../../services/file.service'
import { toastError } from '../../../../utils/toast-error'

export const useUploadField = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: data => FileService.upload(data, folder),
		onSuccess: data  => {
			onChange(data.data[0].url)
		},
		onError(error) {
			toastError(error, 'Upload file')
		},
	})

	const uploadFile = useCallback(
		async e => {
			setIsLoading(true)

			const files = e.target.files
			if (!files?.length) return

			
				const formData = new FormData()
				formData.append('file', files[0])


				await mutateAsync(formData)

				setTimeout(() => {
					setIsLoading(false)
				}, 1000)
			
		},
		[mutateAsync]
	)

	return useMemo(() => ({ uploadFile, isLoading }), [uploadFile, isLoading])
}
