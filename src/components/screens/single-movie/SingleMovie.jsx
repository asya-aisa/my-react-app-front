import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieService } from '../../../services/movie.service'
import Layout from '../../layout/Layout'
import SkeletonLoader from '../../ui/SkeletonLoader'
import VideoPlayer from '../../ui/video-player/VideoPlayer'
import NotFound from '../NotFound'
import Content from './Content/Content'
import { useUpdateCountOpened } from './useUpdateCountOpened'



const SingleMovie = () => {
	const { slug } = useParams()
	const {
		isLoading,
		data: Movie,
		refetch,
	} = useQuery({
		queryKey: ['single movie', slug],
		queryFn: () => MovieService.getBySlug(slug),
		select: ({ data }) => data,
	})

	useEffect(() => {
		refetch()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug])

	useUpdateCountOpened(slug)

	return (
		<>
			{Movie ? (
				<Layout>
					{isLoading ? (
						<SkeletonLoader count={1} />
					) : (
						<>
							<Content movie={Movie} />
							<VideoPlayer videoSource={`${import.meta.env.VITE_SERVER_URL}${Movie.videoUrl}`} />
						</>
					)}
				</Layout>
			) : (
				<NotFound />
			)}
		</>
	)
}

export default SingleMovie
