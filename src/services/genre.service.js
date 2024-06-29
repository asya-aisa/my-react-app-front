import $axios, { axiosClassic } from '../api/api'
import { getGenresUrl } from '../configs/api.config'

export const GenreService = {
	async getAll(searchTerm) {
		return axiosClassic.get(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				}
				: {},
		})
	},
	
	async getBySlug(slug) {
		return axiosClassic.get(getGenresUrl(`/by-slug/${slug}`))
	},

	async getCollections() {
		return axiosClassic.get(getGenresUrl(`/collections`))
	},

	async getById(_id) {
		return $axios.get(getGenresUrl(`/${_id}`))
	},

	async create() {
		return $axios.post(getGenresUrl('/'))
	},

	async update(_id, data) {
		return $axios.put(getGenresUrl(`/${_id}`), data)
	},

	async delete(_id) {
		return $axios.delete(getGenresUrl(`/${_id}`))
	},
}
