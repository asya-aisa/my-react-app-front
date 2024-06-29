import parse from 'html-react-parser'

const Description = ({ text, style, className }) => {
	return (
		<div style={style} className={className}>
			{parse(text)}
		</div>
	)
}

export default Description
