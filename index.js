email = document.querySelector('#email')
senha = document.querySelector('#senha')
msg = document.querySelector('.msg')
label_email = document.getElementsByTagName('label')[0]
label_senha = document.getElementsByTagName('label')[1]

function login(){
	label_email = document.getElementsByTagName('label')[0]

	if (email.value != '' && senha.value != '') {
	   msg.innerHTML = 'Login efetuado com sucesso.'
	} else {
		msg.innerHTML = 'Email e/ou senha inválido(s)'
	}
}
function fundoEmailBranco() {
		email.style.backgroundColor = 'white'
		label_email.style.color = 'gold'
}
function fundoEmailCinza() {
		email.style.backgroundColor = 'rgb(205, 205, 205)'
		label_email.style.color = 'white'
}

function fundoSenhaBranco() {
		senha.style.backgroundColor = 'white'
		label_senha.style.color = 'gold'
}
function fundoSenhaCinza() {
		senha.style.backgroundColor = 'rgb(205, 205, 205)'
		label_senha.style.color = 'white'
}
