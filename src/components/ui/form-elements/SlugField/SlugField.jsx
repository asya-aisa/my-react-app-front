import Field from '../Field'
import styles from './SlugField.module.scss'

const SlugField = ({ generate, register, error }) => {
	return (
		<div className={styles.relative}>
			<Field
				register={register}
				name='slug'
				options={{
					required: 'Slug is required!',
				}}
				placeholder='Slug'
				error={error}
			/>
			<div className={styles.badge} onClick={generate}>
				generate
			</div>
		</div>
	)
}

export default SlugField
