function calcular() {
	var ajaxRequest;
	var mensaje = document.getElementById("mensaje"); 

	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	} else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var Operador1 = document.getElementById("Operador1").value; 
	var Operador2 = document.getElementById("Operador2").value; 
	var informacionUsuario = "Operador=" + Operador1+ "&apellido=" + apellido;

	ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
    	var resultado = ajaxRequest.responseText;
    	mensaje.innerHTML = resultado;
    }
  };
  ajaxRequest.open("POST", "archivo.php", true);
  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  ajaxRequest.send(informacionUsuario);
}