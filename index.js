
let variableSinValor;

let booleano1= true;
let booleano2= false;

const PI= 3.14;
const TAU= PI*2;

let booleanoAnd= booleano1&&booleano2;

let booleanoNot= !booleano1;  

// !algo quiere decir no esto, !== es x distinto de y


let booleanoMix0= (booleano1 || booleano2) && (booleano1 || (booleano1 && !booleano2) ) ;


let incrementarDesp= 2;

let resultadoDesp=incrementarDesp++;

let incrementarAntes=2;

let resultadoAntes= ++incrementarAntes;


let contarHasta10_2=0;

for (let i= 0; i<10; i++) {

  contarHasta10_2++;
  console.log(contarHasta10_2);

}

 /*no se porque esto no lo daba por valido el programa 

for (let contarHasta10_2=0; contarHasta10_2<=10; contarHasta10_2++) {

  console.log(contarHasta10_2);

}*/


let postI= 0;
let postJ= 0;

for (let i=0; i<11; i++) {

  postI = postI+ postJ++;

}


let sumaPares= 0;

for (let i= 0; i< 10; i++) {

  if (i%2===0) {  //lo de pa ver si el numero es par, si dividiendo entre 2 deja el resto 0 es par o asi

    sumaPares= sumaPares+i;
  } 

}


//parte individual


 let variableValorNumerico=5;

 const MiNombre='Joana';

 const MiNumeroFav=7;

  const booleanoOr= booleano1||booleano2;

  const booleanoMix1=(booleano1 && (TAU/2===PI)) || (variableValorNumerico >= MiNumeroFav) ;

  let seisNoEsNueve= 6!==9;
  

  let booleanoMix2;

  booleanoMix2= variableValorNumerico>0 || variableValorNumerico< -(MiNumeroFav*TAU);


  let valorSuma= MiNumeroFav+variableValorNumerico;

  let valorResta= MiNumeroFav-variableValorNumerico;

  let valorMultiplicacion= MiNumeroFav*variableValorNumerico;


  let valorDivision;

  for(let i=0; i<=3; i++){

    valorDivision=MiNumeroFav/i;

  }


  let contarHasta10=0;

  while(contarHasta10<10){

    contarHasta10++;

  }


  let preI=0;
  let preJ= 0;

  for (let j=0; j<11; j++){
    
    preI= ++preJ+preI;

  }


  let sumaImpares=0;

  for(let i=0; i<10; i++){

    if(i%2 !== 0){

      sumaImpares=sumaImpares+i;

    }

  }

