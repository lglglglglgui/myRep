var index=0;
$(document).ready(function(){
	setInterval("next()",3000);
})

function next(){
	$("#ul1 li:eq("+index+")").fadeOut(1500);
	if(index==3)
	   index=0;
	else
	   index++;
	   $("#ul1 li:eq("+index+")").fadeIn(1500);
	
}


