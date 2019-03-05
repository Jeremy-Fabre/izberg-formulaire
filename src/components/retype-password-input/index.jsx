import React from 'react'
import TextInput from '../text-input'
import {strengthIndicator, strengthColor} from './matched'

import './styles.css'

export default function RetypePasswordInput(props) {
	const strength = strengthIndicator(props.value)
	const color = strengthColor(strength)
	console.log(color);
	return (
		<TextInput
			type="password"
			value={props.value}
			className="__retype-password-input"
			placeholder={props.placeholder}
			handleChange={props.handleChange}
			style={{
				border: `1px solid ${color}`
			}}
		/>
	)
} 