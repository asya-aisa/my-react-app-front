import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import ReduxToast from './ReduxToast.jsx'
import Router from './routes/Router.jsx'
import { store } from './store/store.js'
import '/index.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Router />
				<ReduxToast />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
)
