import cn from 'clsx'
import styles from './form.module.scss'

const Field = ({
	register,
	name,
	options,
	error,
	placeholder,
	style,
	...rest
}) => {
	return (
		<div className={cn(styles.common, styles.field)} style={style}>
			<label>
				<span>{placeholder}</span>
				<input {...register(name, options)} {...rest} />
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}

export default Field
