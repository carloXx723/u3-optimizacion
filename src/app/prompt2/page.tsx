import React from 'react';
import {
    ClipboardDocumentCheckIcon,
    TableCellsIcon,
    CodeBracketIcon,
    CalculatorIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';

// --- CONFIGURACIÓN DE DATOS (PROMPT 2) ---
const models = [
    {
        id: "tinyllama",
        name: "TinyLlama",
        badge: "Modelo 1",
        color: "blue",
        metrics: { classes: 1, methods: 3, attributes: 0, assignments: 2, compiles: "Compilacion Exitosa" },
        image: "/img/prompt2_modelo1.png", 
        code: `import java.util.Random;

public class Prompt2 {
    public static void main(String[] args) {
        Random rand = new Random(); // initialize random generator with seed

        int n = Integer.parseInt(System.console().readLine("Enter the number of elements you want to generate:
"));
        int[] arr = new int[n];
        for (int I = 0; I < n; i++) {
            Random rand = new Random(); // initialize random generator with seed
            int min = rand.nextInt(1000) + 1; // generate range from 1 to 1000
            int max = min + rand.nextInt(200); // add 200 for the rest of the values

            if (min > 1 || max > n) { // check if values are within array bounds
                System.out.println("Invalid input: Array contains only integers between 1 and " + (n - 1) + ", not
" + min + "-" + max);
                System.exit(0);
            }

            arr[i] = rand.nextInt(max - min + 1) + min; // generate random elements
        }

        // sort array using quicksort method
        int[] sortedArr = sortArr(arr, n);

        System.out.println("Sorted array:");
        for (int I : sortedArr) {
            System.out.print(i + " ");
        }
    }

    private static int[] sortArr(int[] arr, int n) {
        Quicksort quick = new Quicksort(); // create instance of Quicksort class

        quick.partition(arr, 0, n - 1); // partition array using quicksort method

        return quick.getSortedArray(); // get sorted array from the instance
    }

    private static int[] getArr() {
        Random rand = new Random();
        int n = 5; // number of elements to generate

        int[] arr = new int[n];
        for (int I = 0; I < n; i++) {
            Random rand = new Random();
            arr[i] = rand.nextInt(1000) + 1; // generate random values within range
        }

        return arr;
    }
}


`
    },
    {
        id: "mistral",
        name: "Mistral-Nemo",
        badge: "Modelo 2",
        color: "indigo",
        metrics: { classes: 1, methods: 5, attributes: 0, assignments: 3, compiles: "Compilacion Exitosa" },
        image: "/img/prompt2_modelo2.png",
        code: `import java.util.Arrays;
import java.util.Random;

public class Prompt2 {
    public static void main(String[] args) {
        final int SIZE = 200;
        int[] arr = new int[SIZE];

        Random random = new Random();
        for (int i = 0; i < SIZE; i++) {
            arr[i] = random.nextInt(1, 1001);
        }

        System.out.println("Original Array:");
        printArray(arr);

        quickSort(arr, 0, SIZE - 1);

        System.out.println("\nSorted Array:");
        printArray(arr);
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);
        return i + 1;
    }

    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }
}

`
    },
    {
        id: "deepseek",
        name: "DeepSeek-V3",
        badge: "Modelo 3",
        color: "purple",
        metrics: { classes: 1, methods: 5, attributes: 0, assignments: 5, compiles: "Compilación Exitosa" },
        image: "/img/prompt2_modelo3.png",
        code: `import java.util.Random;

public class Prompt2 {
    
    public static void main(String[] args) {
        // Create array with 200 random integers between 1 and 1000
        int[] numbers = new int[200];
        Random random = new Random();
        
        // Fill array with random values
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = random.nextInt(1000) + 1; // 1-1000 inclusive
        }
        
        System.out.println("Original array (unsorted):");
        System.out.println("===========================");
        printArray(numbers);
        
        // Sort the array using quicksort
        quickSort(numbers, 0, numbers.length - 1);
        
        System.out.println("\nSorted array using quicksort:");
        System.out.println("==============================");
        printArray(numbers);
        
        // Verify the array is sorted
        System.out.println("\nArray is sorted: " + isSorted(numbers));
    }
    
    // Quicksort implementation
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // Partition the array and get the pivot index
            int pivotIndex = partition(arr, low, high);
            
            // Recursively sort elements before and after partition
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }
    
    // Partition method for quicksort
    private static int partition(int[] arr, int low, int high) {
        // Choose the rightmost element as pivot
        int pivot = arr[high];
        
        // Index of smaller element
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            // If current element is smaller than or equal to pivot
            if (arr[j] <= pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Swap arr[i+1] and arr[high] (or pivot)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1;
    }
    
    // Utility method to print the array
    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.printf("%4d", arr[i]);
            // Print 10 numbers per line for better readability
            if ((i + 1) % 10 == 0) {
                System.out.println();
            }
        }
        // Add newline if the last line wasn't complete
        if (arr.length % 10 != 0) {
            System.out.println();
        }
    }
    
    // Utility method to verify if array is sorted
    public static boolean isSorted(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
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
        image: "/img/prompt2_modelo4.png", 
        code: `[-0.07420411,0.02040203,-0.0027331577,0.0060475557,-0.004127269,0.0078077805,-0.025346214,-0.0067267874,-0.004865362,-0.021036305,
        -0.039881177,0.05282981,-0.017187638,-0.026995787,-0.016298724,0.0036884397,-0.0049105915,0.042379968,-0.010913513,-0.009131759,0.0012730717,
        0.010825484,-0.022834038,0.01791471,-0.016328763,0.004506486,0.00092492363,-0.0048356755,0.012498992,-0.0300613,-0.0006730573,0.011443699,
        -0.0055236523,-0.038985964,-0.043918893,0.038872354,-0.041663345,-0.016658211,-0.025628984,0.011645706,-0.036007825,0.032411896,0.024071451,
        -0.0058173304,-0.03143734,0.017103625,-0.00185961,-0.040341083,-0.005944264,-0.015252147,-0.01738191,0.03002754,0.05184401,-0.08181589,0.025283303
        0.010245109,-0.009189825,0.01768179,-0.084295966,0.0037703454,0.019104036,0.057505198,-0.059142135,0.03615555,0.03911423,0.035577573,-0.0084727425
        ,0.032584116,-0.005809887,0.028928386,0.0016455756,0.021612298,-0.030071788,0.001698545,-0.07342852,0.022242505,0.04510528,0.007365301,-0.092237175,
        0.024144402,0.032201983,-0.01418976,-0.030370973,0.02748604,-0.037648454,0.023813205,0.018051216,0.041580427,-0.005625008,0.002144558,-0.012901553
        0.0075800484,0.027638787,-0.05249452,-0.028668385,0.01756668,-0.024710316,0.006273245,0.022024095,0.008555056,-0.0353938,0.005596855,-0.0131209055,
        0.04573047,0.020093024,-0.004434958,0.015188235,-0.001212233,-0.001981094,-0.02074546,0.030536428,0.011975703,0.065496065,-0.009433853,0.008097485,-
        .008115368,-0.008896588,-0.023758186,0.050084688,0.0068796477,-0.025679266,0.04499581,0.03829566,-0.04591421,-0.034704603,-0.048596032,-0.04109757,
        0.058064543,-0.010149006,-0.039822593,0.019360814,0.050852142,-0.004185735,0.04511931,-0.065194614,-0.021014515,-0.008141355,-0.004581769,-0.011742986,
        -0.052012857,0.04316843,0.0060711894,-0.023327602,0.017262412,0.024109833,-0.08047237,0.041557346,-0.02654228,-0.010034652,-0.0190581...`
    },
    {
        id: "llama33",
        name: "Llama 3.3",
        badge: "Modelo 5",
        color: "orange",
        metrics: { classes: 1, methods: 5, attributes: 0, assignments: 3, compiles: "Compilación Exitosa" },
        image: "/img/prompt2_modelo5.png",
        code: `import java.util.Random;

public class Prompt2 {
    public static void main(String[] args) {
        // Initialize variables
        int[] array = new int[200];
        Random random = new Random();

        // Fill the array with random values
        for (int i = 0; i < array.length; i++) {
            array[i] = random.nextInt(1000) + 1; // Generate random numbers between 1 and 1000
        }

        // Print the unsorted array
        System.out.println("Unsorted Array:");
        printArray(array);

        // Sort the array using quicksort
        quicksort(array, 0, array.length - 1);

        // Print the sorted array
        System.out.println("Sorted Array:");
        printArray(array);
    }

    /**
     * Prints the given array.
     *
     * @param array the input array
     */
    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
            if ((i + 1) % 20 == 0) {
                System.out.println();
            }
        }
        System.out.println();
    }

    /**
     * Swaps two elements in the given array.
     *
     * @param array the input array
     * @param i     the index of the first element
     * @param j     the index of the second element
     */
    public static void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    /**
     * Partitions the given array around a pivot element.
     *
     * @param array the input array
     * @param low   the low index
     * @param high  the high index
     * @return the index of the pivot element
     */
    public static int partition(int[] array, int low, int high) {
        int pivot = array[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                swap(array, i, j);
            }
        }

        swap(array, i + 1, high);
        return i + 1;
    }

    /**
     * Sorts the given array using the quicksort algorithm.
     *
     * @param array the input array
     * @param low   the low index
     * @param high  the high index
     */
    public static void quicksort(int[] array, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(array, low, high);
            quicksort(array, low, pivotIndex - 1);
            quicksort(array, pivotIndex + 1, high);
        }
    }
}`
    }
];

export default function Prompt2Page() {
    
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
                        Prompt 2
                    </h1>
                    <p className="text-lg text-gray-600">
                        Ordenamiento de Arreglos (Quicksort)
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
                                    Ordena el arreglo empleando el método quicksort e imprimir el arreglo ordenado. 
                                    El programa generado debe estar contenido en un solo archivo con nombre Prompt2.java
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
                                    Sort the array using the quicksort method and print the sorted array. 
                                    The generated program must be contained in a single file named Prompt2.java
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
                                            <p className="text-gray-400 text-xs">Prompt2.java</p>
                                            <span className="text-[10px] text-gray-500">{model.name} Output</span>
                                        </div>
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