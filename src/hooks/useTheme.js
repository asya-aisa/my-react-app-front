import {  useLayoutEffect, useState } from 'react'


export const useTheme = () => {
	const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light')

	const [checked, setChecked] = useState(localStorage.getItem ('check') || 'true')

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('app-theme', theme)
		localStorage.setItem('check', checked )
	}, [theme, checked])

	return { theme, setTheme, checked, setChecked }
}