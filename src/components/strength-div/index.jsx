import React from 'react'
import {strengthIndicator, strengthColor, strengthWords} from '../password-input/strength'

import './styles.css'

export default function StrengthDiv(props) {
	const strength = strengthIndicator(props.password)
	const color = strengthColor(strength)
	const words = strengthWords(strength)
	return (
		<div id="strength-indicator">
			<p>Password strength : 
				<span style={{color:`${color}`}}> {`${words}`}</span></p>
		</div>
	)
} 