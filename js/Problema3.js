function Resultado(){
    var horasTrabajo = parseInt(document.getElementById('p3-input').value);
    console.log('Las horas trabajadas son = ' + horasTrabajo);
    var pagaPorHora = parseInt(document.getElementById('p3-input2').value);
    console.log('El pago es = ' + pagaPorHora);

    if(horasTrabajo<=40){
        alert(horasTrabajo * pagaPorHora);      
    }else{
        if(horasTrabajo>40 && horasTrabajo<48){
            alert(horasTrabajo * pagaPorHora * 2);
        }else{
            alert(horasTrabajo * pagaPorHora * 3);
        }
    }
}