import { useUploadField } from './useUploadField'
import styles from './UploadField.module.scss'
import SkeletonLoader from '../../SkeletonLoader'

const UploadField = ({
	placeholder,
	error,
	image,
	folder,
	onChange,
	isNoImage = false,
}) => {
	const { uploadFile, isLoading } = useUploadField(onChange, folder)

	return <div>

		<label className={styles.label}>
			<span className={styles.placeholder}>{placeholder} </span>

			<input className={styles.inputUpload} type="file" onChange={uploadFile} />

			{error && <div className={styles.error}>{error.message}</div>}
			
		</label>

		{!isNoImage && (
			<div>
				{isLoading ? (
					<SkeletonLoader count={1} style={{width: '100%', height: '100%'}} />
				) : (
					image && <img className={styles.img} src={`${import.meta.env.VITE_SERVER_URL}${image}`} width={125} height={120} alt='' />
			
				)}
			</div>
		)}
</div>
}

export default UploadField
