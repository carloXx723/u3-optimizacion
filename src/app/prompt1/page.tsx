import React from 'react';
import {
    ClipboardDocumentCheckIcon,
    TableCellsIcon,
    CodeBracketIcon,
    CalculatorIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';

// --- CONFIGURACIÓN DE DATOS ---
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

    /**
     * Calculate the mode of an array of integers using the Fisher-Yates shuffle method. The method returns the mode as the first element of the array, or null if the array is empty.
     * @param arr An array of integers.
     * @return The mode of the array.
     */
    private static int getMode(int[] arr) {
        if (arr.length == 0) return null; // If the array is empty, there's no mode

        Random rand = new Random();
        int randomIndex = rand.nextInt(arr.length); // Choose a random index in the array and update its position with that random value
        int mode = arr[randomIndex]; // Save the randomly selected element as the mode

        for (int I = 0; I < arr.length - 1; i++) {
            int nextRandomIndex = rand.nextInt(arr.length); // Choose a random index between i and arr.length-1, in the same way as above
            int temp = arr[i]; // Save the element at the current index for comparison with the randomly selected element at the new index
            if (array[nextRandomIndex] < temp) { // If the randomly selected element is smaller than the next one, swap them
                arr[nextRandomIndex] = temp;
                array[i] = temp;
            }
        }

        return mode;
    }

    /**
     * Calculate the Fisher-Yates shuffle method's average and variance. The method returns a randomized array, but it assumes that each element is already selected with probability 1/n.
     * @param arr An array of integers to be randomized.
     * @return A new array of integers with the Fisher-Yates method applied.
     */
    private static int[] getFisherYates(int[] arr) {
        Random rand = new Random(); // Create a new Random object for the Fisher-Yates algorithm

        int n = arr.length; // Calculate the number of elements in the array

        int[] sortedArr = new int[n]; // Allocate an array of integers to store the sorted array

        for (int I = 0; i < n; i++) { // For each element, randomly choose a position and select its value
            int randomIndex = rand.nextInt(n); // Choose a random index in the remaining elements with probability 1/n
            sortedArr[i] = arr[randomIndex]; // Save the randomly chosen element as the sorted element at the i-th position, in the same way as above
        }

        for (int I = 0; i < n; i++) { // For each element of the sorted array, calculate its average and variance
            int randomIndex = rand.nextInt(n); // Choose a random index in the remaining elements with probability 1/n

            double average = 0; // Initialize the average to zero

            for (int j = I - 1; j >= 0; j--) { // For each element of the array between i and the previous one, calculate its variance and add it to the average
                int randomIndex2 = rand.nextInt(n); // Choose a random index in the remaining elements with probability 1/n

                if (arr[randomIndex] != arr[randomIndex2]) { // If the randomly selected element is different from any other, add it to the average
                    double delta = arr[randomIndex] - arr[randomIndex2];

                    if (average == 0) { // Check for a zero average case
                        average += delta;
                    } else { // Otherwise, calculate the variance and update the average with it
                        average += (arr[randomIndex] - average) * (arr[randomIndex] - average);
                    }
                }
            }

            if (average != 0) {
                double variance = average / n; // Calculate the variance
                sortedArr[i] = sortedArr[i] + variance * random.nextInt(1 - variance * I); // Add a randomly selected element with its own variance to the sorted array at the i-th position
            }
        }

        return sortedArr; // Return the sorted array with Fisher-Yates shuffling applied
    }

    /**
     * Calculate the mode of an array of integers using the median method. The method returns the mode as the first element of the array, or null if the array is empty.
     * @param arr An array of integers.
     * @return The mode of the array.
     */
    private static int getModeAvg(int[] arr) {
        if (arr.length == 0) return null; // If the array is empty, there's no mode

        Random rand = new Random(); // Create a new Random object for the median method

        int n = arr.length; // Calculate the number of elements in the array

        double[] medians = new double[n]; // Allocate an array to store the median values of each element

        int[] sortedArr = getFisherYates(arr); // Get the Fisher-Yates shuffled array for the median method, as per the comments above

        for (int I = 0; I < n; i++) {
            medians[i] = getMedian(sortedArr); // Calculate and store the median of the sorted array at the i-th position
        }

        if (medians[0] == null) return null; // If there's no median in the sorted array, the mode is also null

        double median = medians[0]; // The median is the first element of the sorted array

        for (int I = 1; i < n; i++) { // For each element in the sorted array between i-1 and i-2, calculate their difference and use it to find the median
            int randomIndex2 = rand.nextInt(n - i + 1) + i; // Choose a random index in the remaining elements with probability 1/n

            double delta = medians[i] - median;

            if (delta != 0) {
                double newMedian = getMedian(sortedArr);

                if (newMedian == null) { // If the median is also null, there's no mode
                    return null;
                } else {
                    if (newMedian < median) { // If the new median is less than the current median, the current element has a lower median and we add it to the array of modes
                        medians = Arrays.copyOf(medians, n);
                        medians[n - I + 1] = median;
                    } else if (newMedian > median) { // If the new median is greater than the current median, we remove it from the array of modes and add the element to the sorted array at the i-th position
                        int startIndex = medians[n - I + 1] == newMedian ? n - 1 : medians[n - I + 1]; // Calculate the index of the element in the sorted array with the new median as its value

                        for (int j = I; j <= startIndex; j++) {
                            sortedArr[j] = medians[j];
                        }
                    }
                }
            }
        }

        return Arrays.median(medians); // Return the median of the sorted array with its mode as the first element
    }

    /**
     * Calculate the Fisher-Yates shuffle method's average case runtime complexity, which is O(n^2) for n random elements in the array. This is the worst case complexity and not guaranteed to be optimal.
     */
    private static void printRuntime() {
        System.out.println("Time: O(n^2)"); // Print the worst-case runtime complexity
    }
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

    /**
     * Calculate the mode of an array of integers using the Fisher-Yates shuffle method. The method returns the mode as the first element of the
array, or null if the array is empty.
     * @param arr An array of integers.
     * @return The mode of the array.
     */
    private static int getMode(int[] arr) {
        if (arr.length == 0) return null; // If the array is empty, there's no mode

        Random rand = new Random();
        int randomIndex = rand.nextInt(arr.length); // Choose a random index in the array and update its position with that random value
        int mode = arr[randomIndex]; // Save the randomly selected element as the mode

        for (int I = 0; I < arr.length - 1; i++) {
            int nextRandomIndex = rand.nextInt(arr.length); // Choose a random index between i and arr.length-1, in the same way as above
            int temp = arr[i]; // Save the element at the current index for comparison with the randomly selected element at the new index
            if (array[nextRandomIndex] < temp) { // If the randomly selected element is smaller than the next one, swap them
                arr[nextRandomIndex] = temp;
                array[i] = temp;
            }
        }

        return mode;
    }

    /**
     * Calculate the Fisher-Yates shuffle method's average and variance. The method returns a randomized array, but it assumes that each element is
already selected with probability 1/n.
     * @param arr An array of integers to be randomized.
     * @return A new array of integers with the Fisher-Yates method applied.
     */
    private static int[] getFisherYates(int[] arr) {
        Random rand = new Random(); // Create a new Random object for the Fisher-Yates algorithm

        int n = arr.length; // Calculate the number of elements in the array

        int[] sortedArr = new int[n]; // Allocate an array of integers to store the sorted array

        for (int I = 0; i < n; i++) { // For each element, randomly choose a position and select its value
            int randomIndex = rand.nextInt(n); // Choose a random index in the remaining elements with probability 1/n
            sortedArr[i] = arr[randomIndex]; // Save the randomly chosen element as the sorted element at the i-th position, in the same way as above
        }

        for (int I = 0; i < n; i++) { // For each element of the sorted array, calculate its average and variance
            int randomIndex = rand.nextInt(n); // Choose a random index in the remaining elements with probability 1/n

            double average = 0; // Initialize the average to zero

            for (int j = I - 1; j >= 0; j--) { // For each element of the array between i and the previous one, calculate its variance and add it to
the average
                int randomIndex2 = rand.nextInt(n); // Choose a random index in the remaining elements with probability 1/n

                if (arr[randomIndex] != arr[randomIndex2]) { // If the randomly selected element is different from any other, add it to the average
                    double delta = arr[randomIndex] - arr[randomIndex2];

                    if (average == 0) { // Check for a zero average case
                        average += delta;
                    } else { // Otherwise, calculate the variance and update the average with it
                        average += (arr[randomIndex] - average) * (arr[randomIndex] - average);
                    }
                }
            }

            if (average != 0) {
                double variance = average / n; // Calculate the variance
                sortedArr[i] = sortedArr[i] + variance * random.nextInt(1 - variance * I); // Add a randomly selected element with its own variance to
the sorted array at the i-th position
            }
        }

        return sortedArr; // Return the sorted array with Fisher-Yates shuffling applied
    }

    /**
     * Calculate the mode of an array of integers using the median method. The method returns the mode as the first element of the array, or null if
the array is empty.
     * @param arr An array of integers.
     * @return The mode of the array.
     */
    private static int getModeAvg(int[] arr) {
        if (arr.length == 0) return null; // If the array is empty, there's no mode

        Random rand = new Random(); // Create a new Random object for the median method

        int n = arr.length; // Calculate the number of elements in the array

        double[] medians = new double[n]; // Allocate an array to store the median values of each element

        int[] sortedArr = getFisherYates(arr); // Get the Fisher-Yates shuffled array for the median method, as per the comments above

        for (int I = 0; I < n; i++) {
            medians[i] = getMedian(sortedArr); // Calculate and store the median of the sorted array at the i-th position
        }

        if (medians[0] == null) return null; // If there's no median in the sorted array, the mode is also null

        double median = medians[0]; // The median is the first element of the sorted array

        for (int I = 1; i < n; i++) { // For each element in the sorted array between i-1 and i-2, calculate their difference and use it to find the
median
            int randomIndex2 = rand.nextInt(n - i + 1) + i; // Choose a random index in the remaining elements with probability 1/n

            double delta = medians[i] - median;

            if (delta != 0) {
                double newMedian = getMedian(sortedArr);

                if (newMedian == null) { // If the median is also null, there's no mode
                    return null;
                } else {
                    if (newMedian < median) { // If the new median is less than the current median, the current element has a lower median and we add
it to the array of modes
                        medians = Arrays.copyOf(medians, n);
                        medians[n - I + 1] = median;
                    } else if (newMedian > median) { // If the new median is greater than the current median, we remove it from the array of modes and
add the element to the sorted array at the i-th position
                        int startIndex = medians[n - I + 1] == newMedian ? n - 1 : medians[n - I + 1]; // Calculate the index of the element in the
sorted array with the new median as its value

                        for (int j = I; j <= startIndex; j++) {
                            sortedArr[j] = medians[j];
                        }
                    }
                }
            }
        }

        return Arrays.median(medians); // Return the median of the sorted array with its mode as the first element
    }

    /**
     * Calculate the Fisher-Yates shuffle method's average case runtime complexity, which is O(n^2) for n random elements in the array. This is the
worst case complexity and not guaranteed to be optimal.
     */
    private static void printRuntime() {
        System.out.println("Time: O(n^2)"); // Print the worst-case runtime complexity
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
        // ASEGÚRATE DE QUE LA CARPETA 'img' ESTÉ DENTRO DE 'public'
        image: "/img/prompt1_modelo4.png",
        code: `[-0.054033414,0.025111003,-0.035619672,-0.0069709914,-0.009413174,0.008719362,
-0.015164624,0.006458623,-0.0037928564,-0.03529834,-0.0521333,0.045289226,-0.016350586,
-0.03210082,0.0040480834,0.018934453,-0.007282004,0.03956205,0.0024350323,-0.005823932,
0.022032833,0.01606718,-0.012996086,0.00040849386,0.006178037,0.0132244,-0.011812872,
-0.036885794,0.0145734325,-0.03932164,0.00084119313,0.000045652683,0.023893863,-0.044089008,
-0.034924097,0.029432917,-0.04014345,0.0011532499,-0.026737401,0.008351286,-0.017228877,0.00006781908,
-0.00047645895,-0.00040745368,-0.033241402,0.0038854622,-0.011392728,-0.043230053,-0.0061065597,-0.015033939,
-0.012164767,0.01309528,0.07334619,-0.03976511,0.029749682,0.027854417,-0.008521548,0.014715721,-0.073356844,
0.0041953255,0.010574352,0.0650729,-0.053978313.....`
    },
    {
        id: "llama33",
        name: "Llama 3.3",
        badge: "Modelo 5",
        color: "orange",
        metrics: { classes: 0, methods: 0, attributes: 0, assignments: 0, compiles: "Pendiente" },
        image: "",
        code: `public class Prompt1 {
    // Código de Llama 3.3...
}`
    }
];

export default function Prompt1Page() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-600 selection:text-white">

            {/* --- HEADER --- */}
            <header className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Prompt 1
                    </h1>
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
                                                model.metrics.compiles === "Sí" || model.metrics.compiles === "Yes" 
                                                ? "bg-green-100 text-green-700" 
                                                : "bg-gray-100 text-gray-500"
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

                {/* --- SECTION 3: DETAILED RESULTS (GENERATED CARDS) --- */}
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
                                    {/* --- Área de Código --- */}
                                    <div className="bg-slate-900 rounded-lg p-4 relative group">
                                        <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
                                            <p className="text-gray-400 text-xs">Prompt1.java</p>
                                            <span className="text-[10px] text-gray-500">{model.name} Output</span>
                                        </div>
                                        {/* AQUI ESTÁ EL CAMBIO: max-h-[500px] y overflow-y-auto */}
                                        <pre className="text-xs text-green-400 font-mono min-h-[200px] max-h-[500px] overflow-y-auto overflow-x-auto">
                                            {model.code}
                                        </pre>
                                    </div>

                                    {/* --- Área de Ejecución / Compilación --- */}
                                    <div className="space-y-4">
                                        
                                        {/* Métricas */}
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