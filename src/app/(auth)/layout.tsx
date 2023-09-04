import { ThemeProvider } from "@/contexts/ThemeProvider";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Londrina_Solid, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800"],
  variable: "--font-body",
});

const heading = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Expresso",
  description: "Express with your words!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${heading.variable} ${poppins.variable} `}
    >
      <body className={`font-body min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
