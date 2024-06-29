import ReduxToastr from 'react-redux-toastr'

const ReduxToast = () => {
	return (
		<ReduxToastr
			timeOut={1000}
			newestOnTop={false}
			preventDuplicates
			closeOnToastrClick
			transitionIn='fadeIn'
			transitionOut='fadeOut'
			progressBar
		/>
	)
}

export default ReduxToast
