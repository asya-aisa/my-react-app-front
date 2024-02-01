import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { errorCatch } from '../../api/api.helpers'
import { AuthService } from '../../services/auth/auth.service'
import { toastError } from '../../utils/toast-error'

// register
export const register = createAsyncThunk(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

// login
export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

// logout
export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

// checkAuth
export const checkAuth = createAsyncThunk(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization is finished, plz sign in again'
				)
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
