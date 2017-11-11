function hideAllMainLayers(){
	$('#homeContainer').hide();
	$('#menContainer').hide();
	$('#womenContainer').hide();
	$('#kidsContainer').hide();
	$('#contactContainer').hide();
}

function showHomeContainer(){
	hideAllMainLayers();
	$('#homeContainer').show();
}

function showMenContainer(){
	hideAllMainLayers();
	$('#menContainer').show();	
}

function showWomenContainer(){
	hideAllMainLayers();
	$('#womenContainer').show();
}

function showKidsContainer(){
	hideAllMainLayers();
	$('#kidsContainer').show();
}

function showContactContainer(){
	hideAllMainLayers();
	$('#contactContainer').show();
}