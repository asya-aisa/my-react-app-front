import styles from './form.module.scss'

const Button = ({ children, style, ...rest }) => {
	return (
		<button className={styles.button} style={style} {...rest}>
			{children}
		</button>
	)
}

export default Button

