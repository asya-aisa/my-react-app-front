import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GenreService } from '../../../services/genre.service'
import { MovieService } from '../../../services/movie.service'
import Layout from '../../layout/Layout'
import Catalog from '../../ui/catalog-movies/Catalog'

const Genre = () => {
	const { slug } = useParams()

	const { data: genre, refetch } = useQuery({
		queryKey: ['Genre page', slug],
		queryFn: () => GenreService.getBySlug(slug),
		select: ({ data }) => data,
	})

	useEffect(() => {
		refetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug])

	const { data: movies } = useQuery({
		queryKey: ['Genre movies'],
		queryFn: () => MovieService.getByGenres([genre._id]),
		select: ({ data }) => data,
		enabled: !!genre,
	})

	const genreSingle = genre || []
	console.log(genre)
	return (
		<Layout>
			<Catalog
				description={genreSingle.description}
				movies={movies || []}
				title={genreSingle.name}
			/>
		</Layout>
	)
}

export default Genre
