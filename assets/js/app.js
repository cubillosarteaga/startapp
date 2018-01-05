// Registro de usuario:
function register() {
  	
  var name = $('#name').val();
  var lastName = $('#lastName').val();
  var email = $('#email').val();
  var password = $('#password').val();

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// ...
	});
}

// Inicio de sesión:
function login() {
  	
	var emailLog = $('#emailLog').val();
  var passwordLog = $('#passwordLog').val();

  firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// ...
	});
}

// Observador de estado:
function watcher() {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in:
     /* $('.homepage').hide();
      $('#header').show();
      $('#first').show();*/
      console.log(user);
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out:
      /*$('.homepage').show();
      $('#header').hide();
      $('#first').hide();  */
      // ...
    }
  });
}
watcher();

$(document).ready(function() {

  // Splash screen versión móvil:
  $(function() {
    setTimeout(function() {
      $('#splash').fadeOut(700);
    }, 3000);
  });
	
	// Postear y generar feed:
	var idPost = 0;

	$('#sendBtn').click(function() {
		if ($('#postTxt').val() !== "" && $('#postTitle').val() !== "") {
			$('.feed').prepend(
				"<div id='post_"+ idPost +"' class='post list-group'>" +
          "<a href='#' class='list-group-item active'>" +
            "<span>Usuario " + fullDate + "</span>" +
            "<h4 class='list-group-item-heading'>" + $('#postTitle').val() + "</h4>" +
            "<p class='list-group-item-text'>" + $('#postTxt').val() + "</p>" +
          "</a>" +
          "<div class='input-group'>" +
      			"<input type='text' id='comment' class='form-control' placeholder='Comentar'>" +
      			"<span class='input-group-btn'>" +
        			"<button id='sendComment' class='btn btn-default' type='button'><span class='glyphicon glyphicon-send' aria-hidden='true'></span></button>" +
      			"</span>" +
    			"</div><!-- /input-group -->" +
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

	// Comentar posteo:
	$('#sendComment').click(function() {
		if ($('#comment').val() !== "") {
				$('.feedBox').append(
					"<div class='commentBox'>" +
          	"<p>" + $('#comment').val() +
          	"</p>" +
        	"</div>"	
				);
			}
	});
});