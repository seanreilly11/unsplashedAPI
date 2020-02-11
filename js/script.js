$(document).ready(function(){
	$.ajax({
		url: 'js/MOCK_DATA1.json',
		type: 'GET',
		data: 'json',
		success: function(data){
			console.log(data[0]);
			successAjax(data);
		},
		error: function(){
			console.log("error");
		}
	}); //end of ajax
});


function successAjax(data){
	for(var i = 0; i < data.length; i++){
		document.getElementById("output").innerHTML += "<div class='col col-md-4 col-xl-2 col-sm-6'><h1>" + data[i].name + "</h1>"
		+ "<p>" + data[i].cost + "</p>"
		+ "<p class='lead'>" + data[i].creator + "</p>"
		+ "<p class='lead'>" + data[i].origin + "</p></div>";
	}
}