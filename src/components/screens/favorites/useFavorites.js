import { useQuery } from '@tanstack/react-query'
import { UserService } from '../../../services/user.service'

export const useFavorites = () => {
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery({
		queryKey: ['favorite movies'],
		queryFn: () => UserService.getFavorites(),
		select: ({ data }) => data,
	})

	return {
		isLoading,
		favoriteMovies,
		refetch,
	}
}
