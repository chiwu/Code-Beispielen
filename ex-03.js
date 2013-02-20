/***************************************************************************************
Projekt: YAVIDO video player
Kunde: EURO I GmbH
Herausforderung: Entwicklung des HTML5 Video-Player, Content overlay, video responsive, 
  			 Cross-Browser-Kompatibilität
Plattformen: Web, Multiscreen Geräte 
Dienstleistungen: Website Entwicklung
Technologie : HTML5, CSS3, Javascript
****************************************************************************************/

var viewportWidth,
	playerWidth, 
	playerHeight,
	contentWidth,
	contentHeight,
	contentHeightTwitterOff,
	contentTop,
	contentTopTwitterOff;


var contentArray = ["content_skip", "content_suchen", "content_like", "content_dislike", "content_moods", "content_shows", "content_genre", "content_share", "content_shopping", "content_likeclip", "content_pause"];

function getViewportWidth(){
	if (typeof window.innerWidth != 'undefined') {
      viewportwidth = window.innerWidth;
	}
  // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
	else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
       viewportwidth = document.documentElement.clientWidth;
	}
	return viewportwidth;
}

function getPlayerWidth() {
	if (fullscreenchangeEl%2 != 0){
		playerWidth = 666;		// normal video width
	} else {
		playerWidth = document.getElementById('oberflaeche').offsetWidth;
	}
  return playerWidth;
}
function getPlayerHeight() {
	if (fullscreenchangeEl%2 != 0) {
		playerHeight = 375;		// normal video height
	} else {
		playerHeight = document.getElementById('oberflaeche').offsetHeight;
	}
  return playerHeight;
}

// get the size and position of the content
function getContentElem() {
	var videoElem = document.getElementById("videowrapper");
	videoElem.style.height = getPlayerHeight();
    
	for(var i = 0; i < contentArray.length; i++) {
		if(contentArray[i]) {
			var elem = document.getElementById(contentArray[i]);
			if (elem){
				if(fullscreenchangeEl%2 ==0){
					elem.style.width = contentWidth;	
				} else {
					elem.style.width = "566px";
					if (e1_twitterUpAndDown==="toGoDown") {
						elem.style.height = "296px";
					} else {
						elem.style.height = "260px";
						elem.style.top = "-308px";
					}
				}
				if (e1_twitterUpAndDown==="toGoDown") {
					elem.style.height = contentHeight;
					elem.style.top = contentTop;
				} else {
					elem.style.height = contentHeightTwitterOff;		
					elem.style.top = contentTopTwitterOff;
				}
			}
		}
	}	
}

/* unfinished */
