import React from 'react';
import {
    ClipboardDocumentCheckIcon,
    TableCellsIcon,
    CodeBracketIcon,
    CalculatorIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';

// --- CONFIGURACIÓN DE DATOS (PROMPT 5) ---
const models = [
    {
        id: "tinyllama",
        name: "TinyLlama",
        badge: "Modelo 1",
        color: "blue",
        metrics: { classes: 1, methods: 1, attributes: 0, assignments: 6, compiles: "Compilacion Exitosa" },
        image: "/img/prompt5_modelo1.png", 
        code: `import java.util.Random;
import java.util.Scanner;

public class Prompt5 {
   public static void main(String[] args) {
       Scanner input = new Scanner(System.in);

       // Define the matrix dimensions and create an empty matrix for them
       int rows = 50, columns = 50;
       int[,] matrix = new int[rows, columns];

       // Generate random integers between 1 and 1000 using a loop
       Random rand = new Random();
       for (int I = 0; I < rows; i++) {
           for (int j = 0; j < columns; j++) {
               matrix[i, j] = rand.nextInt(1000) + 1;
           }
       }

       // Generate and print the transpose of the matrix
       System.out.print("Enter the dimensions of the square matrix: ");
       int[][] matrix2 = new int[rows][columns];
       for (int I = 0; I < rows; i++) {
           for (int j = 0; j < columns; j++) {
               matrix2[i][j] = matrix[j][i];
           }
       }
       System.out.println("Transpose of matrix: ");
       for (int I = 0; I < rows; i++) {
           for (int j = 0; j < columns; j++) {
               System.out.print(matrix2[i][j] + " ");
           }
           System.out.println();
       }

       // Generate and print the trace of the matrix
       MatrixTraceCalculator traceCalculator = new MatrixTraceCalculator(matrix);
       String traceString = traceCalculator.calculateTrace();
       System.out.print("Trace of matrix: ");
       System.out.println(traceString);

       // Generate and print the determinant of the matrix
       double determinant;
       if (matrix.length == 2) {
           determinant = Math.abs((matrix[0][1] * matrix[1][2] - matrix[1][1] * matrix[2][2]) / Math.sqrt(3));
       } else if (matrix.length == 3) {
           determinant = -Math.abs((matrix[0][1] * matrix[2][2] - matrix[2][1] * matrix[1][2]) / Math.sqrt(3));
       } else if (matrix.length == 4) {
           determinant = (-Math.abs((matrix[0][2] * matrix[2][1] + matrix[1][2] * matrix[2][3]) / Math.sqrt(5)) - Math.abs((matrix[0][3] *
matrix[1][2] - matrix[2][1] * matrix[1][3]) / Math.sqrt(3))) / 6;
       } else {
           determinant = Math.abs(-Math.abs((matrix[0][1] * matrix[2][2] + matrix[1][2] * matrix[2][3]) / Math.sqrt(5)) - Math.abs((matrix[0][3] *
matrix[1][2] + matrix[1][3] * matrix[2][1])) / 6);
       }
       System.out.print("Determinant of matrix: ");
       System.out.println(determinant);

       input.close();
   }
}`
    },
    {
        id: "mistral",
        name: "Mistral-Nemo",
        badge: "Modelo 2",
        color: "indigo",
        metrics: { classes: 1, methods: 8, attributes: 2, assignments: 7, compiles: "Compilación Exitosa" },
        image: "/img/prompt5_modelo2.png",
        code: `import java.util.Random;

public class Prompt5 {
    private static final int SIZE = 50;
    private static final int MAX_VALUE = 1000;

    public static void main(String[] args) {
        int[][] matrix = generateRandomMatrix();
        printMatrix("Original Matrix:", matrix);
        int[][] transpose = transpose(matrix);
        printMatrix("Transpose Matrix:", transpose);

        double trace = calculateTrace(matrix);
        System.out.printf("Trace: %.2f%n", trace);

        long determinant;
        if (SIZE == 2) {
            determinant = calculateDeterminant2x2(matrix);
        } else {
            determinant = calculateNxNDeterminant(matrix, SIZE);
        }
        System.out.printf("Determinant: %d%n", determinant);
    }

    private static int[][] generateRandomMatrix() {
        Random random = new Random();
        int[][] matrix = new int[SIZE][SIZE];
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                matrix[i][j] = random.nextInt(MAX_VALUE) + 1;
            }
        }
        return matrix;
    }

    private static int[][] transpose(int[][] matrix) {
        int[][] transpose = new int[SIZE][SIZE];
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                transpose[i][j] = matrix[j][i];
            }
        }
        return transpose;
    }

    private static void printMatrix(String label, int[][] matrix) {
        System.out.println(label);
        for (int[] row : matrix) {
            for (int value : row) {
                System.out.printf("%4d", value);
            }
            System.out.println();
        }
    }

    private static double calculateTrace(int[][] matrix) {
        double trace = 0;
        for (int i = 0; i < SIZE; i++) {
            trace += matrix[i][i];
        }
        return trace;
    }

    private static long calculateDeterminant2x2(int[][] matrix) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    private static long calculateNxNDeterminant(int[][] matrix, int n) {
        if (n == 1) {
            return matrix[0][0];
        }
        long determinant = 0;
        for (int i = 0; i < n; i++) {
            determinant += Math.pow(-1, i) * matrix[0][i] * calculateNxNDeterminant(minor(matrix, 0, i), n - 1);
        }
        return determinant;
    }

    private static int[][] minor(int[][] matrix, int rowToRemove, int colToRemove) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] minor = new int[rows - 1][cols - 1];
        for (int i = 0; i < rows; i++) {
            if (i == rowToRemove) continue;
            for (int j = 0, k = 0, l = 0; j < cols; j++) {
                if (j == colToRemove) continue;
                minor[i - (rowToRemove > i ? 1 : 0]][k++] = matrix[i][j];
            }
        }
        return minor;
    }
}`
    },
    {
        id: "deepseek",
        name: "DeepSeek-V3",
        badge: "Modelo 3",
        color: "purple",
        metrics: { classes: 1, methods: 8, attributes: 4, assignments: 30, compiles: "Compilación Exitosa" },
        image: "/img/prompt5_modelo3.png",
        code: `import java.util.Random;

public class Prompt5 {
    private static final int SIZE = 50;
    private static final int MIN_VALUE = 1;
    private static final int MAX_VALUE = 1000;
    private static Random random = new Random();
    
    public static void main(String[] args) {
        System.out.println("=== 50x50 MATRIX OPERATIONS ===\n");
        
        // Create and fill the matrix with random values
        int[][] matrix = createRandomMatrix();
        
        // Print original matrix (first 5x5 for readability)
        System.out.println("Original Matrix (first 5x5 elements):");
        printPartialMatrix(matrix, 5);
        System.out.println();
        
        // Generate and print transpose (first 5x5 for readability)
        int[][] transpose = transposeMatrix(matrix);
        System.out.println("Transpose Matrix (first 5x5 elements):");
        printPartialMatrix(transpose, 5);
        System.out.println();
        
        // Calculate and print trace
        int trace = calculateTrace(matrix);
        System.out.println("Trace of the matrix: " + trace);
        System.out.println();
        
        // Calculate and print determinant (with progress indicator)
        System.out.println("Calculating determinant of 50x50 matrix...");
        System.out.println("(This may take a moment for a large matrix)");
        long determinant = calculateDeterminant(matrix);
        System.out.println("\nDeterminant of the matrix: " + determinant);
        
        // Additional statistics
        System.out.println("\n=== ADDITIONAL MATRIX STATISTICS ===");
        printMatrixStatistics(matrix);
    }
    
    // Create a SIZE x SIZE matrix with random values
    private static int[][] createRandomMatrix() {
        int[][] matrix = new int[SIZE][SIZE];
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                matrix[i][j] = MIN_VALUE + random.nextInt(MAX_VALUE - MIN_VALUE + 1);
            }
        }
        return matrix;
    }
    
    // Print a portion of the matrix for readability
    private static void printPartialMatrix(int[][] matrix, int size) {
        int printSize = Math.min(size, SIZE);
        for (int i = 0; i < printSize; i++) {
            for (int j = 0; j < printSize; j++) {
                System.out.printf("%5d", matrix[i][j]);
            }
            if (printSize < SIZE) {
                System.out.print("  ...");
            }
            System.out.println();
        }
        if (printSize < SIZE) {
            System.out.println("...");
        }
    }
    
    // Generate the transpose of a matrix
    private static int[][] transposeMatrix(int[][] matrix) {
        int[][] transpose = new int[SIZE][SIZE];
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        return transpose;
    }
    
    // Calculate the trace (sum of main diagonal elements)
    private static int calculateTrace(int[][] matrix) {
        int trace = 0;
        for (int i = 0; i < SIZE; i++) {
            trace += matrix[i][i];
        }
        return trace;
    }
    
    // Calculate determinant using LU decomposition with partial pivoting
    private static long calculateDeterminant(int[][] matrix) {
        // Convert to double for better precision
        double[][] tempMatrix = new double[SIZE][SIZE];
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                tempMatrix[i][j] = matrix[i][j];
            }
        }
        
        // Perform LU decomposition with partial pivoting
        int[] pivot = new int[SIZE];
        for (int i = 0; i < SIZE; i++) {
            pivot[i] = i;
        }
        
        double det = 1.0;
        int swapCount = 0;
        
        // Show progress bar
        System.out.print("[");
        int progressIncrement = SIZE / 50; // 50-character progress bar
        
        for (int i = 0; i < SIZE; i++) {
            // Update progress bar
            if (i % progressIncrement == 0) {
                System.out.print("#");
            }
            
            // Find pivot
            int maxRow = i;
            double maxVal = Math.abs(tempMatrix[i][i]);
            for (int k = i + 1; k < SIZE; k++) {
                if (Math.abs(tempMatrix[k][i]) > maxVal) {
                    maxVal = Math.abs(tempMatrix[k][i]);
                    maxRow = k;
                }
            }
            
            // Swap rows if necessary
            if (maxRow != i) {
                swapCount++;
                double[] temp = tempMatrix[i];
                tempMatrix[i] = tempMatrix[maxRow];
                tempMatrix[maxRow] = temp;
                
                int tempPivot = pivot[i];
                pivot[i] = pivot[maxRow];
                pivot[maxRow] = tempPivot;
            }
            
            // Check for singular matrix
            if (Math.abs(tempMatrix[i][i]) < 1e-10) {
                // Matrix is singular or nearly singular
                return 0;
            }
            
            det *= tempMatrix[i][i];
            
            // Perform elimination
            for (int j = i + 1; j < SIZE; j++) {
                tempMatrix[j][i] /= tempMatrix[i][i];
                for (int k = i + 1; k < SIZE; k++) {
                    tempMatrix[j][k] -= tempMatrix[j][i] * tempMatrix[i][k];
                }
            }
        }
        
        System.out.println("] 100%");
        
        // Adjust sign based on number of row swaps
        if (swapCount % 2 == 1) {
            det = -det;
        }
        
        return Math.round(det);
    }
    
    // Alternative: Determinant using recursion (only for small matrices)
    // This is included for educational purposes but not used for 50x50
    private static long determinantRecursive(int[][] matrix, int n) {
        if (n == 1) {
            return matrix[0][0];
        }
        if (n == 2) {
            return (long)matrix[0][0] * matrix[1][1] - (long)matrix[0][1] * matrix[1][0];
        }
        
        long det = 0;
        int sign = 1;
        
        for (int i = 0; i < n; i++) {
            // Create submatrix
            int[][] submatrix = new int[n - 1][n - 1];
            for (int j = 1; j < n; j++) {
                int col = 0;
                for (int k = 0; k < n; k++) {
                    if (k == i) continue;
                    submatrix[j - 1][col++] = matrix[j][k];
                }
            }
            
            det += sign * matrix[0][i] * determinantRecursive(submatrix, n - 1);
            sign = -sign;
        }
        
        return det;
    }
    
    // Print additional matrix statistics
    private static void printMatrixStatistics(int[][] matrix) {
        int min = MAX_VALUE;
        int max = MIN_VALUE;
        long sum = 0;
        int[] rowSums = new int[SIZE];
        int[] colSums = new int[SIZE];
        
        // Calculate statistics
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                int value = matrix[i][j];
                min = Math.min(min, value);
                max = Math.max(max, value);
                sum += value;
                rowSums[i] += value;
                colSums[j] += value;
            }
        }
        
        double average = (double)sum / (SIZE * SIZE);
        
        // Calculate variance
        double variance = 0;
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                double diff = matrix[i][j] - average;
                variance += diff * diff;
            }
        }
        variance /= (SIZE * SIZE);
        double stdDev = Math.sqrt(variance);
        
        // Find min and max row/column sums
        int minRowSum = Integer.MAX_VALUE;
        int maxRowSum = Integer.MIN_VALUE;
        int minColSum = Integer.MAX_VALUE;
        int maxColSum = Integer.MIN_VALUE;
        
        for (int i = 0; i < SIZE; i++) {
            minRowSum = Math.min(minRowSum, rowSums[i]);
            maxRowSum = Math.max(maxRowSum, rowSums[i]);
            minColSum = Math.min(minColSum, colSums[i]);
            maxColSum = Math.max(maxColSum, colSums[i]);
        }
        
        System.out.printf("Matrix Size: %dx%d%n", SIZE, SIZE);
        System.out.printf("Value Range: %d to %d%n", min, max);
        System.out.printf("Average Value: %.2f%n", average);
        System.out.printf("Standard Deviation: %.2f%n", stdDev);
        System.out.printf("Total Sum: %,d%n", sum);
        System.out.printf("Row Sums: Min=%,d, Max=%,d%n", minRowSum, maxRowSum);
        System.out.printf("Column Sums: Min=%,d, Max=%,d%n", minColSum, maxColSum);
        
        // Check if matrix is symmetric
        boolean isSymmetric = true;
        for (int i = 0; i < SIZE && isSymmetric; i++) {
            for (int j = i + 1; j < SIZE && isSymmetric; j++) {
                if (matrix[i][j] != matrix[j][i]) {
                    isSymmetric = false;
                }
            }
        }
        System.out.println("Matrix is " + (isSymmetric ? "symmetric" : "not symmetric"));
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
        image: "/img/prompt5_modelo4.png", // Ejemplo: "/img/prompt5_modelo4.png"
        code: `[-0.0432655,0.0091343345,-0.015856935,0.015146512,0.020687863,0.0003570762,-0.019263012,0.003201817,
        0.02960235,-0.029570099,-0.019649029,0.017325645,-0.015072512,-0.0055523673,-0.02664602,0.022922914,0.0024024227,
        0.07103636,0.0042649372,0.010401606,0.0069069946,-0.007958102,0.0023728942,-0.005371539,-0.020295737,0.014518855,
        0.01672662,-0.026917756,-0.0025285857,-0.01608151,0.018083565,-0.012697221,0.021952167,-0.0060561323,-0.016410818,
        0.016187483,-0.052185833,0.005865728,-0.030725386,-0.005654641,-0.010893329,-0.04821522,0.006477382,-0.023244154,
        -0.024834761,0.00027101784,-0.010250194,-0.048902776,0.002597166,-0.00020087388,-0.03706733,0.0024503085,0.07061002,
        -0.049313266,0.027117234,0.01514826,-0.0064896466,-0.00049429084,-0.055935938,0.014922564,0.012325143,0.06594769,
        -0.03503765,-0.0054334654,0.03492871,0.032465808,-0.016154526,0.016392995,-0.0008934054,-0.018775754,-0.02463927,
        0.012280245,-0.024951562,0.028762687,-0.06644574,-0.00004342646,0.09302131,-0.023031034,-0.061040785,0.00486231,
        0.017700175,-0.03925276,-0.049377576,0.0074272854,-0.029127847,0.0025889326,0.0012431958,0.047867958,-0.022671942
        ,0.015968956,-0.01956867,-0.010776112,0.019083258,-0.051131483,-0.05192477,0.022050567,-0.04189422,0.001145623,
        0.034970094,0.011638906,-0.025463343,-0.0014211435,0.009360894,0.02452093,0.0016920327,-0.033342596,0.002884327,
        0.005494508,0.010312366,-0.023784265,0.014078239,0.03309888,0.04043619,0.035597086,0.00920535,0.008813096,-0.009722914,
        -0.025661679,0.05255378,0.011281034,-0.03102111,-0.019839693,0.022472782,-0.049190693,-0.05086245,-0.040534627,
        -0.036088098,0.071767986,-0.041108683,0.0034465587,0.012610581,0.03023598,-0.027321102,0.019347817,-0.0875246,
        -0.018451829,-0.008726411,-0.013851983,-0.023767054,-0.04716243,0.065141045,-0.015326207,-0.04387493,0.011471414
        ,0.035379626,-0.07959127,0.05773199,-0.012716631,-0.017909544,-0.009960344,0.0159457,0.05504816,0.028523866,
        -0.020496536,-0.018351264,0.0003652771,-0.030658297,0.011311837,0.04319145,0.04422392,0.008128439,0.04471694,
        -0.016078837,0.043392364,0.022571351,0.0005347074,-0.001818942,0.03214835,-0.024267966,-0.0473621,0.04697261,
        0.02659041,0.017830813,-0.0011683697,0.018906185,0.008535298,0.0036076498,0.021809958,-0.0048159133,-0.057142578,
        -0.018989203,-0.0068644267,-0.007649582,0.0021380936,-0.021027748,0.0015112731,-0.0005730644,0.022214876,0.0075597893,
        -0.0043658763,-0.04574095,-0.035295967,0.05360162,-0.006740324,0.045171484,0.0044220905,0.046582833,-0.029423365,
        0.0013612912,0.024609713,-0.036513504,0.017547267,-0.036412165,0.03659697,-0.036570314,-0.0016940826,-0.03737645,
        -0.036790434,0.010786277,-0.009675491,0.020510709,0.029888751,0.06133827,0.037914097,-0.019772729,0.0015867017,
        0.026194405,0.053387217,0.0012674093,-0.00059470366,0.0025931345,0.05056526,0.05116723,-0.013503276,0.011252816,0.012796658,-0.02737073,0.006244522...`
    },
    {
        id: "llama33",
        name: "Llama 3.3",
        badge: "Modelo 5",
        color: "orange",
        metrics: { classes: 1, methods: 6, attributes: 0, assignments: 5, compiles: "Compilacion Exitosa" },
        image: "/img/prompt5_modelo5.png",
        code: `import java.util.Random;

public class Prompt5 {
    public static void main(String[] args) {
        // Create a 50x50 matrix and fill it with random values
        int[][] matrix = new int[50][50];
        Random random = new Random();
        for (int i = 0; i < 50; i++) {
            for (int j = 0; j < 50; j++) {
                matrix[i][j] = random.nextInt(1000) + 1;
            }
        }

        // Print the original matrix
        System.out.println("Original Matrix:");
        printMatrix(matrix);

        // Generate and print the transpose of the matrix
        int[][] transpose = getTranspose(matrix);
        System.out.println("Transpose of the Matrix:");
        printMatrix(transpose);

        // Calculate and print the trace of the matrix
        int trace = getTrace(matrix);
        System.out.println("Trace of the Matrix: " + trace);

        // Calculate and print the determinant of the matrix
        double determinant = getDeterminant(matrix);
        System.out.println("Determinant of the Matrix: " + determinant);
    }

    /**
     * Prints the given matrix.
     *
     * @param matrix the input matrix
     */
    public static void printMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + "\t");
            }
            System.out.println();
        }
        System.out.println();
    }

    /**
     * Generates the transpose of the given matrix.
     *
     * @param matrix the input matrix
     * @return the transpose of the matrix
     */
    public static int[][] getTranspose(int[][] matrix) {
        int[][] transpose = new int[matrix[0].length][matrix.length];
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        return transpose;
    }

    /**
     * Calculates the trace of the given matrix.
     *
     * @param matrix the input matrix
     * @return the trace of the matrix
     */
    public static int getTrace(int[][] matrix) {
        int trace = 0;
        for (int i = 0; i < matrix.length; i++) {
            trace += matrix[i][i];
        }
        return trace;
    }

    /**
     * Calculates the determinant of the given matrix using the Laplace expansion method.
     *
     * @param matrix the input matrix
     * @return the determinant of the matrix
     */
    public static double getDeterminant(int[][] matrix) {
        if (matrix.length == 1) {
            return matrix[0][0];
        } else if (matrix.length == 2) {
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        } else {
            double determinant = 0;
            for (int i = 0; i < matrix.length; i++) {
                int[][] subMatrix = getSubMatrix(matrix, 0, i);
                determinant += Math.pow(-1, i) * matrix[0][i] * getDeterminant(subMatrix);
            }
            return determinant;
        }
    }

    /**
     * Generates a sub-matrix by removing the given row and column from the original matrix.
     *
     * @param matrix the input matrix
     * @param row    the row to remove
     * @param col    the column to remove
     * @return the sub-matrix
     */
    public static int[][] getSubMatrix(int[][] matrix, int row, int col) {
        int[][] subMatrix = new int[matrix.length - 1][matrix.length - 1];
        int subRow = 0;
        for (int i = 0; i < matrix.length; i++) {
            if (i == row) {
                continue;
            }
            int subCol = 0;
            for (int j = 0; j < matrix.length; j++) {
                if (j == col) {
                    continue;
                }
                subMatrix[subRow][subCol++] = matrix[i][j];
            }
            subRow++;
        }
        return subMatrix;
    }
}`
    }
];

export default function Prompt5Page() {

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
                        Prompt 5
                    </h1>
                    <p className="text-lg text-gray-600">
                        Operaciones con Matrices (Transpuesta, Traza, Determinante)
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
                                    Genera un programa en java, que construya una matriz cuadrada de enteros, de 50 renglones y 50 columnas, 
                                    que llene dicha matriz con valores aleatorios enteros entre 1 y 1000. 
                                    A partir de dicha matriz debe generar su transpuesta e imprimirla. 
                                    Calcular su traza e imprimirla, construir su determinante e imprimirlo. 
                                    El programa generado debe estar contenido en un solo archivo con nombre Prompt5.java
                                </p>
                            </div>
                        </div>

                        {/* Inglés */}
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">English Version</h3>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 font-mono leading-relaxed italic">
                                <p>
                                    Write a Java program that creates a square matrix of integers, with 50 rows and 50 columns, 
                                    and fills it with random integer values between 1 and 1000. 
                                    Then, generate and print the transpose of this matrix, calculate and print its trace, 
                                    and calculate and print its determinant. 
                                    The entire program must be contained in a single file named Prompt5.java.
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
                                            <p className="text-gray-400 text-xs">Prompt5.java</p>
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