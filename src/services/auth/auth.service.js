import Cookies from 'js-cookie'

import { getContentType } from '../../api/api.helpers'
import { removeTokensStorage, saveToStorage } from './auth.helpers'
import { axiosClassic } from '../../api/api'

export const AuthService = {
	async register(email, password) {
		const response = await axiosClassic.post('/auth/register', {
			email,
			password,
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	// login

	async login(email, password) {
		const response = await axiosClassic.post('/auth/login', {
			email,
			password,
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosClassic.post(
			'/auth/login/access-token',
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},
}
