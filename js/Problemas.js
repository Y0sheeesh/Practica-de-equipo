function validar(e){
    var teclado = (document.all)?e.KeyCode : e.which

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function problema1(){
    var p1_input = document.querySelector('#p1-input').value;
    var p1_input2 = document.querySelector('#p1-input2').value;

    var p1_i1 = parseFloat(p1_input);
    var p1_i2 = parseFloat(p1_input2);

    if(p1_i1 == p1_i2){
        document.querySelector('#p1-output').textContent = p1_i1*p1_i2;
    } else if (p1_i1 > p1_i2){
        document.querySelector('#p1-output').textContent = p1_i1-p1_i2;
    } else {
        document.querySelector('#p1-output').textContent = p1_i1+p1_i2;
    }
}