
const DateUtils = {

isValidDate(str){
	 // STRING FORMAT yyyy-mm-dd
	 if (!str) { return false; }

	 if (str.trim().length !== 10) { return false; }

	 // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'
	 let m = str.match(/(\d{4})-(\d{2})-(\d{2})/);

	 // STR IS NOT FIT m IS NOT OBJECT
	 if( m === null || typeof m !== 'object') { return false; }

	 // CHECK m TYPE
	 if (typeof m !== 'object' && m !== null && m.size!==3) { return false; }

	 let thisYear = new Date().getFullYear();
	 let minYear = 1999;

	// YEAR CHECK
	 if( (m[1].length < 4) || m[1] < minYear || m[1] > thisYear) { return false; }
	// MONTH CHECK
	 if( (m[2].length < 2) || m[2] < 1 || m[2] > 12) { return false;}
	// DAY CHECK
	 if( (m[3].length < 2) || m[3] < 1 || m[3] > 31) { return false;}

	 return true;
},

isValidDateOrEmpty(str){
	if ( str === '') {
		return true;
	} else {
		return DateUtils.isValidDate(str);
	}
},

getFromDate(yearMinus){
	const dateNow = new Date()
	    , yearTo = dateNow.getUTCFullYear();

	let monthTo = dateNow.getUTCMonth() + 1;
	if ( monthTo<10 ){
		monthTo = "0" + monthTo;
	}

	let dayTo = dateNow.getUTCDate();
	if ( dayTo<10 ){
		dayTo = "0" + dayTo;
	}

	return (yearTo-yearMinus) + "-" + monthTo + "-" + dayTo;
},

getToDate(){
	const dateNow = new Date()
	    , yearTo = dateNow.getUTCFullYear();

	let monthTo = dateNow.getUTCMonth() + 1;
	if ( monthTo<10 ){
		monthTo = "0" + monthTo;
	}

	let dayTo = dateNow.getUTCDate();
	if ( dayTo<10 ){
		dayTo = "0" + dayTo;
	}

	return yearTo + "-" + monthTo + "-" + dayTo;
},

formatTo(millisUTC){
  const d = new Date(millisUTC);
  return ("0" + d.getUTCDate()).slice(-2)
         + "-" + ("0" + (d.getUTCMonth() + 1) ).slice(-2)
         + "-" + d.getUTCFullYear() ;
},

toUTCMillis(strDate){
  const arr = strDate.split('-')
  return Date.UTC(arr[0], parseInt(arr[1],10)-1, arr[2]);
},

/* 1970-01-01 */
isWeekend(year, month, day){
	const date = new Date(Date.UTC(parseInt(year+'', 10), (parseInt(month+'',10))-1, parseInt(day+'',10)))
      , weekday = date.getUTCDay() ;

	if (weekday === 0 || weekday === 6){
		return true;
	} else {
		return false;
	}
}

}

export default DateUtils
