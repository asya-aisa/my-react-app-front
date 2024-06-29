import cn from 'clsx'

const Heading = ({ title, style, className }) => {
	return (
		<h1 className={cn('heading', className)} style={style}>
			{title}
		</h1>
	)
}

export default Heading
