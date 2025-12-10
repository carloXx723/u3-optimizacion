import React from 'react';
import {
    ClipboardDocumentCheckIcon,
    TableCellsIcon,
    CodeBracketIcon,
    CalculatorIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';

// --- CONFIGURACIÓN DE DATOS (PROMPT 1) ---
const models = [
    {
        id: "tinyllama",
        name: "TinyLlama",
        badge: "Modelo 1",
        color: "blue",
        metrics: { classes: 1, methods: 4, attributes: 0, assignments: 5, compiles: "Compilación Exitosa" },
        image: "/img/prompt1_modelo1.png",
        code: `import java.util.Random;
import java.util.Scanner;

public class Prompt1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Define the range of integers to be generated
        int min = 1;
        int max = 1000;

        System.out.print("Enter the lower bound of the random integer distribution: ");
        if (!input.hasNextInt()) {
            System.out.println("Invalid input, please enter an integer.");
            return;
        }
        while (min > input.nextInt()) {
            min = input.nextInt();
        }

        System.out.print("Enter the upper bound of the random integer distribution: ");
        if (!input.hasNextInt()) {
            System.out.println("Invalid input, please enter an integer.");
            return;
        }
        while (max < input.nextInt()) {
            max = input.nextInt();
        }

        // Generate random integers using the range defined above
        Random rand = new Random();
        int[] array = new int[200];
        for (int I = 0; I < array.length; i++) {
            int randomNum = rand.nextInt(max - min + 1) + min; // Generate a random integer between min and max
            array[i] = randomNum; // Save the generated integer in the array
        }

        // Calculate the mode
        int mode = getMode(array);

        // Calculate the median
        double median = getMedian(array);

        // Print the 200 generated integers to the console
        for (int I = 0; I < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();

        // Calculate and print the mode using the formula: Mode = average of all unique values divided by (number of unique values - 1)
        double modeAvg = getModeAvg(array);
        System.out.printf("Mode is %.2f\n", modeAvg * (array.length - 1)); // Format the result to two decimal places

        // Calculate and print the median using the formula: Median = average of all unique values divided by number of unique values
        double medianAvg = getMedianAvg(array);
        System.out.printf("Median is %.2f\n", medianAvg * array.length); // Format the result to two decimal places

        input.close();
    }

    // ... (Resto del código de TinyLlama) ...
}`
    },
    {
        id: "mistral",
        name: "Mistral-Nemo",
        badge: "Modelo 2",
        color: "indigo",
        metrics: { classes: 1, methods: 1, attributes: 0, assignments: 6, compiles: "Compilación Exitosa" },
        image: "/img/prompt1_modelo2.png",
        code: `import java.util.*;

public class Prompt1 {
    public static void main(String[] args) {
        int[] arr = new int[200];
        Random rand = new Random();

        // Fill array with random integers between 1 and 1000
        for (int i = 0; i < 200; i++) {
            arr[i] = rand.nextInt(1000) + 1;
        }

        // Print the 200 values to the console
        System.out.println("Array elements:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Calculate and print mode
        Map<Integer, Integer> freqMap = new HashMap<>();
        int maxFreq = 0;
        int mode = -1;

        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
            if (freqMap.get(num) > maxFreq) {
                maxFreq = freqMap.get(num);
                mode = num;
            }
        }

        System.out.printf("Mode: %d%n", mode);

        // Calculate and print median
        Arrays.sort(arr);
        int midIndex = arr.length / 2;

        double median;
        if (arr.length % 2 == 0) {
            median = ((double) arr[midIndex - 1] + (double) arr[midIndex]) / 2;
        } else {
            median = (double) arr[midIndex];
        }

        System.out.printf("Median: %.2f%n", median);

        // Calculate and print mean
        double sum = 0;
        for (int num : arr) {
            sum += num;
        }
        double mean = sum / arr.length;

        System.out.printf("Mean: %.2f%n", mean);
    }
}
`
    },
    {
        id: "deepseek",
        name: "DeepSeek-V3",
        badge: "Modelo 3",
        color: "purple",
        metrics: { classes: 1, methods: 5, attributes: 0, assignments: 13, compiles: "Compilación Exitosa" },
        image: "/img/prompt1_modelo3.png",
        code: `import java.util.Arrays;
import java.util.Random;
import java.util.HashMap;
import java.util.Map;

public class Prompt1 {
    public static void main(String[] args) {
        // Create array with 200 random integers between 1 and 1000
        int[] numbers = new int[200];
        Random random = new Random();
        
        // Fill array with random values
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = random.nextInt(1000) + 1; // 1-1000 inclusive
        }
        
        // Print all 200 values
        System.out.println("Generated 200 random integers (1-1000):");
        System.out.println("========================================");
        for (int i = 0; i < numbers.length; i++) {
            System.out.printf("%4d", numbers[i]);
            // Print 10 numbers per line for better readability
            if ((i + 1) % 10 == 0) {
                System.out.println();
            }
        }
        System.out.println("\n");
        
        // Calculate and print mean
        double mean = calculateMean(numbers);
        System.out.printf("Mean: %.2f%n", mean);
        
        // Calculate and print median
        double median = calculateMedian(numbers);
        System.out.printf("Median: %.1f%n", median);
        
        // Calculate and print mode
        int mode = calculateMode(numbers);
        System.out.println("Mode: " + mode);
    }
    
    // Method to calculate the mean (average)
    public static double calculateMean(int[] arr) {
        long sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return (double) sum / arr.length;
    }
    
    // Method to calculate the median
    public static double calculateMedian(int[] arr) {
        // Create a copy to avoid modifying the original array
        int[] sortedArr = arr.clone();
        Arrays.sort(sortedArr);
        
        int length = sortedArr.length;
        if (length % 2 == 0) {
            // Even number of elements: average of two middle elements
            int mid1 = sortedArr[length / 2 - 1];
            int mid2 = sortedArr[length / 2];
            return (mid1 + mid2) / 2.0;
        } else {
            // Odd number of elements: middle element
            return sortedArr[length / 2];
        }
    }
    
    // Method to calculate the mode (most frequent value)
    public static int calculateMode(int[] arr) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        
        // Count frequency of each number
        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Find the number with the highest frequency
        int mode = arr[0];
        int maxFrequency = 0;
        
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() > maxFrequency) {
                maxFrequency = entry.getValue();
                mode = entry.getKey();
            }
            // If there's a tie, choose the smaller number
            else if (entry.getValue() == maxFrequency && entry.getKey() < mode) {
                mode = entry.getKey();
            }
        }
        
        return mode;
    }
}
`
    },
    {
        id: "bgem3",
        name: "BGE-M3",
        badge: "Modelo 4",
        color: "teal",
        metrics: { classes: 0, methods: 0, attributes: 0, assignments: 0, compiles: "Pendiente" },
        image: "/img/prompt1_modelo4.png",
        code: `[-0.054033414,0.025111003,-0.035619672,-0.0069709914,-0.009413174,0.008719362,
-0.015164624,0.006458623,-0.0037928564,-0.03529834,-0.0521333,0.045289226,-0.016350586, 
0.034970094,0.011638906,-0.025463343,-0.0014211435,0.009360894,0.02452093,0.0016920327,-0.033342596,0.002884327,
        0.005494508,0.010312366,-0.023784265,0.014078239,0.03309888,0.04043619,0.035597086,0.00920535,0.008813096,-0.009722914,
        -0.025661679,0.05255378,0.011281034,-0.03102111,-0.019839693,0.022472782,-0.049190693,-0.05086245,-0.040534627,
        -0.036088098,0.071767986,-0.041108683,0.0034465587,0.012610581,0.03023598,-0.027321102,0.019347817,-0.0875246,
        -0.018451829,-0.008726411,-0.013851983,-0.023767054,-0.04716243,0.065141045,-0.015326207,-0.04387493,0.011471414
        ,0.035379626,-0.07959127,0.05773199,-0.012716631,-0.017909544,-0.009960344,0.0159457,0.05504816,0.028523866,
        -0.020496536,-0.018351264,0.0003652771,-0.030658297,0.011311837,0.04319145,0.04422392,0.008128439,0.04471694,
        -0.016078837,0.043392364,0.022571351,0.0005347074,-0.001818942,0.03214835,-0.024267966,-0.0473621,0.04697261,
        0.02659041,0.017830813,-0.0011683697,0.018906185,0.008535298,0.0036076498,0.021809958,-0.0048159133,-0.057142578,
        -0.018989203,-0.0068644267,-0.007649582,0.0021380936,-0.021027748,0.0015112731,-0.0005730644,0.022214876,0.0075597893, ...`
    },
    {
        id: "llama33",
        name: "Llama 3.3",
        badge: "Modelo 5",
        color: "orange",
        metrics: { classes: 1, methods: 4, attributes: 0, assignments: 5, compiles: "Compilación Exitosa" },
        image: "/img/prompt1_modelo5.png",
        code: `import java.util.Arrays;
import java.util.Random;

public class Prompt1 {
    public static void main(String[] args) {
        // Initialize variables
        int[] array = new int[200];
        Random random = new Random();

        // Fill the array with random values
        for (int i = 0; i < array.length; i++) {
            array[i] = random.nextInt(1000) + 1; // Generate random numbers between 1 and 1000
        }

        // Print the array
        System.out.println("Generated Array:");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
            if ((i + 1) % 20 == 0) {
                System.out.println();
            }
        }

        // Calculate and print the mode
        int mode = calculateMode(array);
        System.out.println("\nMode: " + mode);

        // Calculate and print the median
        double median = calculateMedian(array);
        System.out.println("Median: " + median);

        // Calculate and print the mean
        double mean = calculateMean(array);
        System.out.println("Mean: " + mean);
    }

    /**
     * Calculates the mode of the given array.
     * If there are multiple modes, this method returns the smallest one.
     *
     * @param array the input array
     * @return the mode of the array
     */
    public static int calculateMode(int[] array) {
        int maxCount = 0;
        int mode = array[0];

        for (int i = 0; i < array.length; i++) {
            int count = 0;
            for (int j = 0; j < array.length; j++) {
                if (array[i] == array[j]) {
                    count++;
                }
            }
            if (count > maxCount) {
                maxCount = count;
                mode = array[i];
            } else if (count == maxCount && array[i] < mode) {
                mode = array[i];
            }
        }

        return mode;
    }

    /**
     * Calculates the median of the given array.
     *
     * @param array the input array
     * @return the median of the array
     */
    public static double calculateMedian(int[] array) {
        Arrays.sort(array);
        int n = array.length;

        if (n % 2 == 0) {
            return (array[n / 2 - 1] + array[n / 2]) / 2.0;
        } else {
            return array[n / 2];
        }
    }

    /**
     * Calculates the mean of the given array.
     *
     * @param array the input array
     * @return the mean of the array
     */
    public static double calculateMean(int[] array) {
        double sum = 0;
        for (int value : array) {
            sum += value;
        }
        return sum / array.length;
    }
}`
    }
];

export default function Prompt1Page() {

    // Función auxiliar para verificar si compila (flexibilidad en el texto)
    const checkCompilation = (status: string) => {
        const s = status.toLowerCase();
        return s === "sí" || s === "si" || s === "yes" || s.includes("exitosa");
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-600 selection:text-white">

            {/* --- HEADER --- */}
            <header className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Prompt 1
                    </h1>
                    <p className="text-lg text-gray-600">
                        Cálculo de Moda, Media y Mediana
                    </p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">

                {/* --- SECTION 1: THE PROMPT --- */}
                <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ClipboardDocumentCheckIcon className="w-5 h-5 text-gray-600" />
                            <h2 className="font-semibold text-gray-800">Prompt Utilizado</h2>
                        </div>
                        <span className="text-xs text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded">
                            Input Natural Language
                        </span>
                    </div>

                    <div className="p-6 grid md:grid-cols-2 gap-8">
                        {/* Español */}
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Versión en Español</h3>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 font-mono leading-relaxed">
                                <p>
                                    Genera un programa en java, el cual debe llenar un arreglo de enteros con 200 valores enteros aleatorios.
                                    Los valores aleatorios deben estar en el rango de 1 a 1000.
                                    El programa debe imprimir los 200 valores en consola, calcular la moda e imprimirla,
                                    calcular la mediana e imprimirla, calcular la media e imprimirla.
                                    El programa generado debe estar contenido en un solo archivo con nombre Prompt1.java
                                </p>
                            </div>
                        </div>

                        {/* Inglés */}
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">English Version</h3>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 font-mono leading-relaxed italic">
                                <p>
                                    Write a Java program that fills an array of integers with 200 random integer values.
                                    The random values must be in the range of 1 to 1000.
                                    The program should print the 200 values to the console, calculate and print the mode,
                                    calculate and print the median, and calculate and print the mean.
                                    The generated program must be contained in a single file named Prompt1.java
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: METRICS TABLE --- */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-2 bg-teal-100 rounded-lg">
                            <TableCellsIcon className="w-6 h-6 text-teal-700" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Tabla Comparativa de Métricas</h2>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200 uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4">Modelo LLM</th>
                                    <th className="px-6 py-4 text-center">Clases</th>
                                    <th className="px-6 py-4 text-center">Métodos</th>
                                    <th className="px-6 py-4 text-center">Atributos</th>
                                    <th className="px-6 py-4 text-center">Asignaciones</th>
                                    <th className="px-6 py-4 text-center">Compila</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {models.map((model, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-gray-800">{model.name}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{model.metrics.classes}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{model.metrics.methods}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{model.metrics.attributes}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{model.metrics.assignments}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                checkCompilation(model.metrics.compiles)
                                                ? "bg-green-100 text-green-700 border border-green-200" 
                                                : "bg-gray-100 text-gray-500 border border-gray-200"
                                            }`}>
                                                {model.metrics.compiles}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-3 text-xs text-gray-500 text-right">
                        * Datos obtenidos mediante el compilador modificado con ANTLR4
                    </p>
                </section>

                {/* --- SECTION 3: DETAILED RESULTS --- */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                            <CodeBracketIcon className="w-6 h-6 text-indigo-700" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Resultados Detallados</h2>
                    </div>

                    <div className="grid gap-8">
                        {models.map((model) => (
                            <div key={model.id} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition-all hover:shadow-md">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-bold text-gray-900">{model.name}</h3>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
                                        {model.badge}
                                    </span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* --- Área de Código (Con Scroll) --- */}
                                    <div className="bg-slate-900 rounded-lg p-4 relative group">
                                        <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
                                            <p className="text-gray-400 text-xs">Prompt1.java</p>
                                            <span className="text-[10px] text-gray-500">{model.name} Output</span>
                                        </div>
                                        {/* SCROLL ACTIVADO AQUÍ */}
                                        <pre className="text-xs text-green-400 font-mono min-h-[200px] max-h-[500px] overflow-y-auto overflow-x-auto whitespace-pre">
                                            {model.code}
                                        </pre>
                                    </div>

                                    {/* --- Área de Ejecución / Compilación --- */}
                                    <div className="space-y-4">
                                        
                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                                <CalculatorIcon className="w-4 h-4" />
                                                Salida del Compilador
                                            </h4>
                                            <div className="text-xs text-gray-600 font-mono space-y-1">
                                                <p>Analizando archivo...</p>
                                                <div className="grid grid-cols-2 gap-x-4">
                                                    <p>Clases: <span className="font-bold">{model.metrics.classes}</span></p>
                                                    <p>Métodos: <span className="font-bold">{model.metrics.methods}</span></p>
                                                    <p>Atributos: <span className="font-bold">{model.metrics.attributes}</span></p>
                                                    <p>Asignaciones: <span className="font-bold">{model.metrics.assignments}</span></p>
                                                </div>
                                                {/* ESTADO CON CONDICIONAL DE COLOR */}
                                                <p className={`italic mt-2 border-t border-gray-200 pt-1 ${
                                                    checkCompilation(model.metrics.compiles) ? "text-gray-400 italic mt-2 border-t border-gray-200 pt-1" : "text-gray-400"
                                                }`}>
                                                    Estado: {model.metrics.compiles}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Imagen / Pantallazo */}
                                        <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                                            {model.image ? (
                                                <img 
                                                    src={model.image} 
                                                    alt={`Captura de ${model.name}`} 
                                                    className="w-full h-full object-contain"
                                                />
                                            ) : (
                                                <div className="text-center p-4 cursor-pointer">
                                                    <PhotoIcon className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                                                    <span className="text-gray-400 text-sm font-medium">Captura de Pantalla</span>
                                                    <span className="text-gray-300 text-xs mt-1 block">(Sin imagen asignada)</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
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