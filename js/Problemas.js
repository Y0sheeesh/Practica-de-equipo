function problema1(){
    var p1_input = document.querySelector('#p1-input').value;
    var p1_input2 = document.querySelector('#p1-input2').value;

    var p1_i1 = parseInt(p1_input);
    var p1_i2 = parseInt(p1_input2);

    if(p1_i1 == p1_i2){
        document.querySelector('#p1-output').textContent = p1_i1*p1_i2;
    } else if (p1_i1 > p1_i2){
        document.querySelector('#p1-output').textContent = p1_i1-p1_i2;
    } else {
        document.querySelector('#p1-output').textContent = p1_i1+p1_i2;
    }
}