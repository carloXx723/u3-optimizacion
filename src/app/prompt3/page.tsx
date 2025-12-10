import React from 'react';
import {
    ClipboardDocumentCheckIcon,
    TableCellsIcon,
    CodeBracketIcon,
    CalculatorIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';

// --- CONFIGURACIÓN DE DATOS (PROMPT 3) ---
const models = [
    {
        id: "tinyllama",
        name: "TinyLlama",
        badge: "Modelo 1",
        color: "blue",
        metrics: { classes: 1, methods: 1, attributes: 0, assignments: 7, compiles: "Compilacion Exitosa" },
        image: "/img/prompt3_modelo1.png", 
        code: `import java.util.Scanner;
import java.io.FileOutputStructure;
import java.io.FileOutputStructureException;
import java.io.PrintWriter;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Prompt3 {
   public static void main(String[] args) {
       // Create a Scanner object to read user input
       Scanner input = new Scanner(System.in);

       // Define an Employee class with integer identifier, name, salary, address, email, and phone number fields
       Employee[] employees;
       Employee currentEmployee;
       int employeeId;
       int numEmployees;
       int option;

       // Initialize the Scanner to read user input
       System.out.println("Enter a maximum of 10 employee numbers:");
       while ((numEmployees = input.nextInt()) < 1) {
           System.out.println("Invalid number of employees specified, please enter a positive integer.");
           numEmployees = input.nextInt();
       }

       // Initialize the Scanner to read user input for each employee
       System.out.println("Enter employee identifier (1-" + numEmployees + "):");
       while (true) {
           try {
               employeeId = input.nextInt();
               if (employeeId < 1 || employeeId > numEmployees) {
                   System.out.println("Invalid employee identifier specified, please enter a number between 1 and " + numEmployees);
               } else break;
           } catch (NumberFormatException e) {
               System.out.println("Invalid input for employee identifier: " + e.getMessage());
           }
       }

       // Open the binary file for read/write
       FileOutputStructure structure = new FileOutputStructure(new File("data.dat"));

       // Create an array to store employee data and update it in the binary file when prompted
       employees = new Employee[numEmployees];
       currentEmployee = employees[employeeId - 1];
       System.out.println("Enter employee name (default if no name entered):");
       while (!currentEmployee.hasName()) {
           System.out.println("Default name for " + employeeId + ":");
           Scanner input2 = new Scanner(System.in);
           currentEmployee.setName(input2.nextLine());
       }

       // Create an array to store employee data and update it in the binary file when prompted
       employees[employeeId - 1] = new Employee(employeeId, currentEmployee.getName(), currentEmployee.getSalary(), currentEmployee.getAddress(),
currentEmployee.getEmail());

       // Open the binary file for read/write
       structure.open(new File("data.dat"));

       option = input.nextInt();

       // Close the binary file and read/update employee data in the array when prompted
       switch (option) {
           case 1:
               System.out.println("Enter email for " + employees[employeeId - 1].getName() + ":");
               while (!employees[employeeId - 1].hasEmail()) {
                   Scanner input3 = new Scanner(System.in);
                   employees[employeeId - 1].setEmail(input3.nextLine());
               }
               break;
           case 2:
               System.out.println("Enter phone number for " + employees[employeeId - 1].getName() + ":");
               while (!employees[employeeId - 1].hasPhoneNumber()) {
                   Scanner input4 = new Scanner(System.in);
                   employees[employeeId - 1].setPhoneNumber(input4.nextLine());
               }
               break;
           case 3:
               System.out.println("Enter salary for " + employees[employeeId - 1].getName() + ":");
               while (!employees[employeeId - 1].hasSalary()) {
                   Scanner input5 = new Scanner(System.in);
                   employees[employeeId - 1].setSalary(input5.nextDouble());
               }
               break;
       }

       // Close the binary file and write employee data to it when prompted
       switch (option) {
           case 1:
               structure.writeToFile("data.dat", employees);
               System.out.println("Employee information updated in binary file.");
               break;
           case 2:
               structure.update(employees[employeeId - 1], "phoneNumber");
               System.out.println("Phone number for employee updated.");
               break;
           case 3:
               structure.writeToFile("data.dat", employees);
               System.out.println("Salary for employee updated.");
               break;
       }

       input.close();
   }
}
`
    },
    {
        id: "mistral",
        name: "Mistral-Nemo",
        badge: "Modelo 2",
        color: "indigo",
        metrics: { classes: 2, methods: 9, attributes: 8, assignments: 13, compiles: "Compilacion Exitosa" },
        image: "/img/prompt3_modelo2.png",
        code: `import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Employee {
    int id;
    String name;
    double salary;
    String address;
    String email;
    String phoneNumber;

    public Employee(int id, String name, double salary, String address, String email, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "ID: " + id +
                ", Name: " + name +
                ", Salary: " + salary +
                ", Address: " + address +
                ", Email: " + email +
                ", Phone Number: " + phoneNumber;
    }
}

public class Prompt3 {
    private static final String DATA_FILE = "data.dat";
    private static List<Employee> employees;

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Scanner scanner = new Scanner(System.in);
        employees = loadEmployees();

        while (true) {
            System.out.println("\n--- Employee CRUD Menu ---");
            System.out.println("1. Create employee");
            System.out.println("2. Read employees");
            System.out.println("3. Update employee");
            System.out.println("4. Delete employee");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline left-over

            switch (choice) {
                case 1:
                    createEmployee(scanner);
                    break;
                case 2:
                    readEmployees();
                    break;
                case 3:
                    updateEmployee(scanner);
                    break;
                case 4:
                    deleteEmployee(scanner);
                    break;
                case 5:
                    saveEmployees();
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void createEmployee(Scanner scanner) {
        System.out.print("Enter employee ID: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Consume newline left-over

        System.out.print("Enter employee name: ");
        String name = scanner.nextLine();

        System.out.print("Enter employee salary: ");
        double salary = scanner.nextDouble();
        scanner.nextLine(); // Consume newline left-over

        System.out.print("Enter employee address: ");
        String address = scanner.nextLine();

        System.out.print("Enter employee email: ");
        String email = scanner.nextLine();

        System.out.print("Enter employee phone number: ");
        String phoneNumber = scanner.nextLine();

        employees.add(new Employee(id, name, salary, address, email, phoneNumber));
        System.out.println("Employee created successfully.");
    }

    private static void readEmployees() {
        if (employees.isEmpty()) {
            System.out.println("No employees found.");
        } else {
            for (Employee employee : employees) {
                System.out.println(employee);
            }
        }
    }

    private static void updateEmployee(Scanner scanner) {
        System.out.print("Enter employee ID to update: ");
        int id = scanner.nextInt();

        int index = findEmployeeIndex(id);
        if (index == -1) {
            System.out.println("Employee not found.");
            return;
        }

        Employee employee = employees.get(index);
        System.out.println("Current details:");
        System.out.println(employee);

        System.out.print("Enter new name: ");
        String name = scanner.nextLine();

        System.out.print("Enter new salary: ");
        double salary = scanner.nextDouble();
        scanner.nextLine(); // Consume newline left-over

        System.out.print("Enter new address: ");
        String address = scanner.nextLine();

        System.out.print("Enter new email: ");
        String email = scanner.nextLine();

        System.out.print("Enter new phone number: ");
        String phoneNumber = scanner.nextLine();

        employee.name = name;
        employee.salary = salary;
        employee.address = address;
        employee.email = email;
        employee.phoneNumber = phoneNumber;

        System.out.println("Employee updated successfully.");
    }

    private static void deleteEmployee(Scanner scanner) {
        System.out.print("Enter employee ID to delete: ");
        int id = scanner.nextInt();

        int index = findEmployeeIndex(id);
        if (index == -1) {
            System.out.println("Employee not found.");
            return;
        }

        employees.remove(index);
        System.out.println("Employee deleted successfully.");
    }

    private static List<Employee> loadEmployees() throws IOException, ClassNotFoundException {
        List<Employee> loadedEmployees = new ArrayList<>();
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(DATA_FILE))) {
            loadedEmployees = (List<Employee>) ois.readObject();
        } catch (FileNotFoundException e) {
            // If the file doesn't exist, create an empty list
        }
        return loadedEmployees;
    }

    private static void saveEmployees() throws IOException {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(DATA_FILE))) {
            oos.writeObject(employees);
        }
    }

    private static int findEmployeeIndex(int id) {
        for (int i = 0; i < employees.size(); i++) {
            if (employees.get(i).id == id) {
                return i;
            }
        }
        return -1;
    }
}`
    },
    {
        id: "deepseek",
        name: "DeepSeek-V3",
        badge: "Modelo 3",
        color: "purple",
        metrics: { classes: 2, methods: 28, attributes: 9, assignments: 15, compiles: "Compilación Exitosa" },
        image: "/img/prompt3_modelo3.png",
        code: `import java.io.*;
import java.util.*;
import java.util.regex.Pattern;

class Employee implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int id;
    private String name;
    private double salary;
    private String address;
    private String email;
    private String phone;
    
    public Employee(int id, String name, double salary, String address, String email, String phone) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
    
    // Getters and setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }
    
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    
    @Override
    public String toString() {
        return String.format("ID: %d | Name: %-20s | Salary: $%,10.2f | Phone: %s%n" +
                           "Email: %s%nAddress: %s%n" +
                           "--------------------------------------------------------",
                           id, name, salary, phone, email, address);
    }
}

public class Prompt3 {
    private static final String FILE_NAME = "data.dat";
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        displayMenu();
    }
    
    private static void displayMenu() {
        while (true) {
            System.out.println("\n=== EMPLOYEE MANAGEMENT SYSTEM ===");
            System.out.println("1. Add New Employee");
            System.out.println("2. View All Employees");
            System.out.println("3. Search Employee by ID");
            System.out.println("4. Update Employee");
            System.out.println("5. Delete Employee");
            System.out.println("6. Exit");
            System.out.print("Enter your choice (1-6): ");
            
            try {
                int choice = Integer.parseInt(scanner.nextLine());
                
                switch (choice) {
                    case 1:
                        addEmployee();
                        break;
                    case 2:
                        viewAllEmployees();
                        break;
                    case 3:
                        searchEmployee();
                        break;
                    case 4:
                        updateEmployee();
                        break;
                    case 5:
                        deleteEmployee();
                        break;
                    case 6:
                        System.out.println("Exiting program. Goodbye!");
                        return;
                    default:
                        System.out.println("Invalid choice! Please enter 1-6.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid number!");
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }
    
    private static void addEmployee() {
        System.out.println("\n--- ADD NEW EMPLOYEE ---");
        
        try {
            // Generate new ID
            List<Employee> employees = readEmployeesFromFile();
            int newId = 1;
            if (!employees.isEmpty()) {
                newId = employees.stream().mapToInt(Employee::getId).max().getAsInt() + 1;
            }
            
            System.out.println("Generated Employee ID: " + newId);
            
            // Get employee details with validation
            System.out.print("Enter Name: ");
            String name = scanner.nextLine();
            if (name.trim().isEmpty()) {
                System.out.println("Name cannot be empty!");
                return;
            }
            
            double salary = getValidDouble("Enter Salary: ");
            if (salary < 0) {
                System.out.println("Salary cannot be negative!");
                return;
            }
            
            System.out.print("Enter Address: ");
            String address = scanner.nextLine();
            
            String email = getValidEmail();
            String phone = getValidPhone();
            
            // Create new employee
            Employee emp = new Employee(newId, name, salary, address, email, phone);
            employees.add(emp);
            
            // Save to file
            writeEmployeesToFile(employees);
            System.out.println("Employee added successfully! ID: " + newId);
            
        } catch (Exception e) {
            System.out.println("Error adding employee: " + e.getMessage());
        }
    }
    
    private static void viewAllEmployees() {
        System.out.println("\n--- ALL EMPLOYEES ---");
        
        List<Employee> employees = readEmployeesFromFile();
        
        if (employees.isEmpty()) {
            System.out.println("No employees found!");
            return;
        }
        
        System.out.printf("Total Employees: %d%n%n", employees.size());
        employees.forEach(System.out::println);
        
        // Display summary statistics
        double totalSalary = employees.stream().mapToDouble(Employee::getSalary).sum();
        double avgSalary = employees.stream().mapToDouble(Employee::getSalary).average().orElse(0);
        System.out.printf("%nSummary: Total Salary: $%,.2f | Average Salary: $%,.2f%n", 
                         totalSalary, avgSalary);
    }
    
    private static void searchEmployee() {
        System.out.println("\n--- SEARCH EMPLOYEE ---");
        
        try {
            int id = getValidInt("Enter Employee ID to search: ");
            
            List<Employee> employees = readEmployeesFromFile();
            Optional<Employee> foundEmp = employees.stream()
                .filter(emp -> emp.getId() == id)
                .findFirst();
            
            if (foundEmp.isPresent()) {
                System.out.println("\nEmployee Found:");
                System.out.println(foundEmp.get());
            } else {
                System.out.println("Employee with ID " + id + " not found!");
            }
        } catch (Exception e) {
            System.out.println("Error searching employee: " + e.getMessage());
        }
    }
    
    private static void updateEmployee() {
        System.out.println("\n--- UPDATE EMPLOYEE ---");
        
        try {
            int id = getValidInt("Enter Employee ID to update: ");
            
            List<Employee> employees = readEmployeesFromFile();
            Optional<Employee> empOpt = employees.stream()
                .filter(emp -> emp.getId() == id)
                .findFirst();
            
            if (!empOpt.isPresent()) {
                System.out.println("Employee with ID " + id + " not found!");
                return;
            }
            
            Employee emp = empOpt.get();
            System.out.println("\nCurrent Employee Details:");
            System.out.println(emp);
            
            System.out.println("\nEnter new details (press Enter to keep current value):");
            
            // Update name
            System.out.print("Name [" + emp.getName() + "]: ");
            String name = scanner.nextLine();
            if (!name.trim().isEmpty()) {
                emp.setName(name);
            }
            
            // Update salary
            System.out.print("Salary [" + emp.getSalary() + "]: ");
            String salaryStr = scanner.nextLine();
            if (!salaryStr.trim().isEmpty()) {
                try {
                    double salary = Double.parseDouble(salaryStr);
                    if (salary >= 0) {
                        emp.setSalary(salary);
                    } else {
                        System.out.println("Invalid salary! Keeping current value.");
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid number format! Keeping current value.");
                }
            }
            
            // Update address
            System.out.print("Address [" + emp.getAddress() + "]: ");
            String address = scanner.nextLine();
            if (!address.trim().isEmpty()) {
                emp.setAddress(address);
            }
            
            // Update email
            System.out.print("Email [" + emp.getEmail() + "]: ");
            String email = scanner.nextLine();
            if (!email.trim().isEmpty()) {
                if (isValidEmail(email)) {
                    emp.setEmail(email);
                } else {
                    System.out.println("Invalid email format! Keeping current value.");
                }
            }
            
            // Update phone
            System.out.print("Phone [" + emp.getPhone() + "]: ");
            String phone = scanner.nextLine();
            if (!phone.trim().isEmpty()) {
                if (isValidPhone(phone)) {
                    emp.setPhone(phone);
                } else {
                    System.out.println("Invalid phone format! Keeping current value.");
                }
            }
            
            // Save updated list
            writeEmployeesToFile(employees);
            System.out.println("Employee updated successfully!");
            
        } catch (Exception e) {
            System.out.println("Error updating employee: " + e.getMessage());
        }
    }
    
    private static void deleteEmployee() {
        System.out.println("\n--- DELETE EMPLOYEE ---");
        
        try {
            int id = getValidInt("Enter Employee ID to delete: ");
            
            List<Employee> employees = readEmployeesFromFile();
            
            // Find employee to delete
            Employee toDelete = null;
            for (Employee emp : employees) {
                if (emp.getId() == id) {
                    toDelete = emp;
                    break;
                }
            }
            
            if (toDelete == null) {
                System.out.println("Employee with ID " + id + " not found!");
                return;
            }
            
            // Confirm deletion
            System.out.println("\nEmployee to delete:");
            System.out.println(toDelete);
            System.out.print("\nAre you sure you want to delete this employee? (yes/no): ");
            String confirm = scanner.nextLine();
            
            if (confirm.equalsIgnoreCase("yes")) {
                employees.remove(toDelete);
                writeEmployeesToFile(employees);
                System.out.println("Employee deleted successfully!");
            } else {
                System.out.println("Deletion cancelled.");
            }
            
        } catch (Exception e) {
            System.out.println("Error deleting employee: " + e.getMessage());
        }
    }
    
    // File operations
    @SuppressWarnings("unchecked")
    private static List<Employee> readEmployeesFromFile() {
        List<Employee> employees = new ArrayList<>();
        File file = new File(FILE_NAME);
        
        if (!file.exists()) {
            return employees;
        }
        
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
            employees = (List<Employee>) ois.readObject();
        } catch (EOFException e) {
            // File is empty
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Warning: Could not read from file. Starting with empty list.");
        }
        
        return employees;
    }
    
    private static void writeEmployeesToFile(List<Employee> employees) {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(FILE_NAME))) {
            oos.writeObject(employees);
        } catch (IOException e) {
            System.out.println("Error saving to file: " + e.getMessage());
        }
    }
    
    // Validation methods
    private static String getValidEmail() {
        while (true) {
            System.out.print("Enter Email: ");
            String email = scanner.nextLine();
            if (isValidEmail(email)) {
                return email;
            }
            System.out.println("Invalid email format! Please try again.");
        }
    }
    
    private static String getValidPhone() {
        while (true) {
            System.out.print("Enter Phone Number (10 digits): ");
            String phone = scanner.nextLine();
            if (isValidPhone(phone)) {
                return phone;
            }
            System.out.println("Invalid phone number! Must be 10 digits.");
        }
    }
    
    private static boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
        return Pattern.compile(emailRegex).matcher(email).matches();
    }
    
    private static boolean isValidPhone(String phone) {
        // Remove any non-digit characters
        String digitsOnly = phone.replaceAll("\\D", "");
        return digitsOnly.length() == 10;
    }
    
    private static int getValidInt(String prompt) {
        while (true) {
            try {
                System.out.print(prompt);
                return Integer.parseInt(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Invalid number! Please enter a valid integer.");
            }
        }
    }
    
    private static double getValidDouble(String prompt) {
        while (true) {
            try {
                System.out.print(prompt);
                return Double.parseDouble(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Invalid number! Please enter a valid decimal number.");
            }
        }
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
        image: "/img/prompt3_modelo4.png", 
        code: `[-0.058835566,-0.0014044488,-0.033580013,-0.01356295,-0.012848971,-0.027964031,0.0065811984,
        -0.019586852,0.04259161,-0.015003629,-0.012993669,-0.036308017,-0.045323238,-0.023365954,-0.0025970151,
        -0.008526241,0.017849391,0.04717447,0.014410908,0.024826892,0.01512804,0.007149288,0.007094575,0.016066661,
        -0.012358102,0.004980038,0.011133466,-0.0110509945,0.024683857,-0.01875433,-0.01571054,-0.02647508,0.000600595,
        -0.0251303,0.021878175,0.0042315884,0.01360947,0.012067729,-0.030251056,-0.026505265,-0.044099774,0.021238953,
        0.018553128,-0.027286053,-0.01601149,0.021581806,0.0018287187,-0.030222762,-0.0021334055,-0.009292981,
        -0.050754342,0.020393498,0.045057524,-0.022764824,0.090877526,0.034244183,-0.0052102776,0.027366286,
        -0.047305457,0.021559356,-0.0005301552,0.042458586,-0.0015233267,0.000087091285,0.017589208,0.04368592,-0.036094908,
        -0.003440923,0.017330373,-0.0133617055,-0.011350363,0.02465043,-0.012471174,0.011344844,-0.04064032,-0.007547026,0.0403961,
        -0.0038279332,-0.09391636,0.0068442146,-0.025375808,-0.014625811,0.0085357465,-0.0018287859,-0.018768862,0.02059902,
        -0.0016030123,0.05324643,0.008271935,0.018655978,0.001449591,-0.04467047,0.0066717505,-0.03861546,-0.046620958,
        -0.007919602,0.0029752555,-0.0029280265,-0.0017209001,0.046920627,0.0056066904,-0.033626247,-0.034255307,0.046185162,0.011049554,
        -0.0035313414,0.04863546,-0.011362643,0.030989245,-0.04173824,-0.008201349,0.044457804,0.02107491,0.008593316,0.0047360687,
        0.00094111764,0.008751335,-0.029346803,0.035465337,-0.0130247455,-0.0027100379,0.013619218,0.050625667,-0.012316807,-0.004940643,
        -0.021586904,0.028522661,0.025962034,0.0010712704,-0.007400596,0.01627874,0.08733809,-0.0078885965,0.014412272,-0.06753405,
        -0.043060686,0.014514803,-0.012356431,-0.026417693,-0.102963395,0.055569038,0.010336195,-0.039572567,-0.03118526,-0.0039833644,
        -0.059018053,0.03129751,0.011147114,-0.0130123105,-0.0292011,-0.00038982835,0.027572079,0.019519484,-0.036674745,0.001925055...`
    },
    {
        id: "llama33",
        name: "Llama 3.3",
        badge: "Modelo 5",
        color: "orange",
        metrics: { classes: 2, methods: 8, attributes: 8, assignments: 9, compiles: "Compilación Exitosa" },
        image: "/img/prompt3_modelo5.png",
        code: `import java.io.*;
import java.util.Scanner;

class Employee implements Serializable {
    int id;
    String name;
    double salary;
    String address;
    String email;
    String phoneNumber;

    public Employee(int id, String name, double salary, String address, String email, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", salary=" + salary +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }
}

public class Prompt3 {
    private static final String FILE_NAME = "data.dat";
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            System.out.println("Employee Management System");
            System.out.println("1. Create Employee");
            System.out.println("2. Read Employees");
            System.out.println("3. Update Employee");
            System.out.println("4. Delete Employee");
            System.out.println("5. Exit");
            System.out.print("Choose an option: ");
            int option = scanner.nextInt();
            scanner.nextLine(); // Consume newline left-over

            switch (option) {
                case 1:
                    createEmployee();
                    break;
                case 2:
                    readEmployees();
                    break;
                case 3:
                    updateEmployee();
                    break;
                case 4:
                    deleteEmployee();
                    break;
                case 5:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid option. Please choose again.");
            }
        }
    }

    private static void createEmployee() {
        System.out.print("Enter employee id: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Consume newline left-over
        System.out.print("Enter employee name: ");
        String name = scanner.nextLine();
        System.out.print("Enter employee salary: ");
        double salary = scanner.nextDouble();
        scanner.nextLine(); // Consume newline left-over
        System.out.print("Enter employee address: ");
        String address = scanner.nextLine();
        System.out.print("Enter employee email: ");
        String email = scanner.nextLine();
        System.out.print("Enter employee phone number: ");
        String phoneNumber = scanner.nextLine();

        Employee employee = new Employee(id, name, salary, address, email, phoneNumber);
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(FILE_NAME, true))) {
            oos.writeObject(employee);
            System.out.println("Employee created successfully.");
        } catch (IOException e) {
            System.out.println("Error creating employee: " + e.getMessage());
        }
    }

    private static void readEmployees() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
            while (true) {
                try {
                    Employee employee = (Employee) ois.readObject();
                    System.out.println(employee);
                } catch (EOFException e) {
                    break;
                }
            }
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error reading employees: " + e.getMessage());
        }
    }

    private static void updateEmployee() {
        System.out.print("Enter employee id to update: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Consume newline left-over

        Employee[] employees = readEmployeesFromFile();
        if (employees == null) {
            System.out.println("No employees found.");
            return;
        }

        for (int i = 0; i < employees.length; i++) {
            if (employees[i].id == id) {
                System.out.print("Enter new employee name: ");
                String name = scanner.nextLine();
                System.out.print("Enter new employee salary: ");
                double salary = scanner.nextDouble();
                scanner.nextLine(); // Consume newline left-over
                System.out.print("Enter new employee address: ");
                String address = scanner.nextLine();
                System.out.print("Enter new employee email: ");
                String email = scanner.nextLine();
                System.out.print("Enter new employee phone number: ");
                String phoneNumber = scanner.nextLine();

                employees[i] = new Employee(id, name, salary, address, email, phoneNumber);
                writeEmployeesToFile(employees);
                System.out.println("Employee updated successfully.");
                return;
            }
        }

        System.out.println("Employee not found.");
    }

    private static void deleteEmployee() {
        System.out.print("Enter employee id to delete: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Consume newline left-over

        Employee[] employees = readEmployeesFromFile();
        if (employees == null) {
            System.out.println("No employees found.");
            return;
        }

        Employee[] newEmployees = new Employee[employees.length - 1];
        int j = 0;
        for (int i = 0; i < employees.length; i++) {
            if (employees[i].id!= id) {
                newEmployees[j++] = employees[i];
            }
        }

        writeEmployeesToFile(newEmployees);
        System.out.println("Employee deleted successfully.");
    }

    private static Employee[] readEmployeesFromFile() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
            int count = 0;
            try {
                while (true) {
                    ois.readObject();
                    count++;
                }
            } catch (EOFException e) {
            }

            ois.close();

            Employee[] employees = new Employee[count];
            try (ObjectInputStream ois2 = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
                for (int i = 0; i < count; i++) {
                    employees[i] = (Employee) ois2.readObject();
                }
            }
            return employees;
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error reading employees: " + e.getMessage());
            return null;
        }
    }

    private static void writeEmployeesToFile(Employee[] employees) {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(FILE_NAME))) {
            for (Employee employee : employees) {
                oos.writeObject(employee);
            }
        } catch (IOException e) {
            System.out.println("Error writing employees: " + e.getMessage());
        }
    }
}`
    }
];

export default function Prompt3Page() {

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
                        Prompt 3
                    </h1>
                    <p className="text-lg text-gray-600">
                        Sistema CRUD de Empleados (Archivos Binarios)
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
                                    Genera un programa en java, para implementar un CRUD de empleados. 
                                    Cada empleado debe tener un número de identificador entero, un nombre, un salario, una dirección, un correo electrónico y un teléfono. 
                                    El programa generado debe construir un menú de opciones por consola para que el usuario pueda escoger la opción deseada. 
                                    El programa debe usar un archivo binario de nombre data.dat para almacenar la información de los empleados. 
                                    El programa generado debe estar contenido en un solo archivo con nombre Prompt3.java
                                </p>
                            </div>
                        </div>

                        {/* Inglés */}
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">English Version</h3>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 font-mono leading-relaxed italic">
                                <p>
                                    Create a Java program to implement a CRUD (Create, Read, Update, Delete) function for employees. 
                                    Each employee must have an integer identifier, a name, a salary, an address, an email address, and a phone number. 
                                    The program should display a console menu so the user can select the desired option. 
                                    The program should use a binary file named data.dat to store the employee information. 
                                    The entire program must be contained in a single file named Prompt3.java.
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
                                            <p className="text-gray-400 text-xs">Prompt3.java</p>
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