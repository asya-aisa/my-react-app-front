import { useState } from 'react'
import MaterialIcon from '../../../ui/MaterialIcon'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				<MaterialIcon name={isShow ? 'MdClose' : 'MdMenu'} />
			</button>

			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
