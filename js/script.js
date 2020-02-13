$(document).ready(function(){
	var key = JSON.parse(apiKey);
	var myKey = key[0];

	var endpoint, size;

	$("#submit").click(function(){
		endpoint = document.getElementById("endpoint").value;
		size = document.getElementById("size").value;
		if(size === "Choose a photo size")size = "small";
		print();
	});

	function print(){
		$.ajax({
			url: `https://api.unsplash.com/${endpoint}/?client_id=${myKey}`,
			type: 'GET',
			data: 'json',
			success: function(data){
				console.log(data[0]);
				document.getElementById("output").innerHTML = "";
				var soize; // soize is the specific image link based on collections or photos
				for(var i = 0; i < data.length; i++){
					if(endpoint == "collections") soize = data[i].cover_photo.urls[size]; // [size] is using the variable size as the property
					if(endpoint == "photos") soize = data[i].urls[size];
					var card = "";
					card+= '<div class="card"><img src="'+ soize +'" class="card-img-top">';
					if(endpoint == "collections"){
						card += '<div class="card-body"><h5 class="card-title">' + data[i].title +'</h5>';
						if(data[i].description != null){
							card+= '<p class="card-text lead">' + data[i].description + '</p>'
						}
						if(data[i].description == null){
							card+= '<p class="card-text lead">' + data[i].cover_photo.description + '</p>'
						}
						card += '<p class="card-text">' + data[i].cover_photo.alt_description + '</p></div></div>';
					}

					if(endpoint == "photos"){
						card += '<p class="card-text">' + data[i].alt_description + '</p></div></div>';
					}

					document.getElementById("output").innerHTML += card;
				}
			},
			error: function(){
				console.log("error");
			}
		}); //end of ajax
	}	
});






// function checkType(){
// 		document.getElementById("output").innerHTML = "";
// 		if(endpoint === "collections"){
// 			printCollections();
// 		}
// 		if(endpoint === "photos"){
// 			printPhotos();
// 		}

// 	}

	// function printCollections(){
	// 	$.ajax({
	// 		url: `https://api.unsplash.com/${endpoint}/?client_id=${myKey}`,
	// 		type: 'GET',
	// 		data: 'json',
	// 		success: function(data){
	// 			console.log(data);
	// 			for(var i = 0; i < data.length; i++){
	// 				var card = "";
	// 				card+= '<div class="card"><img src="'+data[i].cover_photo.urls[size]+'" class="card-img-top">'
	// 				+ '<div class="card-body"><h5 class="card-title">' + data[i].title +'</h5>';
	// 				if(data[i].description != null){
	// 					card+= '<p class="card-text lead">' + data[i].description + '</p>'
	// 				}
	// 				if(data[i].description == null){
	// 					card+= '<p class="card-text lead">' + data[i].cover_photo.description + '</p>'
	// 				}

	// 				card += '<p class="card-text">' + data[i].cover_photo.alt_description + '</p></div></div>';
	// 				document.getElementById("output").innerHTML += card;
	// 			}
	// 		},
	// 		error: function(){
	// 			console.log("error");
	// 		}
	// 	}); //end of ajax
	// }	

	// function printPhotos(){
	// 	$.ajax({
	// 		url: `https://api.unsplash.com/${endpoint}/?client_id=${myKey}`,
	// 		type: 'GET',
	// 		data: 'json',
	// 		success: function(data){
	// 			console.log(data);
	// 			for(var i = 0; i < data.length; i++){
	// 				var card = "";
	// 				card+= '<div class="card"><img src="'+data[i].urls[size]+'" class="card-img-top">';
	// 				if(data[i].description != null){
	// 					card+= '<p class="card-text">' + data[i].description + '</p>'
	// 				}
	// 				if(data[i].description == null){
	// 					card+= '<p class="card-text lead"></p>'
	// 				}

	// 				card += '<p class="card-text">' + data[i].alt_description + '</p></div></div>';
	// 				document.getElementById("output").innerHTML += card;
	// 			}
	// 		},
	// 		error: function(){
	// 			console.log("error");
	// 		}
	// 	}); //end of ajax
	// }	

// 	function printUsers(data){
// 		for(var i = 0; i < data.length; i++){
// 			var card = "";
// 			card+= '<div class="card"><img src="'+data[i].cover_photo.urls.thumb+'" class="card-img-top">'
// 			+ '<div class="card-body"><h5 class="card-title">' + data[i].title +'</h5>';
// 			if(data[i].description != null){
// 				card+= '<p class="card-text lead">' + data[i].description + '</p>'
// 			}
// 			if(data[i].description == null){
// 				card+= '<p class="card-text lead">' + data[i].cover_photo.description + '</p>'
// 			}

// 			card += '<p class="card-text">' + data[i].cover_photo.alt_description + '</p></div></div>';
// 			document.getElementById("output").innerHTML += card;
// 		}
// 	}