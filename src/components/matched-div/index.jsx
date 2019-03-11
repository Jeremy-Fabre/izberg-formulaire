import React from 'react'

import './styles.css'

export default function MatchedDiv(props) {
	
	const matched = value => {
		if(value.password !== value.retypePassword) return 'Password re-typed must match password.'
		if(value.password === value.retypePassword && value.retypePassword !== '') return 'Password re-typed match password.'
		if(value.retypePassword === '') return ''
	}
	const matchedColor = value => {
		if(value.password !== value.retypePassword) return 'red'
		if(value.password === value.retypePassword) return 'green'
	}
	return (
		<div id="matched-indicator">
			<p style={{color: matchedColor(props)}}>{matched(props)}</p>
		</div>
	)
} 