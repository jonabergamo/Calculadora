function tecla (num)
{
    var numero = document.querySelector('.digitado').innerHTML
    document.querySelector('.digitado').innerHTML = numumero + num

}


    function tecla (num)
    {
        var numero = document.getElementById('resultado').innerHTML
        document.getElementById('resultado').innerHTML = numero + num

     }

     function clean() 
     {
        document.getElementById('resultado').innerHTML = ''
        document.getElementById('digitado').innerHTML = ''
     }


     function back()
     {
        var digitado = document.getElementById('digitado').innerHTML
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
        
        if (resultado.length == 1) {
            clean()
        }
     }

     function calcular()
     {
        var resultado = document.getElementById('resultado').innerHTML
        var digitado = document.getElementById('digitado').innerHTML
        if(resultado)
        {
            document.getElementById('digitado').innerHTML = resultado
            document.getElementById('resultado').innerHTML = eval(resultado)

        }
     }

