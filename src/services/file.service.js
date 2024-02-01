import $axios from '../api/api'

export const FileService = {
	async upload(file, folder) {
		return $axios.post('/files', file, {
			params: {
				folder,
			},
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}
