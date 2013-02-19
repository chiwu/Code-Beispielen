/***************************************************************************************
Projekt: YAVIDO video player
Kunde: EURO I GmbH
Herausforderung: Entwicklung des HTML5 Video-Player, Content overlay, video responsive, Cross-Browser-Kompatibilität
Plattformen: Web, Multiscreen Geräte 
Dienstleistungen: Website Entwicklung
Technologie : HTML5, CSS3, Javascript
****************************************************************************************/


/* set the values to 0
// and 1 when a corresponding btn is clicked 
================================================================================ */
var contentCheckBtn = new Array();
  contentCheckBtn["search"]=0;
	contentCheckBtn["like"]=0;
	contentCheckBtn["dislike"]=0;
	contentCheckBtn["skip"]=0;
	contentCheckBtn["shopping"]=0;
	contentCheckBtn["moods"]=0;
	contentCheckBtn["shows"]=0;
	contentCheckBtn["genre"]=0;
	contentCheckBtn["share"]=0;
	contentCheckBtn["likeclip"]=0;
	contentCheckBtn["ad"]=0;

/* class names of the btns
// and the names of the corresponding content 
================================================================================ */
var allBtns = new Array();
	allBtns[0] = new Array();
	allBtns[0][0]="search";
	allBtns[0][1]="left-nav-search";
	allBtns[1] = new Array();
	allBtns[1][0]="like";
	allBtns[1][1]="left-nav-like";
	allBtns[2] = new Array();
	allBtns[2][0]="dislike";
	allBtns[2][1]="left-nav-dislike";
	allBtns[3] = new Array();
	allBtns[3][0]="skip";
	allBtns[3][1]="left-nav-skip";
	allBtns[4] = new Array();
	allBtns[4][0]="shopping";
	allBtns[4][1]="left-nav-shopping";
	allBtns[5] = new Array();
	allBtns[5][0]="moods";
	allBtns[5][1]="moods";
	allBtns[6] = new Array();
	allBtns[6][0]="shows";
	allBtns[6][1]="shows";
	allBtns[7] = new Array();
	allBtns[7][0]="genre";
	allBtns[7][1]="genre";
	allBtns[8] = new Array();
	allBtns[8][0]="share";
	allBtns[8][1]="share";
	allBtns[9] = new Array();
	allBtns[9][0]="likeclip";
	allBtns[9][1]="like";

/* call dialogues out when a btn is clicked as well as turn the watermark off
================================================================================ */
function getContent(btn){
	document.getElementById('content-text').innerHTML = correspondingContent[btn];
	document.getElementById('content-text').style.visibility = 'visible';
	document.getElementById('watermark').style.display= 'none';	
	playerSizeInit();
};

/* add active class
/ to the btn clicked
================================================================================ */
function checkActiveBtn(){
	for(var i=0; i<allBtns.length; i++){
	  if ($("." + allBtns[i][1] + "> div").attr("class") != "inactive") {
		if (contentCheckBtn[(allBtns[i][0])]==1){
			$("." + allBtns[i][1] + "> div").addClass('active');
		} else {
			$("." + allBtns[i][1] + "> div").removeClass('active');
		}
	  }
	}
}

/*check if corresponding content is alread on show 
//to prevent the same content slide up again from the next click on the same btn
================================================================================ */
function checkWhichContent(btnClicked){ 

	contentCheckBtn["search"]=0;
	contentCheckBtn["like"]=0;
	contentCheckBtn["dislike"]=0;
	contentCheckBtn["skip"]=0;
	contentCheckBtn["shopping"]=0;
	contentCheckBtn["moods"]=0;
	contentCheckBtn["shows"]=0;
	contentCheckBtn["genre"]=0;
	contentCheckBtn["share"]=0;
	contentCheckBtn["likeclip"]=0;
	contentCheckBtn["ad"]=0;

 	for(var i=0; i<contentCheckBtn.length; i++){ 
 		contentCheckBtn[i]=0; 
 	} 

 	contentCheckBtn[btnClicked]=1; 
	checkActiveBtn();
};
