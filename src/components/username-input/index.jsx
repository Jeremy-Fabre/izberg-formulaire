import React from 'react'
import TextInput from '../text-input'

import './styles.css'

export default function UsernameInput(props) {
	console.log('TCL: UsernameInput -> props.handleChange', props.handleChange)
	return (
		<TextInput
			type="text"
			value={props.value}
			className="__username-input"
			placeholder={props.placeholder}
			handleChange={props.handleChange}
		/>
	)
} 