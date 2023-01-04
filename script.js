var numTarjeta;
var mensaje;
function validarNumero() {
    
    numTarjeta=parseInt(document.getElementById("cardnumber").value);

    if((numTarjeta>999999999999999)&&(9999999999999999>=numTarjeta)){

        var numTarjetaAux=numTarjeta+"";
         var arrayNumTarjeta=
         [numTarjetaAux[0],
         numTarjetaAux[1],
         numTarjetaAux[2],
         numTarjetaAux[3],
         numTarjetaAux[4],
         numTarjetaAux[5],
         numTarjetaAux[6],
         numTarjetaAux[7],
         numTarjetaAux[8],
         numTarjetaAux[9],
         numTarjetaAux[10],
         numTarjetaAux[11],
         numTarjetaAux[12],
         numTarjetaAux[13],
         numTarjetaAux[14],
         numTarjetaAux[15],
        ]
    }

    else{
        mensaje="El numero no es valido";
    }
}