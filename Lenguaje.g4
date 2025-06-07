grammar Lenguaje;

programa     : instruccion+ ;
instruccion  : repeticion ;
repeticion   : 'repetir' '{' sentencia+ '}' 'hasta' condicion ';' ;
sentencia    : salida | terminar ;
salida       : 'imprimir' '(' cadena ')' ';' ;
terminar     : 'salir' ';' ;
condicion    : 'verdadero' | 'falso' ;
cadena       : '"' caracter* '"' ;
caracter     : letra | digito | simbolo ;
letra        : [a-zA-Z] ;
digito       : [0-9] ;
simbolo      : [.,!?'" ] ;

WS           : [ 	
]+ -> skip ;
