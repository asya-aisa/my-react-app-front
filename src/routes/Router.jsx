import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../components/screens/NotFound'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'

const Router = () => {
	const { user } = useAuth()

	// const isTablet = useMediaQuery({
	//   query: "(max-width: 900px)"
	// });

	// const isMobile = useMediaQuery({
	//   query: "(max-width: 630px)"
	// });

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.user && !user) {
						return false
					}

					if (route.admin && !user.isAdmin) {
						return false
					}

					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}

				{/* {routes.map(route => {
					if (route.user && !user) {
						return false
					}

					if (route.admin && !user.isAdmin) {
						return false
					}

					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})} */}

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
