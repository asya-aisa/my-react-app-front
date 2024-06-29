import $axios, { axiosClassic } from '../api/api'
import { getMoviesUrl } from '../configs/api.config'

export const MovieService = {
	async getAll(searchTerm) {
		return axiosClassic.get(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getPopularMovies() {
		const { data: movies } = await axiosClassic.get(
			getMoviesUrl('/most-popular')
		)

		return movies
	},

	async getById(_id) {
		return $axios.get(getMoviesUrl(`/${_id}`))
	},

	async getBySlug(slug) {
		return axiosClassic.get(getMoviesUrl(`/by-slug/${slug}`))
	},

	async getByGenres(genreIds) {
		return axiosClassic.post(getMoviesUrl(`/by-genres`), {
			genreIds,
		})
	},

	async create() {
		return $axios.post(getMoviesUrl(''))
	},

	async update(_id, data) {
		return $axios.put(getMoviesUrl(`/${_id}`), data)
	},

	async delete(_id) {
		return $axios.delete(getMoviesUrl(`/${_id}`))
	},

	async updateCountOpened(slug) {
		return axiosClassic.put(getMoviesUrl('/update-count-opened'), {
			slug,
		})
	},
}
