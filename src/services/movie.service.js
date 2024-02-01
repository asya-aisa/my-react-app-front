import $axios, { axiosClassic } from '../api/api'

export const MovieService = {
	async getAll(searchTerm) {
		return axiosClassic.get('/movies', {
			params: searchTerm
				? {
						searchTerm,
				}
				: {},
		})
	},

	async getPopularMovies() {
		const { data: movies } = await axiosClassic.get('/movies/most-popular')

		return movies
	},

	async create() {
		return $axios.post('/movies')
	},

	async delete(_id) {
		return $axios.delete(`/movies/${_id}`)
	},

	async getById(_id) {
		return $axios.get(`/movies/${_id}`)
	},

	async update(_id, data) {
		return $axios.put(`/movies/${_id}`, data)
	},

	async getBySlug(slug) {
		return axiosClassic.get(`/movies/by-slug/${slug}`)
	},

	async updateCountOpened(slug) {
		return axiosClassic.put(`/movies/update-count-opened`, {
			slug,
		})
	},
}
