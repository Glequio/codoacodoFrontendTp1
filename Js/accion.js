    function calcular() {
        const dolarMega = 40;
        const dolarUno = 22;
        const dolarNano =13;
        const dolarMicro =11;
        
        let dolar = document.getElementById("dolar").value;
        let costoMega = document.getElementById("costoMega");
        let costoUno = document.getElementById("costoUno");
        let costoNano = document.getElementById("costoNano");
        let costoMicro = document.getElementById("costoMicro");
        
        console.log("Costo Mega en $ :", dolarMega*dolar)
       
        costoMega.innerText = dolar*dolarMega;
        costoUno.innerText = dolar*dolarUno;
        costoNano.innerText = dolar*dolarNano;
        costoMicro.innerText = dolar*dolarMicro;

      }
  
