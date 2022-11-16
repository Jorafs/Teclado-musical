const listaDeTeclas = document.querySelectorAll('.tecla')

function tocaSom(){
	document.querySelector('#som_tecla_pom').play();
}

listaDeTeclas[0].onclick = tocaSom;