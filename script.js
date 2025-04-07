function shortcut(s1, s2) {
	let newStr = '';
	s1 = s1.trim();
	s2 = s2.trim();
	if(s1 == '' && s2 ==''){
		return newStr;
	} else if(s1 !== '' && s2 !==''){
		newStr += s1.charAt(0) + s2.charAt(0);
	} else if(s1 !== '' && s2 ===''){
		return newStr;
	} else {
		return newStr
	}

	return newStr;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
