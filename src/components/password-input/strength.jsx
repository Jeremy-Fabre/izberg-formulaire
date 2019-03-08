const hasNumbers = value => {
	return new RegExp(/[0-9]/).test(value);
}

const hasSpecial = value => {
	return (/[-[\]{}()*+?.,_\\/^$|#\s]/g.test(value));
}

const hasMixed = value => {
	return new RegExp(/[a-z]/).test(value) &&
	       new RegExp(/[A-Z]/).test(value);
}

const hasNoSpace = value => {
	return new RegExp(/[\s]/).test(value);
}

export const strengthColor = count => {
	if(count < 2) return 'red'
	if(count < 3) return 'orange'
	if(count < 4) return 'yellow'
	if(count < 5) return 'green'
	if(count === 8) return 'red'
	if(count === 10) return '#bbb'
}

export const strengthIndicator = value => {
	const matched = [];
	if(value.length > 5) matched.push('length ok')
	if(hasNumbers(value)) matched.push('numbers ok');
	if(hasMixed(value)) matched.push('mixed ok');
	if(hasSpecial(value)) matched.push('special ok');
	if(hasNoSpace(value)){ matched.length= 8 };
	if(value === ''){ matched.length= 10};
	return matched.length
}

export const strengthWords = count => {
	if(count < 2) return 'very weak'
	if(count < 3) return 'weak'
	if(count < 4) return 'ok'
	if(count < 5 ) return 'strong'
	if(count === 8) return 'password must not contains spaces or lines return characters'
	if(count === 10) return ''
}