import $axios from '../api/api'
import { getRatingsUrl } from '../configs/api.config'

export const RatingService = {
	async setRating(movieId, value) {
		return $axios.post(getRatingsUrl('/set-rating'), {
			movieId,
			value,
		})
	},

	async getByUserMovie(movieId) {
		return $axios.get(getRatingsUrl(`/${movieId}`))
	},
}
