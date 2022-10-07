
//--------------------- 1 ------------------------

// ARREGLO IMPAR

let numeros=[1,2,3,4,5]

const arregloImpar=(numeros)=>{

    let impares=numeros.filter(r=>r%2!=0);
    console.log(impares);

}

arregloImpar(numeros);


// 50 PRIMEROS NUMEROS PRIMOS

const primo=(numero)=> {

  for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

let c = 50;
let j = 2;
let numerosPrimos = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

// MULTIPLO DE 6 Y 5

const multiplo5y6=(numero)=>{

   return (numero%5==0 && numero%6==0) ? true:false;

}

console.log(multiplo5y6(30)?'es multiplo de 5 y 6': 'no es multiplo de 5 y 6');




// -------------------- 2 -------------------------

class empleado{

    nombre='';
    apellido='';
    dni='';
    cargo='';
    calificacion=0;
    tiempoServicio=0;

}

let empleados=[];

let e1=new empleado();
e1.nombre='Jorge';
e1.apellido='Castillo';
e1.cargo='Operador de maquinaria pesada';
e1.calificacion=6;
e1.tiempoServicio=4;

let e2=new empleado();
e2.nombre='Luis';
e2.apellido='Cordova';
e2.cargo='Operador de maquinaria pesada';
e2.calificacion=6;
e2.tiempoServicio=8;

let e3=new empleado();
e3.nombre='Alexia';
e3.apellido='Vargas';
e3.cargo='Operadora de maquinaria pesada';
e3.calificacion=3;
e3.tiempoServicio=7;

let e4=new empleado();
e4.nombre='Marieli';
e4.apellido='Castro';
e4.cargo='Operadora de maquinaria pesada';
e4.calificacion=10;
e4.tiempoServicio=2;

empleados.push(e1);
empleados.push(e2);
empleados.push(e3);
empleados.push(e4);

//MAYOR CALIFICACION
const mayorCalificacion=(ope)=>{

     ope.forEach(e=> {
        if(e.calificacion==10){
            ope.shift();
        }
    } );

    console.log(ope);

}

//MAS DE 5 AÑOS DE SERVICIO
const mayor5=(ope)=>{

   console.log( 
    
    ope.filter(e=> {
       if(e.tiempoServicio>5){
           return e;
       }
   } )
   );


}

//CALIFICACION MAYOR A 7
const calificacionMayor7=(ope)=>{

   let res= ope.filter(e=> {
       if(e.calificacion>7){
           return e;
       }
        } );

   console.log(res);

}

mayorCalificacion([...empleados]);

mayor5([...empleados]);

calificacionMayor7([...empleados]);











//---------------------- -3 -----------------------

class celular{


    mensaje='';
    operador='';
    celularEmisor='';

    constructor(mensaje,operador){
        this.mensaje=mensaje;
        this.operador=operador;
    }

    agregarcelularEmisor(celularEmisor){
        this.celularEmisor=celularEmisor;
    }

    mostrarMensaje=()=>{
        if(this.operador=='Claro' && this.celularEmisor.operador=='Entel'){
            console.log(`El celular ${this.celularEmisor.operador} ha enviado un mensaje pero fue bloqueado`);

        }else{
            console.log(`El celular ${this.celularEmisor.operador} ha enviado el siguiente mensaje: ${this.celularEmisor.mensaje}`);
        }
    }



}


let celular1=new celular('mensaje1','Entel');
let celular2=new celular('mensaje2','Claro');
let celular3=new celular('mensaje3','Movistar');

celular1.agregarcelularEmisor(celular2);
celular2.agregarcelularEmisor(celular1)
celular3.agregarcelularEmisor(celular3)

celular1.mostrarMensaje();
celular2.mostrarMensaje();
celular3.mostrarMensaje();


//------------------------------- 4- ------------------------------------


const calculadora=(n1,n2,operacion)=>{

    switch(operacion){

        case '+':
            return n1+n2;
            break;
        case '-':
            return n1-n2;
            break;

        case '*':
            return n1*n2;
            break;

        case '/':
            return n1/n2;
            break;

    }

}

//SUMA
console.log(calculadora(1,2,'+'));
//RESTA
console.log(calculadora(1,2,'-'));
//MULTIPLICACION
console.log(calculadora(1,2,'*'));
//DIVISION
console.log(calculadora(1,2,'/'));


















