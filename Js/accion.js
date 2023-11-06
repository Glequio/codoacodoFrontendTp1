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
    function comprar(){
      const dolarMega = 40;
      const dolarUno = 22;
      const dolarNano =13;
      const dolarMicro =11;
      console.log("Muestro cantidades********************");
      let dolar = parseFloat(document.getElementById("valorDolar").value);
      let mega = parseInt(document.getElementById("numeroMega").value);
      let uno = parseInt(document.getElementById("numeroUno").value);
      let micro = parseInt(document.getElementById("numeroMicro").value);
      let nano = parseInt(document.getElementById("numeroNano").value);
      let labelDescuento = document.getElementById("descuento");
      let labelTotal = document.getElementById("totalCompra");
      let labelTotalSDescuento = document.getElementById("totalSinDescuento");
      let div1 = document.getElementById("promo1");
      let div2 = document.getElementById("promo2");
      let div3 = document.getElementById("promo3");
      let color1 = '#7e888';
      let color2 = '#7e888';
      let color3 = '#7e888';
      div1.style.backgroundColor = color1;
      div2.style.backgroundColor = color2;
      div3.style.backgroundColor = color3;
      
      let totalSDescuento = dolar*(mega*dolarMega+uno*dolarUno+micro*dolarMicro+nano*dolarNano);
      let totalArticulos=0;
      totalArticulos=mega+uno+micro+nano;
      let totalDescuento =0;
      
      // div2.style.backgroundColor = '#7e888';
      // div3.style.backgroundColor = '#7e888';
      if (totalArticulos>2 && totalArticulos<5){
        totalDescuento = totalSDescuento * 0.08;
        color1='#79A39A';
        color2='#7e888';
        color3='#7e888';
      } else if  (totalArticulos >4 && totalArticulos<10){
        totalDescuento = totalSDescuento * 0.12;
        color1='#7e888';
        color2='#79A39A';
        color3='#7e888';
      } else if (totalArticulos >9){
        totalDescuento = totalSDescuento * 0.2;
        color1='#7e888';
        color2='#7e888';
        color3='#79A39A';

      } else {totalDescuento = 0;
        color1='#7e888';
        color2='#7e888';
        color3='#7e888';
      }

      console.log("totalDescuento : "+totalDescuento);
      
      let total = totalSDescuento-totalDescuento;
      labelTotalSDescuento.textContent=totalSDescuento.toFixed(2);
      labelDescuento.textContent=totalDescuento.toFixed(2);
      labelTotal.textContent=total.toFixed(2);
      // div1.style.backgroundColor = color1;
      // div2.style.backgroundColor = color2;
      // div3.style.backgroundColor = color3;


    }  
