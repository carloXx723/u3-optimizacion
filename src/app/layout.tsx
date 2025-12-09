import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Proyecto U3 – Presentación",
  description: "Página de presentación del proyecto de LLMs y ANTLR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
 
      <body className="bg-gray-100 flex flex-row min-h-screen overflow-hidden">
        
  
        <Sidebar />

    
        <main className="flex-1 overflow-y-auto h-screen relative">
          {children}
        </main>
      </body>
    </html>
  );
}