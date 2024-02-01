import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieService } from '../../../services/movie.service'
import { useUpdateCountOpened } from '../../screens/single-movie/useUpdateCountOpened'
import LayoutMobile from '../layoutMobile/LayoutMobile'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Content from '../../screens/single-movie/Content/Content'
import VideoPlayer from '../../ui/video-player/VideoPlayer'
import NotFound from '../../screens/NotFound'




const SingleMovieMobile = () => {
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
				<LayoutMobile>
					{isLoading ? (
						<SkeletonLoader count={1} />
					) : (
						<>
							<Content movie={Movie} />
							<VideoPlayer videoSource={`${import.meta.env.VITE_SERVER_URL}${Movie.videoUrl}`} />
						</>
					)}
				</LayoutMobile>
			) : (
				<NotFound />
			)}
		</>
	)
}

export default SingleMovieMobile
