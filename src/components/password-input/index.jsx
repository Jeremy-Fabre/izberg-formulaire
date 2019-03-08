import React from 'react'
import TextInput from '../text-input'
import {strengthIndicator, strengthColor} from './strength'

import './styles.css'

export default function PasswordInput(props) {
	const strength = strengthIndicator(props.value)
	const color = strengthColor(strength)
	return (
		<TextInput
			type="password"
			value={props.value}
			className="__password-input"
			placeholder={props.placeholder}
			handleChange={props.handleChange}
			style={{
				border: `1px solid ${color}`
			}}
		/>
	)
} 