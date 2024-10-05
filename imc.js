
function calcularIMC(){

    var peso= document.querySelector('#peso');
    var altura= document.querySelector('#altura');
    
    //console.log(peso.value);
    //console.log(altura.value);

    if(peso.value !='' && altura.valeu != ''){

    var imc = (peso.value / (altura.value*altura.value)).toFixed(2);

    if(imc < 18.5){
        alert(`IMC: ${imc } - Abaixo do peso`);
    }

    else if(imc <= 24.9){
        alert(`IMC: ${imc } - Normal`);
    }

    else if(imc <= 29.9){
        alert(`IMC: ${imc } - Sobrepeso`);
    }

    else{
        alert(`IMC: ${imc } - Obesidade`);
    }
  
    }
    
    else{
        alert('Preencha todos os campos!');
    
    }
}