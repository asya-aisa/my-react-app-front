import axios from 'axios'
import Cookies from 'js-cookie'
import { removeTokensStorage } from '../services/auth/auth.helpers'
import { AuthService } from '../services/auth/auth.service'
import { errorCatch, getContentType } from './api.helpers'

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`



export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

export const $axios = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

$axios.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

$axios.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await AuthService.getNewTokens()
				return $axios.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokensStorage()
				localStorage.removeItem('user')
			}
		}

		throw error
	}
)

export default $axios
