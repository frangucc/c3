$(document).ready(function() {
	$('#kDropdown, .hidden-dropdown').mouseleave(function(e) {
		window.k = setTimeout(function() {
			$('.hidden-dropdown').addClass("hide_k"); }, 500 );
		}).mouseenter(function(e) {
		console.log("test")
		clearTimeout(window.k)
		$(".hidden-dropdown").removeClass("hide_k");
	});
})
