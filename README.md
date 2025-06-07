# Analizador Sintáctico

Este proyecto utiliza ANTLR4 con JavaScript para analizar un mini-lenguaje que incluye instrucciones como `repetir`, `imprimir`, y `salir`.

## Requisitos

- Node.js
- Java
- ANTLR 4.13.2
- Visual Studio Code

## Instrucciones para correr

1. Generar los archivos ANTLR:
```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -o generated Lenguaje.g4
```

2. Instalar dependencias:
```bash
npm install antlr4
```

3. Ejecutar:
```bash
node index.js
```

## Archivos de prueba

- `input.txt`: ejemplo válido
- `ejemplo_valido2.txt`: otro ejemplo válido
- `ejemplo_invalido1.txt`: error de sintaxis por comillas
- `ejemplo_invalido2.txt`: error por falta de punto y coma
