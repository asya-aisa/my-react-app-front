import cn from 'clsx'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTheme } from '../../hooks/useTheme'

const SkeletonLoader = ({ style, ...rest }) => {
	const { theme } = useTheme()
	return (
		<SkeletonTheme
			baseColor={theme === 'light' ? 'rgba(122,73,94,0.5)' : '#514a4d'}
			highlightColor='rgba(226,38,104,0.4)'
		>
			<Skeleton {...rest} className='skeleton' style={style} />
		</SkeletonTheme>
	)
}

export default SkeletonLoader
