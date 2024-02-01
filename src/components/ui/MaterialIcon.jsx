import * as MaterialIcons from 'react-icons/md'

const MaterialIcon = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || <MaterialIcons.MdQuestionMark />
}

export default MaterialIcon
