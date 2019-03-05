import React from 'react'
import PropTypes from 'prop-types';

import './styles.css'

export default function TextInput(props) {
	return (
		<input
			type={props.type}
			value={props.value}
			className="__text-input"
			placeholder={props.placeholder}
			onChange={props.handleChange}
			style={props.style}
		/>
	)
}

TextInput.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string
}

TextInput.defaultProps = {
	type: 'text'
}