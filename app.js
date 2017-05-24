document.getElementById('btn').addEventListener('click', function() {
	var pesel = parseInt(document.getElementById('pesel').value);
	var peselLength = pesel.toString().length;

	if (isNaN(pesel)) {
		alert('Nic nie wpisałeś');
	} else if (peselLength < 11 || peselLength > 11) {
		alert('To nie jest pesel!');
	} else if (!checkBirthDate(pesel)) {
		alert('To nie jest pesel!');
	} else {
		checkBirthDate(pesel);
		checkGender(pesel);
	}
});

function checkBirthDate(peselNumber) {
	var result = document.getElementById('dateOfBirth');

	var year = peselNumber.toString().substring(0, 2),
			month = peselNumber.toString().substring(2, 4),
			day = peselNumber.toString().substring(4, 6);

	if(month >= '81') {
		year = '18' + year;
	} else if (month >= '21') {
		year = '20' + year;
	} else {
		year = '19' + year;
	}

	if (parseInt(day) > 31) {
		return false;
	}

	switch (month) {
		case '81':
		case '21':
		case '01':
			month = 'styczeń';
			break;

		case '82':
		case '22':
		case '02':
			month = 'luty';
			break;

		case '83':
		case '23':
		case '03':
			month = 'marzec';
			break;

		case '84':
		case '24':
		case '04':
			month = 'kwiecień';
			break;

		case '85':
		case '25':
		case '05':
			month = 'maj';
			break;

		case '86':
		case '26':
		case '06':
			month = 'czerwiec';
			break;

		case '87':
		case '27':
		case '07':
			month = 'lipiec';
			break;

		case '88':
		case '28':
		case '08':
			month = 'sierpień';
			break;

		case '89':
		case '29':
		case '09':
			month = 'wrzesień';
			break;

		case '90':
		case '30':
		case '10':
			month = 'październik';
			break;

		case '91':
		case '31':
		case '11':
			month = 'listopad';
			break;

		case '92':
		case '32':
		case '12':
			month = 'grudzień';
			break;
	}

	return result.innerHTML = 'Twoja data urodzenia: ' + day + ' ' + month + ' ' + year + ' roku.';
}

function checkGender(peselNumber) {
	var result = document.getElementById('gender');

	var gender = parseInt(peselNumber.toString().charAt(9));

	if (gender % 2 == 0) {
		gender = 'kobieta';
	} else {
		gender = 'mężczyzna';
	}

	return result.innerHTML = 'Twoja płeć: ' + gender;
}
