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

  /*var tweetText = document.getElementById("tweet");
	var userName = document.getElementById("username");
 	var feed = document.getElementsByName("feed")[0];*/
	
	//Estado inical botón "TWITTEAR", deshabilitado cuando no hay caracteres en el textarea:
	/*sendBtn.disabled = true;
	sendBtn.style.opacity = "0.5";*/

	//Enviar comentario y generar feed:
	$('#sendBtn').click(function() {
		if ($('#comment').val() !== "") {
			$('.feed').append(
				"<div class='feedBox list-group'>" +
          "<a href='#' class='list-group-item active'>" +
            "<h4 class='list-group-item-heading'>List group item heading</h4>" +
            "<p class='list-group-item-text'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>" +
          "</a>" +
        "</div>"	
			);
		}
	});

	btn.onclick = function() {
  	if (tweetText.value !== "") {
			//Estilo para el feed:
			feed.style.background = "#2C1832";
			feed.style.padding = "15px";
			feed.style.border = "2px solid #000";
			
			//Crea los elementos para el feed:
			var feedBox = document.createElement("div");
      var feedUser = document.createElement("p");
      var feedDate = document.createElement("p");
      var feedText = document.createElement("p");
      
			//Agrega los nodos nuevos al feed:
			feedBox.appendChild(feedUser);
      feedBox.appendChild(feedDate);
      feedBox.appendChild(feedText);
      
			//Crea la clase para cada caja de feed:
			feedBox.className = "feedbox";
			
			//Da formato a la fecha:
			var todayFeed = new Date();
			var date = todayFeed.getDate();
			var month = todayFeed.getMonth();
			var year = todayFeed.getFullYear();
			var hours = todayFeed.getHours();
			var minutes = todayFeed.getMinutes();
			var fullDate = date +'/'+ month +'/'+ year +' '+ hours +':'+ minutes;
			
			//Agrega el contenido de texto para cada nuevo elemento:
      feedUser.textContent = userName.textContent;
      feedDate.textContent = fullDate;
      feedText.textContent = tweetText.value;
			
    	//Agrega cada nuevo tweet al inicio del feed:
			feed.insertBefore(feedBox, feed.children[0]);
 		}
	};


});