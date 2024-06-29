import $axios, { axiosClassic } from '../api/api'
import { getActorsUrl } from '../configs/api.config'


export const ActorService = {
	async getAll(searchTerm) {
		return axiosClassic.get(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				}
				: {},
		})
	},

	async getById(_id) {
		return $axios.get(getActorsUrl(`/${_id}`))
	},

	async getBySlug(slug) {
		return axiosClassic.get(getActorsUrl(`/by-slug/${slug}`))
	},

	async create() {
		return $axios.post(getActorsUrl(''))
	},

	async update(_id, data) {
		return $axios.put(getActorsUrl(`/${_id}`), data)
	},

	async delete(_id) {
		return $axios.delete(getActorsUrl(`/${_id}`))
	},
}
