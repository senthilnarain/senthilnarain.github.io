function hideAllMainLayers(){
	$('#aboutContent').hide();
	$('#contactContent').hide();
	$('#dashboardContent').hide();
}

function openAboutPage(){
	hideAllMainLayers();
	$('#aboutContent').show();
}

function openContactPage(){
	hideAllMainLayers();
	$('#contactContent').show();
}

function dashboardPage(){
	hideAllMainLayers();
	$('#dashboardContent').show();	
}