/***************************************************************************************
Projekt: YAVIDO Samsung Smart TV App (Work in Progress)
Kunde: EURO I GmbH
Herausforderung: Einsetzung der TV App (adapt to keep to the same result as on Philips, LG, HbbTV, etc.)
Plattformen: Samsung TV
Dienstleistungen: Fernsehern App-Entwicklung
Technologie : HTML5, CSS3, Javascript
Software: Samsung SDK
****************************************************************************************/

var tvKey = new Common.API.TVKeyValue();


/* timer function to detect how long it's been without any key event
  so that the controls can fade out after a certain time
================================================================================ */
var c=0;
var t;
var controlsShow=true;
var keyPressed = false;

function timedCount(){
	c += 1;
	t=setTimeout("timedCount()",1000);
	
	// controls fadeout when no key event for longer than 5 secs
	if(c==5){
		keyPressed = false;
		fade("test");
		fade("vjs-controls");
	} 
}

function doTimer(){
	//if (!timer_is_on){
	//	timer_is_on=1;
		timedCount();
	//}
}

/* set the focus to share btn at the start
================================================================================ */
var el_NavFocus = 9;



/* class names of btns
================================================================================ */
var arr_navsHorizontal = new Array;
	arr_navsHorizontal[0] = "left-nav-search";
	arr_navsHorizontal[1] = "left-nav-like";
	arr_navsHorizontal[2] = "left-nav-dislike";
	arr_navsHorizontal[3] = "left-nav-skip";
	arr_navsHorizontal[4] = "left-nav-shopping";
	arr_navsHorizontal[5] = "like";
	arr_navsHorizontal[6] = "moods";
	arr_navsHorizontal[7] = "shows";
	arr_navsHorizontal[8] = "genre";
	arr_navsHorizontal[9] = "share";
	arr_navsHorizontal[10] = "vjs-play-control";
	arr_navsHorizontal[11] = "skip";
	arr_navsHorizontal[12] = "vjs-mute-control";
	arr_navsHorizontal[13] = "vjs-fullscreen-control";

/*var arr_navsVertical = new Array;
	arr_navsVertical[0] = "like";
	arr_navsVertical[1] = "moods";
	arr_navsVertical[2] = "shows";
	arr_navsVertical[3] = "genre";
	arr_navsVertical[4] = "share";
*/


function doNavKeyPress(e) {
	alert("c before =" +c);
	c=0;
	//timedCount();
	//showFadeControls();
	//keyPressed = true;
	//show controls as soon as a key event is trigered
	show("vjs-controls");
	show("test");
	if(el_NavFocus >5 && el_NavFocus <=13 && e.keyCode ==  tvKey.KEY_LEFT){
	 // if (e.keyCode ==  tvKey.KEY_LEFT) {
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").removeClass('active');
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").addClass('inactive');
	  		el_NavFocus -=1;
			//alert ('left' + el_NavFocus);
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").removeClass('inactive');
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").addClass('active');
			//alert (el_NavFocus);
			//keyPressed = true;
	}  
	if (el_NavFocus >=5 && el_NavFocus <13  && e.keyCode ==  tvKey.KEY_RIGHT) {
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").removeClass('active');
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").addClass('inactive');
	  		el_NavFocus +=1;
			//alert ('left' + el_NavFocus);
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").removeClass('inactive');
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").addClass('active'); 
			//alert (el_NavFocus);
			//keyPressed = true;
	}
	if(el_NavFocus <=5 && el_NavFocus >0 && e.keyCode ==  tvKey.KEY_UP){
		//if (e.keyCode ==  tvKey.KEY_UP) {
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").removeClass('active');
			//$("." + arr_navsHorizontal[el_NavFocus] + "> div").adClass('inactive');
	  		el_NavFocus -=1;
			//el_NavFocus_Vertical +=1;
			//alert ('left' + el_NavFocus);
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").removeClass('inactive');
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").addClass('active');
			//alert (el_NavFocus);
			//keyPressed = true;
	}
	if(el_NavFocus <=4 && el_NavFocus >=0 && e.keyCode ==  tvKey.KEY_DOWN){
		//} else if (e.keyCode ==  tvKey.KEY_DOWN) {
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").removeClass('active');
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").addClass('inactive');
	  		el_NavFocus +=1;
			//alert ('left' + el_NavFocus);
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").removeClass('inactive');
			$("." + arr_navsHorizontal[el_NavFocus] + "> div").addClass('active');
		    //alert (el_NavFocus);		
			//keyPressed = true;
	}
	if(contentCheckBtn[allBtns[el_NavFocus][0]]!=1 && e.keyCode == tvKey.KEY_ENTER){
		getContent(allBtns[el_NavFocus][0]);
		if()
		checkWhichContent(allBtns[el_NavFocus][0]);
		//keyPressed = true;
		//alert(allBtns[el_NavFocus][0]);
		//alert(contentCheckBtn[allBtns[el_NavFocus][0]]);
	} else {
		closeContent();
		contentCheckBtn[allBtns[el_NavFocus][0]] = 0;
		//keyPressed = true;
	}

alert("c after = " +c);
