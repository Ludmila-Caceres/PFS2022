function cuentaRegre(){
    let i=setInterval(()=>{
        if(i===0){
            clearInterval(i);//limpio intervalo
            alert('BOOOOM!!!');
        }else{
            --i;
        } 
    })
    setTimeout(()=>{
        console.log("hola mundo con retraso");
    },1000);
}