import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// Importamos la tipografía elegante
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Geia",
  description: "Tu acompañante en momentos de crisis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Al poner playfair.className aquí, TODA la app usará esta letra automáticamente */}
      <body className={`${playfair.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}