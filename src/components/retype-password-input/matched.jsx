const hasNumbers = value => {
	return new RegExp(/[0-9]/).test(value);
}

const hasSpecial = value => {
	return (/[-[\]{}()*+?.,\\/^$|#\s]/g.test(value));
}

const hasMixed = value => {
	return new RegExp(/[a-z]/).test(value) &&
	       new RegExp(/[A-Z]/).test(value);
}

export const strengthColor = count => {
	if(count < 2) return 'red'
	if(count < 3) return 'orange'
	if(count < 4) return 'yellow'
	if(count < 5) return 'green'
}

export const strengthIndicator = value => {
	const matched = [];
	if(value.length > 5) matched.push('enough characters')
	if(hasNumbers(value)) matched.push('numbers ok');
	if(hasMixed(value)) matched.push('mixed ok');
	if(hasSpecial(value)) matched.push('special ok');
	return matched.length
}