console.log('connected');

var breakTime = Number($('#breakTime').text())
var sessionTime = Number($('#sessionTime').text());

var Maintimer = new Timer();
var breakTimer = new Timer();

//initial time
	    $('.values').text(sessionTime);


//increment - decrement time
$('#splus').on("click",function () {
	sessionTime++;
	$('#sessionTime').text(sessionTime);
	$('.values').text(sessionTime);

});

$('#sminus').on("click",function () {
	if (sessionTime > 1) {
		sessionTime--;
	}
	   $('#sessionTime').text(sessionTime);
	   $('.values').text(sessionTime);
});

$('#bplus').on("click",function () {
	breakTime++;
	$('#breakTime').text(breakTime);
	$('.values').text(sessionTime);
});

$('#bminus').on("click",function () {
	if (breakTime > 0 ) {
		breakTime--;
	}
	$('#breakTime').text(breakTime);
	 $('.values').text(sessionTime);
});




//start timer on "start"
$('.start').on("click", function() {
	
	start();
	
	function start() {
		Maintimer.start({
			countdown: true, startValues: {minutes: sessionTime}
		});
		$('#countdownExample .values').html(Maintimer.getTimeValues().toString());
		Maintimer.addEventListener('secondsUpdated', function (e) {
	    	$('#countdownExample .values').html(Maintimer.getTimeValues().toString());
		});
		Maintimer.addEventListener('targetAchieved', function (e) {
			breaktime();
		}); 
	}

		function breaktime () {
		breakTimer.start({
			countdown: true, startValues: {minutes: breakTime}
		});
		$('#countdownExample .values').html(breakTimer.getTimeValues().toString());
		breakTimer.addEventListener('secondsUpdated', function (e) {
	    	$('#countdownExample .values').html(breakTimer.getTimeValues().toString());
		});
		breakTimer.addEventListener('targetAchieved', function (e) {
			start ();
		}); 
	}
});

$('.stop').click(function () {
    Maintimer.stop();
    breakTimer.stop();
    $('.values').text(sessionTime);
});


