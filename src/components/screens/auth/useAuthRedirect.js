import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const nav = useNavigate()

	useEffect(() => {
		if (user) nav(-1 || '/')
	}, [user, nav])
}
