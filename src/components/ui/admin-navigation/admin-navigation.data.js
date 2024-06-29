import { getAdminUrl } from '../../../configs/url'

export const navItems = [
	{
		title: 'Movies',
		link: getAdminUrl('movies')
	},

	{
		title: 'Actors',
		link: getAdminUrl('actors')
	},

	{
		title: 'Genres',
		link: getAdminUrl('genres')
	}
]