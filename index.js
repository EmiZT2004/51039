const antlr4 = require('antlr4');
const fs = require('fs');
const { CharStreams, CommonTokenStream } = antlr4;

const LenguajeLexer = require('./generated/LenguajeLexer').LenguajeLexer;
const LenguajeParser = require('./generated/LenguajeParser').LenguajeParser;
const LenguajeVisitor = require('./generated/LenguajeVisitor').LenguajeVisitor;

class MiVisitor extends LenguajeVisitor {
  visitPrograma(ctx) {
    return ctx.instruccion().map(i => this.visit(i));
  }

  visitInstruccion(ctx) {
    return this.visit(ctx.repeticion());
  }

  visitRepeticion(ctx) {
    const sentencias = ctx.sentencia().map(s => this.visit(s));
    const condicion = ctx.condicion().getText();
    console.log("Ejecutando bloque hasta que sea:", condicion);
    sentencias.forEach(s => console.log(" -", s));
  }

  visitSentencia(ctx) {
    if (ctx.salida()) return this.visit(ctx.salida());
    if (ctx.terminar()) return this.visit(ctx.terminar());
  }

  visitSalida(ctx) {
    const texto = ctx.cadena().getText();
    return `IMPRIMIR: ${texto}`;
  }

  visitTerminar(ctx) {
    return "SALIR";
  }
}

function main() {
  const input = fs.readFileSync('input.txt', 'utf8');
  const chars = CharStreams.fromString(input);
  const lexer = new LenguajeLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new LenguajeParser(tokens);

  const tree = parser.programa();
  if (parser._syntaxErrors > 0) {
    console.error("Errores de sintaxis encontrados.");
    return;
  }

  const visitor = new MiVisitor();
  visitor.visit(tree);
}

main();
