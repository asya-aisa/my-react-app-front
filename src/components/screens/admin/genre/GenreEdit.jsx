import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import generateSlug from '../../../../utils/string/generateSlug'
import Layout from '../../../layout/Layout'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Button from '../../../ui/form-elements/Button'
import Field from '../../../ui/form-elements/Field'
import SlugField from '../../../ui/form-elements/SlugField/SlugField'
import TextEditor from '../../../ui/form-elements/TextEditor'
import Heading from '../../../ui/heading/Heading'
import formStyles from '../adminForm.module.scss'
import { useGenreEdit } from './useGenreEdit'

const GenreEdit = () => {
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

	const { onSubmit, isLoading } = useGenreEdit(setValue)

	// const icons = ['MdChildCare', 'MdFavoriteBorder', 'MdFamilyRestroom', 'MdInsertEmoticon']

	// const dataIcons = icons.map(el => ({
	// 	label: el,
	// 	value: el,
	// }))

	return (
		<Layout>
			<Heading title='Edit genre' style={{ fontSize: '25px' }} />
			{isLoading ? (
				<SkeletonLoader count={5} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<Field
							register={register}
							name='name'
							options={{
								required: 'Name is required',
							}}
							placeholder='Name'
							error={errors.name}
							style={{ width: '48%' }}
						/>

						<div style={{ width: '45%' }}>
							<SlugField
								generate={() =>
									setValue('slug', generateSlug(getValues('name')))
								}
								register={register}
								error={errors.slug}
							/>
						</div>

						{/* <Controller
							name='icon'
							control={control}
							render={({ field, fieldState: { error } }) => (
								<Select
									field={field}
									options={dataIcons}
									placeholder='Icon'
									error={error}
									isLoading={false}
									isMulti
								/>
							)}
							rules={{
								required: 'Icon is required',
							}}
						/> */}

						{/* <Field
							register={register}
							name='icon'
							options={{
								required: 'Icon is required',
							}}
							placeholder='Icon'
							error={errors.icon}
							style={{width: '31%'}}
						/> */}
					</div>

					<Controller
						control={control}
						name='description'
						defaultValue=''
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<TextEditor
								onChange={onChange}
								value={value}
								error={error}
								placeholder='Description'
							/>
						)}
						rules={{
							validate: {
								required: v =>
									(v && stripHtml(v).result.length > 0) ||
									'Description is required!',
							},
						}}
					/>

					<Button>Update</Button>
				</form>
			)}
		</Layout>
	)
}

export default GenreEdit
