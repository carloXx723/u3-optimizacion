import React from 'react';
import {
    ClipboardDocumentCheckIcon,
    TableCellsIcon,
    CodeBracketIcon,
    CalculatorIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';

// --- CONFIGURACIÓN DE DATOS (PROMPT 4) ---
const models = [
    {
        id: "tinyllama",
        name: "TinyLlama",
        badge: "Modelo 1",
        color: "blue",
        metrics: { classes: 1, methods: 3, attributes: 3, assignments: 1, compiles: "Compilación Exitosa" },
        image: "/img/prompt4_modelo1.png", 
        code: `import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import org.jdesktop.layout.*;
import org.jdesktop.swingext.*;

public class Prompt4 extends JFrame {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new Prompt4().createAndShowGUI());
    }

    private JPanel contentPane;
    private double radius = 10;
    private int x = 50, y = 50;

    public Prompt4() {
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setTitle("Prompt 4");
        contentPane = new JPanel();
        contentPane.setLayout(new BorderLayout());

        // Create an animation of a red circle bouncing inside a white rectangle
        final Circle circle = new Circle();
        circle.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                SwingUtilities.invokeLater(() -> {
                    if (circle.getCenterX() < x && x <= circle.getCenterX() + radius && circle.getCenterY() < y && y <= circle.getCenterY() + radius)
{
                        circle.setX(circle.getCenterX() - Math.sqrt(Math.pow(radius, 2) - (circle.getCenterX() - x).pow(2)));
                        circle.setY(circle.getCenterY() - Math.sqrt(Math.pow(radius, 2) - (circle.getCenterY() - y).pow(2)));
                    } else {
                        circle.setX(x);
                        circle.setY(y);
                    }
                });
            }
        });

        // Create the JScrollPane for displaying the animation
        final JScrollPane scrollPane = new JScrollPane(circle, ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED |
ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED);

        contentPane.add(new BorderLayout());
        contentPane.put(BorderLayout.CENTER, scrollPane);
        contentPane.setSize(800, 600);
        setContentPane(contentPane);
    }

    public static void main(String[] args) {
        JFrame frame = new Prompt4();
        frame.pack();
        frame.setVisible(true);
    }
}
`
    },
    {
        id: "mistral",
        name: "Mistral-Nemo",
        badge: "Modelo 2",
        color: "indigo",
        metrics: { classes: 2, methods: 4, attributes: 4, assignments: 10, compiles: "Compilación Exitosa" },
        image: "/img/prompt4_modelo2.png",
        code: `import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Prompt4 extends JFrame {
    private JPanel panel;
    private Oval oval;
    private int dx = 5, dy = 5; // Initial direction of the circle

    public Prompt4() {
        super("Bouncing Circle");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);

        panel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                Graphics2D g2d = (Graphics2D) g;
                g2d.setColor(Color.white);
                g2d.fillRect(0, 0, getWidth(), getHeight()); // Draw white rectangle

                if (oval != null) {
                    g2d.setColor(Color.red);
                    g2d.drawOval(oval.x, oval.y, oval.width, oval.height); // Draw red circle
                }
            }
        };

        oval = new Oval(getWidth() / 3, getHeight() / 3, 50, 50); // Initial position and size of the circle

        Timer timer = new Timer(20, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                updateOvalPosition();
                panel.repaint();
            }
        });
        timer.start();

        add(panel);
        pack();
        setLocationRelativeTo(null); // Center the frame on the screen
        setVisible(true);
    }

    private void updateOvalPosition() {
        if (oval.x <= 0 || oval.x + oval.width >= getWidth()) {
            dx = -dx; // Reverse x direction when reaching boundaries
        }
        if (oval.y <= 0 || oval.y + oval.height >= getHeight()) {
            dy = -dy; // Reverse y direction when reaching boundaries
        }

        oval.x += dx;
        oval.y += dy;
    }

    private class Oval {
        int x, y, width, height;

        public Oval(int x, int y, int width, int height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new Prompt4());
    }
}
`
    },
    {
        id: "deepseek",
        name: "DeepSeek-V3",
        badge: "Modelo 3",
        color: "purple",
        metrics: { classes: 1, methods: 9, attributes: 12, assignments: 27, compiles: "Compilación Exitosa" },
        image: "/img/prompt4_modelo3.png",
        code: `import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Prompt4 extends JPanel implements ActionListener {
    // Animation parameters
    private static final int WINDOW_WIDTH = 800;
    private static final int WINDOW_HEIGHT = 600;
    private static final int RECTANGLE_WIDTH = 600;
    private static final int RECTANGLE_HEIGHT = 400;
    private static final int BALL_DIAMETER = 40;
    
    // Rectangle position (centered in window)
    private int rectX;
    private int rectY;
    
    // Ball position and velocity
    private int ballX;
    private int ballY;
    private int velocityX = 4;
    private int velocityY = 3;
    
    // Animation timer
    private Timer timer;
    
    public Prompt4() {
        // Calculate rectangle position (centered)
        rectX = (WINDOW_WIDTH - RECTANGLE_WIDTH) / 2;
        rectY = (WINDOW_HEIGHT - RECTANGLE_HEIGHT) / 2;
        
        // Initialize ball position (center of rectangle)
        ballX = rectX + (RECTANGLE_WIDTH - BALL_DIAMETER) / 2;
        ballY = rectY + (RECTANGLE_HEIGHT - BALL_DIAMETER) / 2;
        
        // Set up the panel
        setPreferredSize(new Dimension(WINDOW_WIDTH, WINDOW_HEIGHT));
        setBackground(Color.LIGHT_GRAY);
        
        // Create and start animation timer
        timer = new Timer(16, this); // ~60 FPS
        timer.start();
    }
    
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        
        // Enable anti-aliasing for smoother graphics
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, 
                           RenderingHints.VALUE_ANTIALIAS_ON);
        
        // Draw the white rectangle
        g2d.setColor(Color.WHITE);
        g2d.fillRect(rectX, rectY, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
        
        // Draw rectangle border
        g2d.setColor(Color.BLACK);
        g2d.setStroke(new BasicStroke(3));
        g2d.drawRect(rectX, rectY, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
        
        // Draw the red circle (ball)
        g2d.setColor(Color.RED);
        g2d.fillOval(ballX, ballY, BALL_DIAMETER, BALL_DIAMETER);
        
        // Draw ball outline
        g2d.setColor(Color.DARK_GRAY);
        g2d.setStroke(new BasicStroke(2));
        g2d.drawOval(ballX, ballY, BALL_DIAMETER, BALL_DIAMETER);
        
        // Draw shadow for 3D effect
        g2d.setColor(new Color(0, 0, 0, 100));
        g2d.fillOval(ballX + 3, ballY + 3, BALL_DIAMETER, BALL_DIAMETER);
        
        // Draw information text
        g2d.setColor(Color.BLUE);
        g2d.setFont(new Font("Arial", Font.BOLD, 16));
        
        String info1 = "Bouncing Ball Animation";
        String info2 = String.format("Position: (%d, %d) | Velocity: (%d, %d)", 
                                    ballX - rectX, ballY - rectY, velocityX, velocityY);
        String info3 = "Rectangle: " + RECTANGLE_WIDTH + " x " + RECTANGLE_HEIGHT;
        
        g2d.drawString(info1, 20, 30);
        g2d.drawString(info2, 20, 55);
        g2d.drawString(info3, 20, 80);
        
        // Draw controls info
        g2d.setColor(new Color(0, 100, 0));
        g2d.drawString("Controls: SPACE - Pause/Resume | R - Reset | +/- - Speed", 20, WINDOW_HEIGHT - 30);
    }
    
    @Override
    public void actionPerformed(ActionEvent e) {
        // Update ball position
        ballX += velocityX;
        ballY += velocityY;
        
        // Check for collisions with rectangle boundaries
        int leftBoundary = rectX;
        int rightBoundary = rectX + RECTANGLE_WIDTH - BALL_DIAMETER;
        int topBoundary = rectY;
        int bottomBoundary = rectY + RECTANGLE_HEIGHT - BALL_DIAMETER;
        
        // Check horizontal collisions
        if (ballX <= leftBoundary) {
            ballX = leftBoundary;
            velocityX = Math.abs(velocityX); // Bounce right
        } else if (ballX >= rightBoundary) {
            ballX = rightBoundary;
            velocityX = -Math.abs(velocityX); // Bounce left
        }
        
        // Check vertical collisions
        if (ballY <= topBoundary) {
            ballY = topBoundary;
            velocityY = Math.abs(velocityY); // Bounce down
        } else if (ballY >= bottomBoundary) {
            ballY = bottomBoundary;
            velocityY = -Math.abs(velocityY); // Bounce up
        }
        
        // Repaint the panel
        repaint();
    }
    
    // Handle keyboard controls
    private void setupKeyBindings() {
        InputMap inputMap = getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW);
        ActionMap actionMap = getActionMap();
        
        // Space key to pause/resume animation
        inputMap.put(KeyStroke.getKeyStroke("SPACE"), "toggleAnimation");
        actionMap.put("toggleAnimation", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (timer.isRunning()) {
                    timer.stop();
                } else {
                    timer.start();
                }
            }
        });
        
        // R key to reset animation
        inputMap.put(KeyStroke.getKeyStroke("R"), "resetAnimation");
        actionMap.put("resetAnimation", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                resetAnimation();
            }
        });
        
        // Plus key to increase speed
        inputMap.put(KeyStroke.getKeyStroke("EQUALS"), "increaseSpeed");
        actionMap.put("increaseSpeed", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (Math.abs(velocityX) < 20 && Math.abs(velocityY) < 20) {
                    velocityX += (velocityX > 0) ? 1 : -1;
                    velocityY += (velocityY > 0) ? 1 : -1;
                }
            }
        });
        
        // Minus key to decrease speed
        inputMap.put(KeyStroke.getKeyStroke("MINUS"), "decreaseSpeed");
        actionMap.put("decreaseSpeed", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (Math.abs(velocityX) > 1 && Math.abs(velocityY) > 1) {
                    velocityX -= (velocityX > 0) ? 1 : -1;
                    velocityY -= (velocityY > 0) ? 1 : -1;
                }
            }
        });
    }
    
    private void resetAnimation() {
        // Reset ball to center of rectangle
        ballX = rectX + (RECTANGLE_WIDTH - BALL_DIAMETER) / 2;
        ballY = rectY + (RECTANGLE_HEIGHT - BALL_DIAMETER) / 2;
        
        // Reset velocity to default
        velocityX = 4;
        velocityY = 3;
        
        // Ensure animation is running
        if (!timer.isRunning()) {
            timer.start();
        }
    }
    
    public static void main(String[] args) {
        // Create and show the application window
        SwingUtilities.invokeLater(() -> {
            // Create main frame
            JFrame frame = new JFrame("Bouncing Ball Animation");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            
            // Create animation panel
            Prompt4 animationPanel = new Prompt4();
            
            // Set up key bindings
            animationPanel.setupKeyBindings();
            
            // Add panel to frame
            frame.add(animationPanel);
            
            // Configure frame
            frame.pack();
            frame.setLocationRelativeTo(null); // Center on screen
            frame.setResizable(false);
            
            // Add control panel with buttons
            JPanel controlPanel = new JPanel();
            controlPanel.setBackground(Color.LIGHT_GRAY);
            
            JButton pauseButton = new JButton("Pause/Resume (Space)");
            pauseButton.addActionListener(e -> {
                if (animationPanel.timer.isRunning()) {
                    animationPanel.timer.stop();
                    pauseButton.setText("Resume (Space)");
                } else {
                    animationPanel.timer.start();
                    pauseButton.setText("Pause (Space)");
                }
            });
            
            JButton resetButton = new JButton("Reset (R)");
            resetButton.addActionListener(e -> animationPanel.resetAnimation());
            
            JButton fasterButton = new JButton("Faster (+)");
            fasterButton.addActionListener(e -> {
                if (Math.abs(animationPanel.velocityX) < 20 && Math.abs(animationPanel.velocityY) < 20) {
                    animationPanel.velocityX += (animationPanel.velocityX > 0) ? 1 : -1;
                    animationPanel.velocityY += (animationPanel.velocityY > 0) ? 1 : -1;
                }
            });
            
            JButton slowerButton = new JButton("Slower (-)");
            slowerButton.addActionListener(e -> {
                if (Math.abs(animationPanel.velocityX) > 1 && Math.abs(animationPanel.velocityY) > 1) {
                    animationPanel.velocityX -= (animationPanel.velocityX > 0) ? 1 : -1;
                    animationPanel.velocityY -= (animationPanel.velocityY > 0) ? 1 : -1;
                }
            });
            
            controlPanel.add(pauseButton);
            controlPanel.add(resetButton);
            controlPanel.add(fasterButton);
            controlPanel.add(slowerButton);
            
            frame.add(controlPanel, BorderLayout.SOUTH);
            
            // Show frame
            frame.setVisible(true);
            
            // Request focus for key bindings
            animationPanel.requestFocusInWindow();
        });
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
        image: "/img/prompt4_modelo4.png", // Ejemplo: "/img/prompt4_modelo4.png"
        code: `[-0.09327204,0.04386957,-0.014250327,0.025100868,-0.0129142655,0.0117567135,-0.010511711,0.019715847,0.007212021,
        -0.006788592,-0.011702302,0.0059193214,0.012712685,-0.018436072,0.004472802,0.033661652,0.02250042,0.0688229,0.050903387,
        0.0065858923,-0.0050646565,-0.023469362,-0.0014054035,-0.0034131452,0.012074979,-0.0019001181,0.015567743,-0.013740953,
        0.0074695717,-0.021903664,0.0070640943,-0.060563315,-0.011741147,-0.016432393,-0.028148377,-0.013956146,-0.026599668,0.009316707,
        -0.032628488,0.008370278,-0.034481063,-0.028633015,0.015479961,0.006666133,-0.01953518,-0.013481827,0.0052789366,-0.026420517,
        -0.014593854,-0.013272298,-0.033205744,0.02846108,0.06694134,-0.017871171,0.05199288,0.03641032,0.004748809,-0.00717708,
        -0.0631187,0.039068922,-0.022419935,0.038387947,-0.046925716,0.0045981235,0.038037356,0.03797068,-0.02506682,0.017251855,0.0012099714,
        -0.0053645032,-0.015802504,0.018350808,-0.0029203035,-0.004186516,-0.051708996,-0.0164976,0.0149105815,-0.027729943,-0.061143298,0.03402869,
        0.008705031,0.0023585502,-0.029134542,0.027139666,0.007025422,0.007125856,0.008666793,0.09140056,-0.00019837062,-0.0119772935,-0.0025458604,
        -0.008801699,0.046545476,-0.021509616,-0.049075335,0.030650489,0.0075275744,-0.022736287,0.007796114,0.02510906,-0.020612787,-0.021863816,
        -0.03104414,-0.00094054104,0.005004509,-0.029556656,0.04163551,-0.011328031,-0.020300787,-0.01599861,0.02724364,0.008035205,0.025567552,
        0.041224737,-0.0020796172,0.005577397,-0.028752364,-0.033589464,0.044092014,0.016016725,-0.017780486,0.036208283,0.024582434,0.014772488,
        -0.020040829,-0.018707616,-0.011322373,0.077269986,0.0012252912,0.014666264,0.022544855,0.0706778,0.0054761125,0.022926414,-0.040854428,
        0.010146975,0.015906092,-0.006219149,0.00410626,-0.03420776,0.051970337,-0.011416712,0.0132367825,-0.021885011,-0.002440729,-0.06870706,
        0.0046262234,0.026444018,-0.00009733029,-0.016512645,-0.043398667,0.04914448,0.018885601,-0.019846171,0.0001498538,-0.019256549,0.029183865,
        -0.037254263,0.040768553,0.031310465,-0.008899366,0.010728687,-0.008633523,0.060462777,0.0028121057,0.008671607,-0.011023643,0.026539804,
        -0.02064507,-0.051936384,0.030371593,0.04915806,0.033494096,0.034111068,-0.00584876,0.01618527,0.0219986,0.0007089749,0.008048495,
        -0.040945433,-0.036575466,0.0054378575,-0.00804015,-0.028201627,0.007733966,0.019929305,-0.01895862,0.01340106,0.010625223,0.013809279,
        -0.01927126,-0.02942666,0.06289584,0.015291465,-0.009548232,-0.01388572,0.050469074,-0.018079238...`
    },
    {
        id: "llama33",
        name: "Llama 3.3",
        badge: "Modelo 5",
        color: "orange",
        metrics: { classes: 1, methods: 3, attributes: 8, assignments: 9, compiles: "Compilacion Exitosa" },
        image: "/img/prompt4_modelo5.png",
        code: `import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Prompt4 extends JPanel implements ActionListener {
    private int circleX = 100;
    private int circleY = 100;
    private int circleDiameter = 50;
    private int rectangleWidth = 400;
    private int rectangleHeight = 400;
    private int speedX = 3;
    private int speedY = 3;

    private Timer timer;

    public Prompt4() {
        setBackground(Color.WHITE);
        setPreferredSize(new Dimension(600, 600));

        timer = new Timer(16, this);
        timer.start();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Draw the rectangle
        int rectangleX = (getWidth() - rectangleWidth) / 2;
        int rectangleY = (getHeight() - rectangleHeight) / 2;
        g.drawRect(rectangleX, rectangleY, rectangleWidth, rectangleHeight);

        // Draw the circle
        g.setColor(Color.RED);
        g.fillOval(circleX, circleY, circleDiameter, circleDiameter);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // Update the circle position
        circleX += speedX;
        circleY += speedY;

        // Bounce off the edges of the rectangle
        int rectangleX = (getWidth() - rectangleWidth) / 2;
        int rectangleY = (getHeight() - rectangleHeight) / 2;
        if (circleX < rectangleX || circleX + circleDiameter > rectangleX + rectangleWidth) {
            speedX = -speedX;
        }
        if (circleY < rectangleY || circleY + circleDiameter > rectangleY + rectangleHeight) {
            speedY = -speedY;
        }

        // Ensure the circle stays within the window
        if (circleX < 0) {
            circleX = 0;
        } else if (circleX + circleDiameter > getWidth()) {
            circleX = getWidth() - circleDiameter;
        }
        if (circleY < 0) {
            circleY = 0;
        } else if (circleY + circleDiameter > getHeight()) {
            circleY = getHeight() - circleDiameter;
        }

        // Repaint the screen
        repaint();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Bouncing Circle");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.add(new Prompt4());
            frame.pack();
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`
    }
];

export default function Prompt4Page() {

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
                        Prompt 4
                    </h1>
                    <p className="text-lg text-gray-600">
                        Animación Gráfica con Swing (Círculo Rebotando)
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
                                    Genera un programa en java, que construya una aplicación empleando una ventana de windows con la librería de componentes visuales Swing. 
                                    La aplicación debe mostrar una animación de un círculo rojo rebotando dentro de un rectángulo blanco. 
                                    El rectángulo debe estar centrado en la ventana de windows. 
                                    El programa generado debe estar contenido en un solo archivo con nombre Prompt4.java
                                </p>
                            </div>
                        </div>

                        {/* Inglés */}
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">English Version</h3>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 font-mono leading-relaxed italic">
                                <p>
                                    Create a Java program that builds an application using a Windows window with the Swing visual component library. 
                                    The application should display an animation of a red circle bouncing inside a white rectangle. 
                                    The rectangle should be centered within the Windows window. 
                                    The generated program should be contained in a single file named Prompt4.java.
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
                                            <p className="text-gray-400 text-xs">Prompt4.java</p>
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