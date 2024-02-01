import $axios from '../api/api'

export const UserService = {
	async getProfile() {
		return $axios.get('/users/profile')
	},
}
