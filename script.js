const user = document.getElementById("user")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
	e.preventDefault()
	let warnings = ""
	let entrar = false
	parrafo.innerHTML = ""



	if(user.value.length <4){
		warnings += `El nombre de usuario es muy corto <br>`
		entrar = true
	}
	if(pass.value.length <6){
		warnings += `La contraseña debe tener minimo 6 caracteres <br>`
		entrar = true
	}
		if(pass.value.length >16){
		warnings += `La contraseña como maximo ha de tener 16 caracteres <br>`
		entrar = true
	}
	
	if(entrar){
		parrafo.innerHTML = warnings
	}else{
		parrafo.innerHTML = "Enviado"
    }
