$(document).ready(function() {

	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDEU_jVdKjoBNWIT1uiiO1wY4W_EU2vnNY",
    authDomain: "startapp-5ea72.firebaseapp.com",
    databaseURL: "https://startapp-5ea72.firebaseio.com",
    projectId: "startapp-5ea72",
    storageBucket: "startapp-5ea72.appspot.com",
    messagingSenderId: "331023785710"
  };
  firebase.initializeApp(config);
	
	// Enviar comentario y generar feed:
	$('#sendBtn').click(function() {
		if ($('#comment').val() !== "") {
			$('.feed').append(
				"<div class='feedBox list-group'>" +
          "<a href='#' class='list-group-item active'>" +
            "<span>Usuario " + fullDate + "</span>" +
            "<h4 class='list-group-item-heading'>List group item heading</h4>" +
            "<p class='list-group-item-text'>" + $('#comment').val() + "</p>" +
          "</a>" +
        "</div>"	
			);
		}
	});
			
	// Da formato a la fecha:
		var todayFeed = new Date();
		var date = todayFeed.getDate();
		var month = todayFeed.getMonth();
		var year = todayFeed.getFullYear();
		var hours = todayFeed.getHours();
		var minutes = todayFeed.getMinutes();
		var fullDate = date +'/'+ month +'/'+ year +' '+ hours +':'+ minutes;
});