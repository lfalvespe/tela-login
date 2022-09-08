
function login(){
	let email = document.querySelector('#email')
	let senha = document.querySelector('#senha')
	let msg = document.querySelector('.msg')
	if (email.value != '' && senha.value != '') {
	   msg.innerHTML = 'Login efetuado com sucesso.'
	} else {
		msg.innerHTML = 'Email e/ou senha inválido(s)'
	}
}
function fundoEmailBranco() {
		email.style.backgroundColor = 'white'
}
function fundoEmailCinza() {
		email.style.backgroundColor = 'rgb(205, 205, 205)'
}

function fundoSenhaBranco() {
		senha.style.backgroundColor = 'white'
}
function fundoSenhaCinza() {
		senha.style.backgroundColor = 'rgb(205, 205, 205)'
}
