import { Controller, useForm } from 'react-hook-form'
import generateSlug from '../../../../utils/string/generateSlug'
import Layout from '../../../layout/Layout'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Button from '../../../ui/form-elements/Button'
import Field from '../../../ui/form-elements/Field'
import SlugField from '../../../ui/form-elements/SlugField/SlugField'
import UploadField from '../../../ui/form-elements/UploadField/UploadField'
import Heading from '../../../ui/heading/Heading'
import Select from '../../../ui/select/Select'
import formStyles from '../adminForm.module.scss'
import { useAdminActors } from './useAdminActors'
import { useAdminGenres } from './useAdminGenres'
import { useMovieEdit } from './useMovieEdit'

const MovieEdit = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm({
		mode: 'onChange',
	})

	const { onSubmit, isLoading } = useMovieEdit(setValue)

	const { data: actors, isLoading: isActorsLoading } = useAdminActors()
	const { data: genres, isLoading: isGenresLoading } = useAdminGenres()

	return (
		<Layout>
			<Heading title='Edit movie' style={{ fontSize: '25px' }} />
			{isLoading ? (
				<SkeletonLoader count={5} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<Field
							register={register}
							name='title'
							options={{
								required: 'Title is required',
							}}
							placeholder='Title'
							error={errors.title}
						/>
						<SlugField
							generate={() =>
								setValue('slug', generateSlug(getValues('title')))
							}
							register={register}
							error={errors.slug}
						/>
						<Field
							register={register}
							name='parameters.country'
							options={{
								required: 'Country is required!',
							}}
							placeholder='Country'
							error={errors.parameters?.country}
							style={{ width: '31%' }}
						/>
						<Field
							register={register}
							name='parameters.duration'
							options={{
								required: 'Duration is required!',
							}}
							placeholder='Duration (min.)'
							error={errors.parameters?.duration}
							style={{ width: '31%' }}
						/>
						<Field
							register={register}
							name='parameters.year'
							options={{
								required: 'Year is required!',
							}}
							placeholder='Year'
							error={errors.parameters?.year}
							style={{ width: '31%' }}
						/>

						<Controller
							name='genres'
							control={control}
							render={({ field, fieldState: { error } }) => (
								<Select
									field={field}
									options={genres || []}
									placeholder='Genres'
									error={error}
									isLoading={isGenresLoading}
									isMulti
								/>
							)}
							rules={{
								required: 'Please select at least one genre!',
							}}
						/>

						<Controller
							name='actors'
							control={control}
							render={({ field, fieldState: { error } }) => (
								<Select
									field={field}
									options={actors || []}
									placeholder='Actors'
									error={error}
									isLoading={isActorsLoading}
									isMulti
								/>
							)}
							rules={{
								required: 'Please select at least one actor!',
							}}
						/>

						<Controller
							name='poster'
							control={control}
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder='Poster'
									error={error}
									folder='movies'
									image={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Poster is required!',
							}}
						/>

						<Controller
							name='bigPoster'
							control={control}
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder='Big Poster'
									error={error}
									folder='movies'
									image={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Big Poster is required!',
							}}
						/>

						<Controller
							name='videoUrl'
							control={control}
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder='Video'
									error={error}
									folder='movies'
									image={value}
									onChange={onChange}
									isNoImage
								/>
							)}
							rules={{
								required: 'Video is required!',
							}}
						/>

						<Button>Update</Button>
					</div>
				</form>
			)}
		</Layout>
	)
}

export default MovieEdit
