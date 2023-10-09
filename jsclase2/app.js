function actualizarContador(numero){
    document.getElementById('contador').textContent=numero;
}
function iniciarContador(){
    let numero = 10;
    let intervalo=setInterval(function(){
        actualizarContador(numero);
        numero--;
        if(numero<0){
            clearInterval(intervalo);
            alert('¡Feliz año nuevo!');
        }

    },1000);
}
window.onload= iniciarContador;
