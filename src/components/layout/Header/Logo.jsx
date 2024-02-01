import { Link } from 'react-router-dom'
import logoImage from '/images/logo.png'

const Logo = () => {
	return (
		<Link to='/'>
			<img src={logoImage} width={50} height={50} alt='kinoteka' />
		</Link>
	)
}

export default Logo
