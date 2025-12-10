import React from 'react';

interface LLMInfo {
  name: string;
  description: string;
  features: string[];
}

const llms: LLMInfo[] = [
  {
    name: "TinyLlama",
    description: "Un modelo compacto de 1.1 billones de parámetros. Diseñado para ser extremadamente eficiente y ejecutable en hardware con recursos limitados.",
    features: ["Arquitectura optimizada", "1.1B Parámetros", "Alta velocidad de inferencia", "Ideal para pruebas rápidas"]
  },
  {
    name: "Mistral-Nemo",
    description: "Un modelo de 12 billones de parámetros desarrollado en colaboración entre Mistral AI y NVIDIA. Ofrece un rendimiento de clase empresarial en un tamaño manejable.",
    features: ["Ventana de contexto de 128k", "Optimizado para razonamiento", "Gran capacidad multilingüe", "Equilibrio costo-rendimiento"]
  },
  {
    name: "DeepSeek-V3",
    description: "La última iteración de la serie DeepSeek. Un modelo potente que utiliza arquitectura Mixture-of-Experts (MoE) para competir con modelos propietarios de alto nivel, se usara una version en linea debido a las limitaciones de hardware.",
    features: ["Especialista en Código (Coding)", "Arquitectura MoE", "Alto razonamiento lógico", "Eficiencia en entrenamiento", "Requiere más recursos computacionales"]
  },
  {
    name: "BGE-M3",
    description: "Un modelo de embeddings diseñado para recuperación semántica, clasificación y búsqueda, pero NO es un modelo generativo. No produce código Java ni ningún tipo de texto.",
    features: [
      "Soporte Multi-Lingüe",
      "Multi-Funcionalidad",
      "Multi-Granularidad",
      "Alta precisión semántica",
      "No genera código Java (devuelve vectores numéricos)",
      "No puede ser analizado con el compilador ANTLR"
    ]
  },
  {
    name: "Llama 3.3",
    description: "La evolución más reciente de la familia Llama de Meta. Introduce mejoras significativas en instrucción y generación de código complejo, se usara una version en liena debido a las limitaciones de hardware.",
    features: ["Estado del arte en Open Source", "Seguridad mejorada", "Capacidad de razonamiento superior", "Excelente comprensión de instrucciones", "Requiere más recursos computacionales"]
  }
];


export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-blue-600 selection:text-white font-sans">
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Generación Automática de Código
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Análisis comparativo de LLMs utilizando gramáticas Java modificadas con ANTLR y Ollama.
          </p>

          <div className="flex justify-center">
            <div className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700">
              🏫 Instituto Tecnológico de Morelia
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-500 pl-4">
            Elaborado por:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Sosa Santiago Sebastian Asis",
              "Moisés Alejandro Tovar Pantoja",
              "González Sosa Carlos Alberto"
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors shadow-lg shadow-gray-100 group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-blue-600 text-xl font-bold">{member.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{member}</h3>
                <p className="text-gray-500 text-sm">Ingeniería en Sistemas Computacionales</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
              Objetivo del Proyecto
            </h2>
            <div className="prose text-gray-700 space-y-4">
              <p>
                El objetivo es integrar 5 modelos LLM en el entorno <strong>Ollama</strong> y evaluar su capacidad para generar código Java.
              </p>
              <p>
                Se utiliza la gramática <code>JavaParser.g4</code> (modificada de ANTLR Lab) para construir un compilador capaz de analizar el código generado y extraer estadísticas métricas específicas:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Número de Clases</li>
                <li>Número de Métodos</li>
                <li>Número de Atributos</li>
                <li>Número de Asignaciones</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Flujo de Trabajo</h3>
            <ol className="relative border-l border-gray-300 ml-3 space-y-6">
              <li className="mb-2 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-100 rounded-full -left-3 ring-4 ring-white">
                  <span className="text-teal-600 text-xs">1</span>
                </span>
                <h4 className="font-medium text-gray-900">Diseño de Prompts</h4>
                <p className="text-sm text-gray-600">Se diseñaron 5 prompts específicos para generación de código (Se usarán los Prompts en Inglés pero se pueden consultar en Español para fines informativos).</p>
              </li>
              <li className="mb-2 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white">
                  <span className="text-blue-600 text-xs">2</span>
                </span>
                <h4 className="font-medium text-gray-900">Generación con LLMs</h4>
                <p className="text-sm text-gray-600">Cada modelo (Tinyllama, Mistral, etc.) genera código para cada prompt.</p>
              </li>
              <li className="mb-2 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -left-3 ring-4 ring-white">
                  <span className="text-purple-600 text-xs">3</span>
                </span>
                <h4 className="font-medium text-gray-900">Análisis con Compilador</h4>
                <p className="text-sm text-gray-600">El compilador propio ("tuneado") analiza los bloques de código resultantes.</p>
              </li>
              <li className="mb-2 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -left-3 ring-4 ring-white">
                  <span className="text-orange-600 text-xs">4</span>
                </span>
                <h4 className="font-medium text-gray-900">Documentación</h4>
                <p className="text-sm text-gray-600">Reporte con código, pantallazos de compilación y tablas comparativas.</p>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-purple-500 pl-4">
            Modelos LLM Seleccionados
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {llms.map((model, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-400 transition-all group shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {model.name}
                  </h3>
                  <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded border border-gray-300">Ollama</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 h-20 overflow-y-auto">
                  {model.description}
                </p>
                <div className="space-y-2">
                  {model.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-gray-200 bg-white py-8 text-center">
        <p className="text-gray-500 text-sm">
          Proyecto U3 Optimización - Generación de Código Con LLMs
        </p>
      </footer>
    </div>
  );
}