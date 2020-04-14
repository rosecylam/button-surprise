$(document).ready(function() {

	$(".cloud").animate({left: "+=1500px"}, 50000);

	/* assigning star sizes */

	// Math.random() * (range) + (minimum size)
	var size1 = Math.round(Math.random() * 15 + 15);
	var size2 = Math.round(Math.random() * 15 + 15);
	var size3 = Math.round(Math.random() * 15 + 15);

	$(".size1").css('height', size1);
	$(".size1").css('width', size1);
	$(".size2").css('height', size2);
	$(".size2").css('width', size2);
	$(".size3").css('height', size3);
	$(".size3").css('width', size3);

	/* button hover effect */

	$(".button").mouseenter(function() {
		$(".button").css('cursor', 'pointer');
		$(".button").css('background', 'white');
		$(".button").css('color', '#6AB8FF');
	});

	$(".button").mouseleave(function() {
		$(".button").css('background', 'none');
		$(".button").css('color', 'white');
	});

	/* after button is clicked */

	$(".button").click(function() {
		$('body').css('background', '#0f0041');
		$(".button").css('color', '#0f0041');
		$(".button").fadeOut();
		$(".cloud").stop();

		$(".topleft").animate({left: "-=1500px"}, 2000)
		$(".bottomleft").animate({left: "-=1500px"}, 2000);
		$(".topright").animate({left: "+=1500px"}, 2000);
		$(".bottomright").animate({left: "+=1500px"}, 2000);

		$(".sun").delay(200).animate({top: "+=1000px"}, 4000);

		$(".moon").delay(600).animate({bottom: "+=610px"}, 3000);

		// star animations
		$(".a").delay(2000).fadeIn(4000);
		$(".b").addClass("flicker1");
		$(".c").addClass("flicker2");
		$(".d").delay(2000).fadeIn(4000);
		$(".e").addClass("flicker1");
		$(".f").addClass("flicker2");
		$(".g").delay(2000).fadeIn(4000);
		$(".h").addClass("flicker1");
		$(".i").addClass("flicker2");
		$(".j").delay(2000).fadeIn(4000);
		$(".k").addClass("flicker1");
		$(".l").addClass("flicker2");
		$(".m").delay(2000).fadeIn(4000);
		$(".n").addClass("flicker1");
		$(".o").addClass("flicker2");
		$(".p").delay(2000).fadeIn(4000);
		$(".q").addClass("flicker1");
		$(".r").addClass("flicker2");
		$(".s").delay(2000).fadeIn(4000);
		$(".t").addClass("flicker1");
	});

});

