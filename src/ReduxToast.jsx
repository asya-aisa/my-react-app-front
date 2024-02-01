import ReduxToastrLib from 'react-redux-toastr'

const ReduxToast = () => {
	return (
		<ReduxToastrLib
			newestOnTop={false}
			preventDuplicates
			closeOnToastrClick
			transitionIn='fadeIn'
		/>
	)
}

export default ReduxToast
