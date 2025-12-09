import React from 'react';
import {
  CloudArrowDownIcon,
  CommandLineIcon,
  FolderIcon,
  DocumentTextIcon,
  PlayIcon,
  CheckBadgeIcon,
  PencilSquareIcon,
  CodeBracketSquareIcon
} from '@heroicons/react/24/outline';

export default function CompilerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-600 selection:text-white">

      <header className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Construcción del Compilador
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Metodología paso a paso para la implementación del analizador sintáctico y conteo de métricas.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">

          {/* PASO 1 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 md:left-1/2 md:-ml-10 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-transform">
              <CloudArrowDownIcon className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Obtención de Archivos</h3>
              <p className="text-gray-600 mb-3">
                Para facilitar la reproducción del proyecto, hemos subido la gramática modificada y todos los archivos necesarios (Lexer, Parser, Main) a nuestro repositorio.
              </p>

              {/* Enlace al repositorio del proyecto */}
              <div className="mb-4">
                <a
                  href="https://github.com/carloXx723/CompiladorJava.git"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-md"
                >
                  <CodeBracketSquareIcon className="w-4 h-4 mr-2" />
                  Ver Repositorio del Proyecto
                </a>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm inline-block text-left">
                <span className="block text-xs font-semibold text-gray-500 mb-1">Archivos incluidos:</span>
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li><code>JavaLexer.g4</code></li>
                  <li><code>JavaParser.g4</code> (Modificado)</li>
                  <li><code>JavaParserBase.java</code></li>
                  <li><code>Main.java</code></li>
                </ul>
              </div>

              <div className="mt-2 text-xs text-gray-400">
                <span>Fuente original: </span>
                <a href="https://github.com/antlr/grammars-v4/tree/master/java/java" target="_blank" className="underline hover:text-blue-600">ANTLR Grammars</a>
              </div>
            </div>
          </div>

          {/* PASO 2 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 md:left-1/2 md:-ml-10 w-10 h-10 flex items-center justify-center bg-rose-100 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-transform">
              <PencilSquareIcon className="w-5 h-5 text-rose-600" />
            </div>
            <div className="ml-16 md:ml-auto md:w-1/2 md:pl-16">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Modificación de la Gramática</h3>
              <p className="text-gray-600 mb-3">
                Se editó el archivo <code className="font-bold">JavaParser.g4</code> insertando acciones semánticas (código Java) para detectar e incrementar contadores en las reglas correspondientes.
              </p>
              <div className="bg-rose-50 border border-rose-100 rounded-lg p-4">
                <h4 className="text-xs font-bold text-rose-800 uppercase mb-2">Métricas Implementadas:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span> Clases
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span> Métodos
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span> Atributos
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span> Asignaciones
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 3 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 md:left-1/2 md:-ml-10 w-10 h-10 flex items-center justify-center bg-teal-100 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-transform">
              <CommandLineIcon className="w-5 h-5 text-teal-600" />
            </div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Generación de Analizadores</h3>
              <p className="text-gray-600 mb-3">
                Ejecutar la herramienta de ANTLR v4 para generar el código fuente del Lexer y el Parser modificado.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto shadow-md text-left inline-block">
                <code className="text-sm text-green-400 font-mono">
                  &gt; java org.antlr.v4.Tool JavaLexer.g4<br />
                  &gt; java org.antlr.v4.Tool JavaParser.g4
                </code>
              </div>
            </div>
          </div>

          {/* PASO 4 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 md:left-1/2 md:-ml-10 w-10 h-10 flex items-center justify-center bg-orange-100 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-transform">
              <FolderIcon className="w-5 h-5 text-orange-600" />
            </div>
            <div className="ml-16 md:ml-auto md:w-1/2 md:pl-16">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Organización de Archivos</h3>
              <p className="text-gray-600">
                Verificar que <span className="font-semibold text-gray-800">JavaParserBase.java</span> esté en el mismo directorio que los archivos generados (.java y .tokens) para asegurar la correcta compilación de las dependencias.
              </p>
            </div>
          </div>

          {/* PASO 5 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 md:left-1/2 md:-ml-10 w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-transform">
              <DocumentTextIcon className="w-5 h-5 text-purple-600" />
            </div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Creación del Driver (Main.java)</h3>
              <p className="text-gray-600 mb-3">
                Crear la clase principal que conecta el Lexer y el Parser e inicia el recorrido del árbol.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto shadow-md text-left inline-block w-full">
                <pre className="text-xs text-gray-300 font-mono leading-relaxed">
                  {`import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.*;  

public class Main {
    public static void main(String[] args) throws Exception {

        CharStream input = CharStreams.fromFileName("input.txt");

        JavaLexer lexer = new JavaLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        JavaParser parser = new JavaParser(tokens);

        parser.compilationUnit(); 
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* PASO 6 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 md:left-1/2 md:-ml-10 w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-transform">
              <PlayIcon className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="ml-16 md:ml-auto md:w-1/2 md:pl-16">
              <h3 className="text-xl font-bold text-gray-900 mb-2">6. Integración y Compilación</h3>
              <p className="text-gray-600 mb-3">
                Compilar todos los archivos Java generados y el Main.
              </p>
              <div className="bg-slate-900 rounded-lg p-3 inline-block shadow-md">
                <code className="text-sm text-green-400 font-mono">
                  &gt; javac Main.java
                </code>
              </div>
            </div>
          </div>

          {/* PASO 7 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 md:left-1/2 md:-ml-10 w-10 h-10 flex items-center justify-center bg-green-100 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-transform">
              <CheckBadgeIcon className="w-5 h-5 text-green-600" />
            </div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <h3 className="text-xl font-bold text-gray-900 mb-2">7. Prueba y Ejecución</h3>
              <p className="text-gray-600 mb-4">
                Se crea el archivo <code>input.txt</code> con el código generado por los LLMs y se ejecuta el compilador para obtener los conteos.
              </p>

              <div className="bg-slate-900 rounded-lg p-3 shadow-md inline-block text-left w-full md:w-auto">
                <span className="block text-xs text-gray-500 mb-1 border-b border-gray-700 pb-1">Terminal</span>
                <code className="text-sm text-green-400 font-mono">
                  &gt; java Main
                </code>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center">
        <p className="text-gray-500 text-sm">
          Proyecto U3 Optimización - Generación de Código Con LLMs        </p>
      </footer>
    </div>
  );
}