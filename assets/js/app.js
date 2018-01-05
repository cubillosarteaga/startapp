// Registro de usuario:
function register() {
  	
  var name = $('#name').val();          //Rescatando los datos ingresados por el usuario en el formulario
  var lastName = $('#lastName').val();
  var email = $('#email').val();
  var password = $('#password').val();

  firebase.auth().createUserWithEmailAndPassword(email, password) //Pasamos los datos del usuario, según los parámetros requeridos (email, password)
  .catch(function(error) {    //Incluimos instrucciones a ejecutar en caso de error
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// ...
	});
}

// Inicio de sesión:
function login() {
  	
	var emailLog = $('#emailLog').val();   //Rescatando los datos ingresados por el usuario en el formulario
  var passwordLog = $('#passwordLog').val();

  firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog) //Pasamos los datos del usuario, según los parámetros requeridos (email, password)
  .catch(function(error) {  //Incluimos instrucciones a ejecutar en caso de error
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
      $('.homepage').hide();
      $('#header').show();
      $('#first').show();
      console.log('Usuario activo');
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
      $('.homepage').show();
      $('#header').hide();
      $('#first').hide();
      console.log('No hay usuario activo');
      // ...
    }
  });
}
watcher();

// Cierre de sesión:
function close() {
  firebase.auth().signOut()
  // Sign-out successful.
  .then(function() {
    console.log('Cierre de sesión exitoso.');
  })
  // An error happened.
  .catch(function(error) {
    console.log('Ocurrió un error! Vuelve a intentarlo!');
  })
}

$(document).ready(function() {

  // Splash screen versión móvil:
  $(function() {
    setTimeout(function() {
      $('#splash').fadeOut(700);
    }, 3000);
  });
	
  // Da formato a la fecha:
    var todayFeed = new Date();
    var date = todayFeed.getDate();
    var month = todayFeed.getMonth();
    var year = todayFeed.getFullYear();
    var hours = todayFeed.getHours();
    var minutes = todayFeed.getMinutes();
    var fullDate = date +'/'+ month +'/'+ year +' '+ hours +':'+ minutes;

	// Publicar posteo:
	/*$('#submitBtn').click(function() {
		if ($('#postTitle').val() !== "" && $('#postTxt').val() !== "") {
			$('#feed').append(
				"<div class='thumbnail'>" +
          "<img src='" + imgURL + "' alt='...'>" +
          "<div class='caption'>" +
            "<h3>" + $('#postTitle').val() + "</h3>" +
            "<p>" + $('#postTxt').val() + "</p>" +
            "<a href='#' class='btn btn-primary btn_caption' role='button' data-toggle='modal' data-target='#mimodal3'>Ver más</a>" +
          "</div>" +
        "</div>" +
        "<!--Modal 'Ver Más'-->" +
        "<div class='modal fade' id='mimodal3' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
          "<div class='modal-dialog' role='document'>" +
            "<div class='modal-content modal_bg'>" +
              "<div class='modal-header'>" +
                "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
                "<h3 class='modal-title'>" + $('#postTitle').val() + "</h3>" +
              "</div>" +
              "<div class='modal-body'>" +
                "<img src='" + imgURL + "' alt=''>" +
              "</div>" +
              "<div class='modal-body favorites'>" +
                "<a class='icons2' href='#'><i class='fa fa-thumbs-up' aria-hidden='true'> Me gusta</i></a>" +
                "<a class='icons2' href='#'><i class='fa fa-heart' aria-hidden='true'> Me encanta</i></a>" +
                "<a class='icons2' href='#'><i class='fa fa-star' aria-hidden='true'> Favoritos</i></a>" +
              "</div>" +
              "<hr>" +
              "<div class='modal-footer'>" +
                "<button type='button' class='btn btn-primary btn_create'>Guardar</button>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
        "<!--Fin Modal 'Ver Más'-->" +
        "<!--Comentarios-->" +
        "<div id='commentBox'>" +
          "<textarea id='comment' name='comentario' placeholder='Comentario' rows='1'></textarea>" +
          "<button class='btn btn-default' id='sendBtn' type='submit' name='enviar'>Comentar</button>" +
        "</div>" +
        "<div id='commentList'>" +
        "</div>"
			);
		}
	});*/

	// Comentar posteo:
	$('#sendBtn').click(function() {
		if ($('#comment').val() !== "") {
				$('#commentList').append(
					"<div class='commentTxt'>" +
          	"<p>" + 
              "<span>Usuario " + fullDate + " </span>" + $('#comment').val() +
          	"</p>" +
        	"</div>"	
				);
			}
	});

  // Botones Filtrar newsfeed:
  $('#eventos').click(function() {
    $('.financiamiento').toggle();
    $('.capacitacion').toggle();
  });

  $('#financiamiento').click(function() {
    $('.eventos').toggle();
    $('.capacitacion').toggle();
  });

  $('#capacitacion').click(function() {
    $('.eventos').toggle();
    $('.financiamiento').toggle();
  });

});