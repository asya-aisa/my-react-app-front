import { Controller, useForm } from 'react-hook-form'
import generateSlug from '../../../../utils/string/generateSlug'
import Layout from '../../../layout/Layout'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Button from '../../../ui/form-elements/Button'
import Field from '../../../ui/form-elements/Field'
import SlugField from '../../../ui/form-elements/SlugField/SlugField'
import UploadField from '../../../ui/form-elements/UploadField/UploadField'
import Heading from '../../../ui/heading/Heading'
import formStyles from '../adminForm.module.scss'
import { useActorEdit } from './useActorEdit'

const ActorEdit = () => {
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

	const { onSubmit, isLoading } = useActorEdit(setValue)

	return (
		<Layout>
			<Heading title='Edit actor' style={{ fontSize: '25px' }} />
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
						/>

						<SlugField
							generate={() => setValue('slug', generateSlug(getValues('name')))}
							register={register}
							error={errors.slug}
						/>

						<Controller
							name='photo'
							control={control}
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder='Photo'
									error={error}
									folder='actors'
									image={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Photo is required!',
							}}
						/>
					</div>

					<Button>Update</Button>
				</form>
			)}
		</Layout>
	)
}

export default ActorEdit
