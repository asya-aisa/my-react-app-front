import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../components/screens/NotFound'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'
import { useMediaQuery } from 'react-responsive'
import { routesMobile } from './routes.data.mobile'

const Router = () => {
	const { user } = useAuth()

	const isDesktop = useMediaQuery({
		query: "(min-width: 1224px)"
	});
  // const isTablet = useMediaQuery({
  //   query: "(max-width: 900px)"
  // });

  // const isMobile = useMediaQuery({
  //   query: "(max-width: 630px)"
  // });

	return (
		<BrowserRouter>
			<Routes>
			{isDesktop ? routes.map(route => {
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
				}) :
				routesMobile.map(route => {
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

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
