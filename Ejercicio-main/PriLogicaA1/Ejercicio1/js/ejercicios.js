class Ejercicios1{
    venta(){
      //console.log("venta..")
      let costo = document.getElementById("costo").value
      costo = parseFloat(costo)
      let des = document.getElementById("descuento").value
      des = parseFloat(des)
      let resp = document.getElementById("resp")
      let iva = document.getElementById("iva").checked
      let valorIva = 0,sub=0,tot=0,valordes=0
      const iva12 = 0.12
      valordes = costo*(des/100)
      sub = costo-valordes
      if (iva==true){
        valorIva=sub*iva12
      }
      tot=sub+valorIva
      
      resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${tot.toString()}` 
      console.log(resp.textContent)
      console.log(costo,valordes,valorIva,sub,tot)

    }

}
let ejer = new Ejercicios1()
//ejer.venta()

class Ejercicio2{
  mayornumero(){
    let num1 = document.getElementById("num1").value
    num1 = parseFloat(num1)
    let num2 = document.getElementById("num2").value
    num2 = parseFloat(num2)
    let resp = document.getElementById("resp")
    if (num1 === num2){
      resp.textContent="Son iguales"
    }
    if (num1 > num2){
      resp.textContent= `El numero mayor es:${num1.toLocaleString()}`
    }
    if (num2 > num1){
      resp.textContent= `El numero mayor es:${num2.toString()}`
    }
    console.log(resp.textContent)
    console.log(num1, num2)
  }
}
let ejer2 = new Ejercicio2()
//ejer2.mayornumero()  

class Ejercicio3{
  diasemana(){
    let dia = document.getElementById("dia").value
    dia = parseFloat(dia)
    let resp = document.getElementById("resp").value
    if (dia==1){
      resp.textContent=`El dia 1 es Lunes`
    }
    if (dia==2){
      resp.textContent=`El dia 2 es Martes`
    }
    if (dia==3){
      resp.textContent=`El dia 3 es Miercoles`
    }
    if (dia==4){
      resp.textContent=`El dia 4 es Jueves`
    }
    if (dia==5){
      resp.textContent=`El dia 5 es Viernes`
    }
    if (dia==6){
      resp.textContent=`El dia 6 es Sabado`
    }
    if (dia==7){
      resp.textContent=`El dia 7 es Domingo`
    }
    if (dia==8){
      resp.textContent=`Error`
    }
    console.log(resp.textContent)
    console.log(dia)
  }
}
let ejer3 = new Ejercicio3()
//ejer3.diasemana()

class Ejercicio4{
  aniobisiesto(){
    let anio = document.getElementById("anio").value
    anio = parseFloat(anio)
    let resp = document.getElementById("resp")
    if ((anio%4==0) && (anio%100 !=0 || anio%400==0)){
      resp.textContent = ("El año es bisiesto");
    }else{
      resp.textContent = ("El año no es bisiesto")
    }    
      console.log(resp.textContent)
      console.log(anio)
    }
  }
let ejer4 = new Ejercicio4() 
//ejer4.aniobisiesto()

class Ejercicio5{
  presentarnumeros(){
      let inicio = document.getElementById("inicio").value
      inicio = parseFloat(inicio)
      let fin = document.getElementById("fin").value
      fin = parseFloat(fin)
      let resp = document.getElementById("Respuesta")
  
      if(inicio<fin){
        resp.textContent = `Los numeros entres: ${inicio} y ${fin} son\n`
      while(inicio < fin){
        resp.textContent += inicio+"\n"
          inicio++;
      }
    }
      else if (inicio >fin){
        resp.textContent = `Los numeros entres: ${inicio} y ${fin} son\n`
        while (inicio>fin) {
          inicio--
          resp.textContent += inicio+"\n"
          
        }
    }
    }
    
  }
  let ejer5 = new Ejercicio5()
  //ejer5.presentarnumeros()

class Ejercicio6{
  sumarpares(){
    let num1 = document.getElementById("num1").value
    num1 = parseFloat(num1)
    let num2 = document.getElementById("num2").value
    num2 = parseFloat(num2)
    let resp = document.getElementById("resp")
    let suma = 0
  
    if (num1 % 2 === 0 &&  num2 % 2 === 0){
      suma = num1 + num2
      resp.textContent = `La suma de los numeros pares es: ${suma.toString()}`
    } else{ 
      resp.textContent = `Error, los numeros no son pares`
    }
    console.log(resp.textContent)
    console.log(num1,num2)
    }
  } let ejer6 = new Ejercicio6()
  //ejer6.sumarpares()
  
  class Ejercicio7 {
    sumarcontar() {
        let num1 = document.getElementById("num1").value;
        num1 = parseInt(num1);
        let num2 = document.getElementById("num2").value;
        num2 = parseInt(num2);
        let resp = document.getElementById("resp")
        let total = 0, contar = 0;
        for (let i = num1; i <= num2; i++) {
            total = total + i;
            contar += 1;
        }
        respuesta.textContent = `Se ha sumado un total de: ${contar} números que van desde el número ${numero1} al  ${numero2}.\n Generando una sumatoria total de: ${total}`;
    }
}
let ejer7 = new Ejercicio7()
//ejer7.sumarcontar()



class Ejercicio9 {
 perfecto(){
    //console.log("perfecto.."")
    let n = document.getElementById("n").value
    n = parseFloat(n)
    let respuesta= document.getElementById("respuesta")
    let i = 1, acum =0
    while (i<n){
      if (n % i ==0){
        acum = acum + i
      }
      i++
    
    }
    if(acum == n){
      resp.textContent="El numero"  +n+ " es Perfecto"
    } else{
      resp.textContent= "El numero" +n+ "no es perfecto"
    }
    }
  }
let ejer9 = new Ejercicio9()

//ejer9.numeroperfecto()

class Ejercicio11{ 
divisores(){
  //console.log("divisor..")
    let num=document.getElementById(`num`).value   
    num = parseFloat(num)
    let resp = document.getElementById(`resp`)
    let conta = 1
    resp.textContent=`Los divisores del numero ${num.toString()} son:\n`
    if(num===num){
    while (conta< num){
      if(num%conta==0){
      resp.textContent +=`${conta.toString()}\n`
    }
    conta++
    }
    }else{
    resp.textContent= `El número ingresado no es valido`
    }
  }
}
  let ejer11 = new Ejercicio11()
  //ejer11.Divisores()