const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://api.sheetbest.com/sheets/a90c6743-774c-47e8-8d19-075fa98cacc4', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Cuenta": formulario.usuario.value,
            "Saldo": formulario.saldo.value

            
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
	
	
});
