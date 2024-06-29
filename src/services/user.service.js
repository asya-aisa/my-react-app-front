import $axios from '../api/api'

export const UserService = {
	async getProfile() {
		return $axios.get('/users/profile')
	},

	async getFavorites() {
		return $axios.get('/users/profile/favorites')
	},

	async toggleFavorite(movieId) {
		return $axios.put('/users/profile/favorites', { movieId })
	},
}
