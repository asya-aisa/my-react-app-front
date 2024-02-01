import AuthItems from './AuthItems'
import MenuItem from './MenuItem'
import styles from './Navigation.module.scss'
import { firstMenu } from './menu.data'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<ul>
				{firstMenu.map(item => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>

			<hr />

			<ul>
				<AuthItems />
			</ul>
		</div>
	)
}

export default Navigation
