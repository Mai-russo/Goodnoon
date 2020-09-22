var numGuia = 1;
function add () {
	let caminho = './sites/'+document.getElementById('site').value+'/index.html';
	let ambiente = document.getElementById('ambiente');
	let iframe = document.createElement('iframe');
	iframe.src = caminho;
	iframe.id = 'guia'+numGuia;
	ambiente.appendChild(iframe);
	numGuia++; 
}
function remove () {
	let guia = 'guia'+document.getElementById('remove').value;
	document.getElementById(guia).remove();
	numGuia--;
}