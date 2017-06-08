$(function () {
	autoView();
});

function autoView() {
	var isIE = !!window.ActiveXObject || "ActiveXObject" in window;
	var browserHeight = document.documentElement.clientHeight;
	var topHeight = $(".top").outerHeight(true) + $(".topBanner").outerHeight(true);
	var bottomHeight = $(".footer").outerHeight(true) + $(".indexNav").outerHeight(true);
	var CurrentHeight;
	if (isIE){
	    CurrentHeight = browserHeight - (topHeight + bottomHeight+32);
	}
	else{
		CurrentHeight = browserHeight - (topHeight + bottomHeight+29);
	}
	var indexPadding = CurrentHeight - $(".indexCont").height();
	$(".container>.widthControl").css("min-height", CurrentHeight);
	$(".mailCont").css("height", CurrentHeight-95+"px");
	if (indexPadding > 0)
	{
		$(".indexCont").css("padding-top",indexPadding/2+"px");
		$(".indexCont").css("padding-bottom",indexPadding/2+"px");
	}
	else{
		$(".indexCont").css("padding-top","0px");
		$(".indexCont").css("padding-bottom","0px");
	}
}

function topBannerSlide(){
	$(".topBanner").slideToggle("fast");
	};