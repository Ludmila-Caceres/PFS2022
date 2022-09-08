function cuentaRegre() {
    var i = setInterval(function () {
        if (i === 0) {
            clearInterval(i); //limpio intervalo
            alert('BOOOOM!!!');
        }
        else {
            --i;
        }
    });
    setTimeout(function () {
        console.log("hola mundo con retraso");
    }, 1000);
}
