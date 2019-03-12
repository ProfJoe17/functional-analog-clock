// Clock arms declaration and call / reference
var $SMHhands = $('.hands')

// Animation
window.requestAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||

	// Delay secs to timeout
	function (to) {
		setTimeout(to, 60)
	}

// Live date and time
function updateclockndate() {

	// Initialized time
	var currentTime = new Date(),
		seconddeg = ((currentTime.getSeconds() + currentTime.getMilliseconds() / 1000) / 60 * 360),
		minutedeg = ((currentTime.getMinutes() + currentTime.getSeconds() / 60) / 60 * 360),
		hourdeg = ((currentTime.getHours() + currentTime.getMinutes() / 60) / 12 * 360),
		twenty4h = (currentTime.getHours()),

		// Call classes that hold time of day (AM and PM)
		todAm = document.getElementsByClassName("todAm")[0].classList,
		todPm = document.getElementsByClassName("todPm")[0].classList;

	// Initialized date
	var currentDate = new Date(),
		disp_day = (currentDate.getDay()),
		disp_date = (currentDate.getDate()),
		disp_mon = (currentDate.getMonth()),
		disp_yr = (currentDate.getFullYear());

	// Function that also displays the date of the month (just as disp_date) but with a slight twist (date of month + ordinance suffix)
	function ord_suf(gtdt) {
		return gtdt.getDate() + (gtdt.getDate() % 10 == 1 && gtdt.getDate != 11 ? 'st' : (gtdt.getDate() % 10 == 2 && gtdt.getDate() != 12 ? 'nd' : (gtdt.getDate() % 10 == 3 && gtdt.getDate() != 13 ? 'rd' : 'th')));
	}
	var gtdt = new Date();
	var dt_ord_suf = ord_suf(gtdt);

	// Re-Initialized nums as str (Store Str Weekdays and Str Months after initialization)
	var d_day = '',
		d_mon = '';

	// Convert the numerical days of the week to str weekdays (Str Weekdays)
	if (disp_day === 1) {
		d_day = 'Mon';
	} else if (disp_day === 2) {
		d_day = 'Tue';
	} else if (disp_day === 3) {
		d_day = 'Wed';
	} else if (disp_day === 4) {
		d_day = 'Thu';
	} else if (disp_day === 5) {
		d_day = 'Fri';
	} else if (disp_day === 6) {
		d_day = 'Sat';
	} else {
		d_day = 'Sun';
	}

	// Convert the numerical months gotten from the initialized dates to str months (Str Months)
	if (disp_mon === 1) {
		d_mon = 'Feb';
	} else if (disp_mon === 2) {
		d_mon = 'Mar';
	} else if (disp_mon === 3) {
		d_mon = 'Apr';
	} else if (disp_mon === 4) {
		d_mon = 'May';
	} else if (disp_mon === 5) {
		d_mon = 'Jun';
	} else if (disp_mon === 6) {
		d_mon = 'Jul';
	} else if (disp_mon === 7) {
		d_mon = 'Aug';
	} else if (disp_mon === 8) {
		d_mon = 'Sep';
	} else if (disp_mon === 9) {
		d_mon = 'Oct';
	} else if (disp_mon === 10) {
		d_mon = 'Nov';
	} else if (disp_mon === 11) {
		d_mon = 'Dec';
	} else {
		d_mon = 'Jan';
	}

	// Light it up (AM / PM)
	(twenty4h >= 12) ? todPm.add("c-tod"): todAm.add("c-tod");
	(twenty4h >= 12) ? todAm.remove("c-tod"): todPm.remove("c-tod");



	// Convert current date to human readable form
	var cur_date = currentDate.toDateString()

	// Grab date element from html by #id
	var cde = document.getElementById("clockDate");

	// Push live current date to html element with #id called in above line
	cde.innerHTML = /* cur_date */ /* left OR right */ d_day + ', ' + d_mon + ' ' /* + disp_date */ /* disp_date OR dt_ord_suf */ + dt_ord_suf + ', ' + disp_yr;

	// Name of creator / owner (PLEASE leave unchanged!)
	var crte = document.getElementById("creator");
	crte.innerHTML = 'ProfJoe';

	// Push the following css property(s) to html elements with the respective .classes
	$SMHhands.filter('.secondhand').css({
		transform: 'rotate(' + seconddeg + 'deg)'
	})

	$SMHhands.filter('.minutehand').css({
		transform: 'rotate(' + minutedeg + 'deg)'
	})

	$SMHhands.filter('.hourhand').css({
		transform: 'rotate(' + hourdeg + 'deg)'
	})

	requestAnimationFrame(updateclockndate)
}

requestAnimationFrame(updateclockndate)
