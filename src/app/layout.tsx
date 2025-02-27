import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "Gainz Journal",
  description: "A journal for your fitness journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <header className="z-50">
          <NavBar />
        </header>
        <div className="z-10">{children}</div>
      </body>
    </html>
  );
}
