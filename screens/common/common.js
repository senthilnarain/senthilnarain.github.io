 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openProductModal(products){
	selectedProduct = products;
	
	if(selectedProduct == 'rice'){

	}
	$('#product').modal({backdrop: 'static', keyboard: false});
}