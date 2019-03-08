import React from 'react'
import TextInput from '../text-input'

import './styles.css'

export default function RetypePasswordInput(props) {
	const matchedColor = value => {
		if(value.password !== value.retypePassword) return 'red'
		if(value.password === value.retypePassword && value.retypePassword !== '') return 'green'
		if(value.retypePassword === '') return '#bbb'
	}
	return (
		<TextInput
			type="password"
			value={props.value}
			className="__retype-password-input"
			placeholder={props.placeholder}
			handleChange={props.handleChange}
			style={{
				border: `1px solid ${matchedColor(props)}`
			}}
		/>
	)
} 