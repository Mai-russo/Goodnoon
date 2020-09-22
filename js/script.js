document.getElementById('nome').addEventListener("change", checarnome);
document.getElementById('message').addEventListener("change", checarmsg);
function checarmsg () {
	var msg = document.getElementById('message').value.split(" ");
	if (msg.length < 5) {
		document.getElementById('enviar').type = ''
		document.getElementById('notif').innerHTML = 'O número mínimo de palavras é 5*';
	}
	else{
		document.getElementById('enviar').type = 'submit'
		document.getElementById('notif').innerHTML = '';
	}
}
function checarnome () {
	var nome = document.getElementById('nome').value.split(" ");
	if (nome.length < 2) {
		document.getElementById('enviar').type = ''
		document.getElementById('notif').innerHTML = 'Insira um nome completo*';
	}
	else{
		document.getElementById('enviar').type = 'submit'
		document.getElementById('notif').innerHTML = '';
	}
}