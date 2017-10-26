var imgslide = new Array();
	imgslide[0] = new Image();
	imgslide[0].src = "eyresquare.png";
	imgslide[1] = new Image();
	imgslide[1].src = "fishing.png";
	imgslide[2] = new Image();
	imgslide[2].src = "golf.png";
	imgslide[3] = new Image();
	imgslide[3].src = "horseriding.png";
	imgslide[4] = new Image();
	imgslide[4].src = "shoppingcentre.png";
	imgslide[5] = new Image();
	imgslide[5].src = "watersportred.png";

var i = 0;

function Slide()
{
	var img = document.getElementById("slide2");
	img.src = imgslide[i].src;

	if(i < 2)
	{
		i++;
	}
	else
	{
		i = 0;
	}
	
	setTimeout("Fade()", 3000);
	setTimeout("Slide()",4000);
	Reset();
}

function Reset()
{
	var img = document.getElementById("slide2");
	var imgstyle = img.style;
	imgstyle.visibility = "visible";
 	imgstyle.opacity = "1";
}
function Fade()
{
	var img = document.getElementById("slide2");
	var imgstyle = img.style;
	
	imgstyle.visibility= "hidden";
	imgstyle.opacity = "0";
	imgstyle.transition = "visibility 0s 2s, opacity 2s linear";
}

Slide()

